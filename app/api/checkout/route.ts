import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/products";

export const runtime = "nodejs";

interface IncomingItem {
  slug: string;
  qty: number;
}

function makeOrderId() {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `UD-${stamp}-${rand}`;
}

export async function POST(req: Request) {
  let body: { items?: IncomingItem[]; customer?: Record<string, string> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });
  }

  const incoming = Array.isArray(body.items) ? body.items : [];

  // Build authoritative line items from the server-side catalog so prices
  // can never be tampered with from the client.
  const lineItems: {
    name: string;
    price: number;
    image: string | null;
    qty: number;
  }[] = [];

  for (const item of incoming) {
    const product = getProductBySlug(item?.slug);
    if (!product) continue;
    const qty = Math.max(1, Math.min(99, Math.floor(Number(item.qty) || 1)));
    lineItems.push({
      name: product.name,
      price: product.price,
      image: product.image,
      qty,
    });
  }

  if (lineItems.length === 0) {
    return NextResponse.json({ error: "El carrito está vacío." }, { status: 400 });
  }

  const orderId = makeOrderId();
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  // Real payment path — active automatically once STRIPE_SECRET_KEY is set.
  if (stripeKey) {
    try {
      const Stripe = (await import("stripe")).default;
      const stripe = new Stripe(stripeKey);
      const origin =
        req.headers.get("origin") ?? new URL(req.url).origin;

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer_email: body.customer?.email,
        line_items: lineItems.map((l) => ({
          quantity: l.qty,
          price_data: {
            currency: "ars",
            unit_amount: l.price * 100,
            product_data: {
              name: l.name,
              images: l.image ? [`${origin}${l.image}`] : undefined,
            },
          },
        })),
        shipping_address_collection: { allowed_countries: ["AR"] },
        success_url: `${origin}/checkout/confirmacion?order=${orderId}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/checkout`,
        metadata: { orderId },
      });

      return NextResponse.json({ url: session.url });
    } catch (err) {
      console.error("Stripe checkout error:", err);
      return NextResponse.json(
        { error: "No se pudo iniciar el pago. Inténtalo de nuevo." },
        { status: 500 },
      );
    }
  }

  // Demo path — no Stripe key configured yet. The order flow works end to end
  // so the store is fully testable; add STRIPE_SECRET_KEY to charge for real.
  return NextResponse.json({ demo: true, orderId });
}
