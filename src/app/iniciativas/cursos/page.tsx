import CourseList from "@/app/components/courseList";

const courses = [
  {
    id: 1,
    name: "Curso de JavaScript para Iniciantes",
    href: "https://www.youtube.com/playlist?list=PLndJnupfcnxEBiQ7yiXroVGZCGuFMP_Ug",
    price: "R$0",
    imageSrc: "/images/curso-javascript.png",
    imageAlt: "Curso de JavaScript para iniciantes.",
  },
  {
    id: 2,
    name: 'Curso de HTML e CSS',
    href:'https://www.youtube.com/playlist?list=PLndJnupfcnxEdBG9k5dkMlDxMJtto_9g8',
    price: 'R$0',
    imageSrc: '/images/curso-html-css.png',
    imageAlt: 'Curso de HTML e CSS para iniciantes.'
  },
  {
    id: 3,
    name: 'Aprendizagem com IA na Alura',
    href: 'https://www.alura.com.br/formacao-iahttps://www.alura.com.br/curso-online-aprendizagem-ia-personalizando-rotina-chatgpt?c=danvitoriano',
    price: 'Mais de 1400 cursos por 12x R$92,65 (15% off)',
    imageSrc: '/images/curso-alura.png',
    imageAlt: 'Aprendizagem com IA na Alura.'
  },
  {
    id: 4,
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
