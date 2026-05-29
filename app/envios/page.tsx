import type { Metadata } from "next";
import { InfoLayout, InfoSection } from "@/components/InfoLayout";

export const metadata: Metadata = {
  title: "Envíos y entregas",
  description:
    "Envíos a todo el país con cuidado y seguimiento. Conocé zonas, plazos y costos.",
};

export default function EnviosPage() {
  return (
    <InfoLayout
      eyebrow="Ayuda"
      title="Envíos y entregas"
      intro="Llevamos tus muebles a todo el país, embalados con cuidado y con seguimiento de principio a fin."
    >
      <InfoSection title="Zonas y plazos">
        <p>
          <strong className="text-ink">CABA y Gran Buenos Aires:</strong> entrega
          en 24 a 72 hs hábiles.
        </p>
        <p>
          <strong className="text-ink">Interior del país:</strong> de 3 a 7 días
          hábiles según la localidad, a través de transportes y encomiendas de
          confianza.
        </p>
      </InfoSection>

      <InfoSection title="Costo de envío">
        <p>
          El costo se calcula según tu localidad al finalizar la compra. En
          compras grandes podés tener el envío bonificado: consultanos por
          WhatsApp.
        </p>
      </InfoSection>

      <InfoSection title="Retiro en showroom">
        <p>
          Si preferís, podés retirar tu pedido sin cargo en nuestro showroom de{" "}
          <strong className="text-ink">
            Gelly y Obes 3446, San Miguel, Provincia de Buenos Aires
          </strong>
          .
        </p>
        <p>
          <strong className="text-ink">Horario de atención:</strong> lunes a
          viernes de 09:00 a 17:00 hs. Te esperamos ✨
        </p>
      </InfoSection>

      <InfoSection title="Seguimiento">
        <p>
          Te avisamos por WhatsApp y email cuando tu pedido sale y cuando está
          por llegar, así no perdés detalle.
        </p>
      </InfoSection>
    </InfoLayout>
  );
}
