import type { Metadata } from "next";
import { IconChevronRight, IconWhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respondemos las dudas más comunes sobre envíos, pagos, productos, cambios y atención.",
};

const FAQ_GROUPS = [
  {
    title: "Envíos y entregas",
    items: [
      {
        q: "¿En cuánto tiempo recibo mi pedido?",
        a: "En CABA y Gran Buenos Aires, entre 24 y 72 hs hábiles. Al interior del país, entre 3 y 7 días hábiles según la localidad.",
      },
      {
        q: "¿Cuánto cuesta el envío?",
        a: "El costo se calcula según tu localidad al finalizar la compra. Para compras grandes podemos bonificar el envío — consultanos por WhatsApp.",
      },
      {
        q: "¿Puedo retirar por el showroom?",
        a: "Sí, podés retirar sin cargo coordinando día y horario por WhatsApp.",
      },
      {
        q: "¿Hacen seguimiento del envío?",
        a: "Sí, te avisamos por WhatsApp o email cuando tu pedido sale y cuando está por llegar.",
      },
    ],
  },
  {
    title: "Medios de pago y cuotas",
    items: [
      {
        q: "¿Qué medios de pago aceptan?",
        a: "Tarjetas de crédito y débito, transferencia bancaria (con posible descuento) y efectivo al retirar en el showroom.",
      },
      {
        q: "¿Tienen cuotas sin interés?",
        a: "Sí, ofrecemos 3 cuotas sin interés con tu tarjeta de crédito, y hasta 12 cuotas con interés.",
      },
      {
        q: "¿Es seguro pagar online?",
        a: "Sí. Procesamos los pagos con una pasarela segura cifrada; nunca guardamos los datos de tu tarjeta.",
      },
    ],
  },
  {
    title: "Productos",
    items: [
      {
        q: "¿Los productos vienen armados?",
        a: "Los muebles se entregan listos para usar. Las camas y algunos racks pueden requerir un armado simple — viene con instrucciones claras y, si lo necesitás, te lo coordinamos.",
      },
      {
        q: "¿Los colores que se ven en pantalla son exactos?",
        a: "Hacemos lo posible para que sean fieles, pero pueden variar levemente según el monitor. Si dudás del tono, escribinos y te lo confirmamos.",
      },
      {
        q: "¿Puedo elegir el color del tapizado?",
        a: "Muchos productos tienen selector de color en su ficha. Si necesitás un color a medida, escribinos y vemos si se puede.",
      },
      {
        q: "¿Hacen muebles a medida?",
        a: "Consultanos por WhatsApp con la idea y las medidas — algunos modelos los podemos adaptar.",
      },
    ],
  },
  {
    title: "Cambios y devoluciones",
    items: [
      {
        q: "¿Cuánto tiempo tengo para cambiarlo?",
        a: "30 días desde que recibís tu pedido para solicitar un cambio o devolución.",
      },
      {
        q: "¿En qué condiciones puedo devolverlo?",
        a: "Sin uso, en su embalaje original y con etiquetas. Los productos a medida o personalizados no admiten cambio.",
      },
      {
        q: "¿Cómo gestiono un cambio?",
        a: "Escribinos por WhatsApp con tu número de pedido y coordinamos el retiro o el cambio.",
      },
      {
        q: "¿Qué garantía tienen los muebles?",
        a: "Todos nuestros muebles tienen 2 años de garantía contra defectos de fabricación.",
      },
    ],
  },
  {
    title: "Atención y soporte",
    items: [
      {
        q: "¿Cómo me contacto?",
        a: "La forma más rápida es por WhatsApp (+54 9 11 6262-4178). También podés escribirnos desde el formulario de Contacto o por Instagram @urbandeco_.",
      },
      {
        q: "¿Tienen horario de atención?",
        a: "Lunes a sábados, de 10:00 a 20:00 hs. Por WhatsApp te respondemos lo antes posible.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
      <header>
        <p className="eyebrow">Ayuda</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">
          Preguntas frecuentes
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone">
          Las dudas más comunes, respondidas. Si no encontrás lo que buscás,
          escribinos por WhatsApp y te ayudamos.
        </p>
      </header>

      <div className="mt-12 space-y-12">
        {FAQ_GROUPS.map((group) => (
          <section key={group.title}>
            <h2 className="font-display text-2xl">{group.title}</h2>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {group.items.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-ink">
                    <span className="font-medium">{item.q}</span>
                    <IconChevronRight className="mt-1 size-4 shrink-0 text-stone transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="mt-3 leading-relaxed text-stone">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-sand p-7 ring-1 ring-line">
        <p className="font-display text-xl">¿No encontraste tu respuesta?</p>
        <p className="mt-2 text-sm text-stone">
          Te ayudamos al instante por WhatsApp.
        </p>
        <a
          href="https://wa.me/5491162624178"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
        >
          <IconWhatsApp className="size-4" /> Escribinos por WhatsApp
        </a>
      </div>
    </div>
  );
}
