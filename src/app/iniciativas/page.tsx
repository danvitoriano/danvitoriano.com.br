import type { Metadata } from "next";
import CenteredGrid from "../components/centeredGrid";

export const metadata: Metadata = {
  title: "Iniciativas | Dan Vitoriano",
  description: "Iniciativas de Dan Vitoriano para diversidade e inclusão em tecnologia: comunidades tech inclusivas, conteúdo educacional e projetos voltados à representatividade LGBTQIA+, pessoas 40+ e grupos sub-representados no mercado tech.",
  keywords: ["iniciativas diversidade tecnologia", "Orgulho Tech", "Devs 40+", "comunidades tech inclusivas", "representatividade tecnologia", "inclusão mercado tech"],
  alternates: { canonical: "https://danvitoriano.com.br/iniciativas" },
  openGraph: {
    title: "Iniciativas | Dan Vitoriano",
    description: "Projetos e comunidades tech para diversidade, inclusão e representatividade no mercado de tecnologia.",
    url: "https://danvitoriano.com.br/iniciativas",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://danvitoriano.com.br" },
    { "@type": "ListItem", "position": 2, "name": "Iniciativas", "item": "https://danvitoriano.com.br/iniciativas" }
  ]
};

export default function Iniciativas() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CenteredGrid />
    </div>
  );
}
