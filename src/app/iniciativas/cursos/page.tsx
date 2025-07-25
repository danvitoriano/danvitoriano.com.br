import CourseList from "@/app/components/courseList";

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
    <CourseList products={courses} />
    </>
  );
}
