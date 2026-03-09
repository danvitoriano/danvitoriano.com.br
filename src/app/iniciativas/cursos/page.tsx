import type { Metadata } from "next";
import CourseList from "@/app/components/courseList";

export const metadata: Metadata = {
  title: "Cursos de Tecnologia e IA | Dan Vitoriano",
  description: "Cursos de tecnologia e inteligência artificial recomendados por Dan Vitoriano. Recursos gratuitos e pagos para quem quer entrar ou se desenvolver no mercado tech, com foco em inclusão e diversidade.",
  keywords: ["cursos tecnologia", "cursos IA", "cursos programação gratuitos", "aprender tecnologia", "inteligência artificial cursos", "Dan Vitoriano cursos"],
  alternates: { canonical: "https://danvitoriano.com.br/iniciativas/cursos" },
  openGraph: {
    title: "Cursos de Tecnologia e IA | Dan Vitoriano",
    description: "Cursos de tecnologia e IA recomendados por Dan Vitoriano para quem quer entrar ou crescer no mercado tech.",
    url: "https://danvitoriano.com.br/iniciativas/cursos",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://danvitoriano.com.br" },
    { "@type": "ListItem", "position": 2, "name": "Iniciativas", "item": "https://danvitoriano.com.br/iniciativas" },
    { "@type": "ListItem", "position": 3, "name": "Cursos", "item": "https://danvitoriano.com.br/iniciativas/cursos" }
  ]
};

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Cursos Recomendados por Dan Vitoriano",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Imersão Dados com Python - Alura",
        "url": "https://link.danvitoriano.com.br/python",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
        "provider": { "@type": "Organization", "name": "Alura" }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "FIAP + ALURA | Lives IA em 4 Dimensões",
        "url": "https://link.danvitoriano.com.br/fiap",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
        "provider": { "@type": "Organization", "name": "FIAP + Alura" }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "Aprendizagem com IA na Alura (+1400 cursos)",
        "url": "https://www.alura.com.br/formacao-ia",
        "provider": { "@type": "Organization", "name": "Alura" }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "Curso de JavaScript para Iniciantes",
        "url": "https://www.youtube.com/playlist?list=PLndJnupfcnxEBiQ7yiXroVGZCGuFMP_Ug",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
        "provider": { "@type": "Person", "name": "Dan Vitoriano" },
        "inLanguage": "pt-BR"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Course",
        "name": "Curso de HTML e CSS",
        "url": "https://www.youtube.com/playlist?list=PLndJnupfcnxEdBG9k5dkMlDxMJtto_9g8",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
        "provider": { "@type": "Person", "name": "Dan Vitoriano" },
        "inLanguage": "pt-BR"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Course",
        "name": "Curso CS50 de Harvard",
        "url": "https://www.edx.org/course/cs50s-introduction-to-computer-science",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
        "provider": { "@type": "Organization", "name": "Harvard / edX" }
      }
    }
  ]
};

const courses = [
  {
    id: 1,
    name: 'Imersão Dados com Python - Alura',
    href: 'https://link.danvitoriano.com.br/python',
    price: 'R$0',
    imageSrc: '/images/imersao-dados-python.png',
    imageAlt: 'Imersão Dados com Python da Alura.'
  },
  {
    id: 2,
    name: 'FIAP + ALURA | Lives IA em 4 Dimensões',
    href: 'https://link.danvitoriano.com.br/fiap',
    price: 'R$0',
    imageSrc: '/images/fiap-alura-ia-4-dimensoes.png',
    imageAlt: 'Lives IA em 4 Dimensões - FIAP + ALURA.'
  },
  {
    id: 3,
    name: 'Aprendizagem com IA na Alura (+1400 cursos)',
    href: 'https://www.alura.com.br/formacao-iahttps://www.alura.com.br/curso-online-aprendizagem-ia-personalizando-rotina-chatgpt?c=danvitoriano',
    price: '12x R$92,65 (15% off)',
    imageSrc: '/images/curso-alura.png',
    imageAlt: 'Aprendizagem com IA na Alura.'
  },
  {
    id: 4,
    name: "Curso de JavaScript para Iniciantes",
    href: "https://www.youtube.com/playlist?list=PLndJnupfcnxEBiQ7yiXroVGZCGuFMP_Ug",
    price: "R$0",
    imageSrc: "/images/curso-javascript.png",
    imageAlt: "Curso de JavaScript para iniciantes.",
  },
  {
    id: 5,
    name: 'Curso de HTML e CSS',
    href:'https://www.youtube.com/playlist?list=PLndJnupfcnxEdBG9k5dkMlDxMJtto_9g8',
    price: 'R$0',
    imageSrc: '/images/curso-html-css.png',
    imageAlt: 'Curso de HTML e CSS para iniciantes.'
  },
  {
    id: 6,
    name: 'Curso CS50 de Harvard',
    href: 'https://www.edx.org/course/cs50s-introduction-to-computer-science',
    price: 'R$0',
    imageSrc: '/images/curso-cs50-harvard.png',
    imageAlt: 'Curso CS50 de Harvard.'
  },
];

export default function Cursos() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }} />
      <CourseList products={courses} />
    </>
  );
}
