import type { Metadata } from "next";
import { InfoLayout, InfoSection } from "@/components/InfoLayout";

export const metadata: Metadata = {
  title: "Cambios y devoluciones",
  description:
    "Tu compra está protegida. Conocé plazos, condiciones y garantía de Urban Deco.",
};

export default function CambiosPage() {
  return (
    <InfoLayout
      eyebrow="Ayuda"
      title="Cambios y devoluciones"
      intro="Tu compra está protegida. Si algo no te convence, lo resolvemos."
    >
      <InfoSection title="Plazo">
        <p>
          Tenés 30 días desde que recibís tu pedido para solicitar un cambio o
          devolución.
        </p>
      </InfoSection>

      <InfoSection title="Condiciones">
        <p>
          El producto debe estar sin uso, en su embalaje original y con sus
          etiquetas. Los productos a medida o personalizados no admiten cambio.
        </p>
      </InfoSection>

      <InfoSection title="Garantía">
        <p>
          Todos nuestros muebles tienen 2 años de garantía contra defectos de
          fabricación.
        </p>
      </InfoSection>

      <InfoSection title="¿Cómo lo gestiono?">
        <p>
          Escribinos por WhatsApp con tu número de pedido y coordinamos el
          retiro o el cambio sin vueltas.
        </p>
      </InfoSection>
    </InfoLayout>
  );
}
