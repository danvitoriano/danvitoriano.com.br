import type { Metadata } from "next";
import ContactPage from "../components/contact";

export const metadata: Metadata = {
  title: "Contato | Dan Vitoriano",
  description: "Entre em contato com Dan Vitoriano para consultoria em tecnologia e IA, palestras, produção de eventos tech ou parcerias em projetos de diversidade e inclusão no mercado de tecnologia.",
  keywords: ["contratar Dan Vitoriano", "consultoria tecnologia", "palestra diversidade tecnologia", "consultoria IA", "Dan Vitoriano contato"],
  alternates: { canonical: "https://danvitoriano.com.br/contact" },
  openGraph: {
    title: "Contato | Dan Vitoriano",
    description: "Fale com Dan Vitoriano para consultoria em tecnologia, IA, palestras e produção de eventos tech.",
    url: "https://danvitoriano.com.br/contact",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://danvitoriano.com.br" },
    { "@type": "ListItem", "position": 2, "name": "Contato", "item": "https://danvitoriano.com.br/contact" }
  ]
};

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactPage />
    </>
  );
}
