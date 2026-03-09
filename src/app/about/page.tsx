import type { Metadata } from "next";
import Ods from "../components/ods";
import Purpose from "./../components/Purpose";
import Featured from "./../components/featured";
import Journey from "./../components/journey";
import Recognition from "./../components/recognition";

export const metadata: Metadata = {
  title: "Quem é Dan Vitoriano | Consultor em Tecnologia, IA e Diversidade",
  description: "Conheça Dan Vitoriano: consultor em tecnologia e inteligência artificial, produtor de eventos tech e criador de conteúdo com foco em diversidade, inclusão e representatividade LGBTQIA+ no mercado de tecnologia brasileiro.",
  keywords: ["Dan Vitoriano", "consultor tecnologia", "diversidade inclusão tecnologia", "inclusão LGBTQIA+ tech", "representatividade tecnologia", "quem é Dan Vitoriano"],
  alternates: { canonical: "https://danvitoriano.com.br/about" },
  openGraph: {
    title: "Quem é Dan Vitoriano | Consultor em Tecnologia, IA e Diversidade",
    description: "Consultor em tecnologia e IA, produtor de eventos tech e criador de conteúdo com foco em diversidade e inclusão no mercado de tecnologia.",
    url: "https://danvitoriano.com.br/about",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://danvitoriano.com.br" },
    { "@type": "ListItem", "position": 2, "name": "Quem Sou", "item": "https://danvitoriano.com.br/about" }
  ]
};

const purposeData = {
  id: "proposito",
  topic: "Propósito",
  titulo: "Diversidade e inovação no mercado tech",
  content: "A diversidade é essencial para o crescimento e a inovação do mercado de tecnologia. Ao promover um ambiente inclusivo e acolhedor para todos, as empresas podem atrair e reter os melhores talentos, impulsionar a criatividade e alcançar melhores resultados. Minha própria trajetória, começando na tecnologia após os 35 anos, é prova de que nunca é tarde para recomeçar e fazer a diferença.",
};

export default function Sobre() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Featured titulo="Quem é Dan Vitoriano" />
      <Journey />
      <Purpose id={purposeData.id} topic={purposeData.topic} titulo={purposeData.titulo} content={purposeData.content}  />
      <Recognition />
      <Ods />
    </>
  );
}
