import type { Metadata } from "next";
import { InfoLayout, InfoSection } from "@/components/InfoLayout";

export const metadata: Metadata = {
  title: "Medios de pago",
  description:
    "Pagá como más te convenga: tarjetas, cuotas sin interés, transferencia o efectivo.",
};

export default function PagosPage() {
  return (
    <InfoLayout
      eyebrow="Ayuda"
      title="Medios de pago"
      intro="Pagá como más te convenga, de forma 100% segura."
    >
      <InfoSection title="Tarjetas y cuotas">
        <p>
          Aceptamos tarjetas de crédito y débito. Comprá en{" "}
          <strong className="text-ink">3 cuotas sin interés</strong> y hasta 12
          cuotas con tu tarjeta.
        </p>
      </InfoSection>

      <InfoSection title="Transferencia o efectivo">
        <p>
          También podés abonar por transferencia bancaria (consultá si tiene
          descuento) o en efectivo al retirar en el showroom.
        </p>
      </InfoSection>

      <InfoSection title="Pago seguro">
        <p>
          Procesamos los pagos de forma cifrada a través de una pasarela
          segura. Nunca guardamos los datos de tu tarjeta.
        </p>
      </InfoSection>
    </InfoLayout>
  );
}
