import type { Metadata } from "next";
import List from "../components/List";

export const metadata: Metadata = {
  title: "Imprensa | Dan Vitoriano",
  description: "Material de imprensa de Dan Vitoriano: consultor em tecnologia e IA, criador de conteúdo tech e referência em diversidade e inclusão no mercado de tecnologia brasileiro. Cobertura de mídia, entrevistas e press kit.",
  keywords: ["Dan Vitoriano imprensa", "press kit tecnologia", "entrevista diversidade tech", "mídia tecnologia inclusão", "Dan Vitoriano mídia"],
  alternates: { canonical: "https://danvitoriano.com.br/imprensa" },
  openGraph: {
    title: "Imprensa | Dan Vitoriano",
    description: "Material de imprensa e press kit de Dan Vitoriano - consultor em tecnologia, IA e diversidade.",
    url: "https://danvitoriano.com.br/imprensa",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://danvitoriano.com.br" },
    { "@type": "ListItem", "position": 2, "name": "Imprensa", "item": "https://danvitoriano.com.br/imprensa" }
  ]
};

export default function Imprensa() {
    return (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
          <List />
        </>
    );
}