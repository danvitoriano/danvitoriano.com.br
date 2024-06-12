import ProductList from "@/app/components/productList";

const ebooks = [
  {
    id: 1,
    name: "Vivências LGBTQ+ na computação",
    href: "https://materiais.danvitoriano.com.br/ebook-lgbt",
    price: "R$0",
    imageSrc: "/images/ebook-lgbt.png",
    imageAlt: "Ebook sobre vivências LGBTQ+ na computação.",
  },
  {
    id: 2,
    name: "O Básico da Web",
    href: "https://docs.google.com/document/d/1Vyls2ojKAdwyAnv3LZx81j5tNgMJ0748rUGFZkwrNys/edit?usp=sharing",
    price: "R$0",
    imageSrc: "/images/ebook-basico-web.png",
    imageAlt:
      "ebook sobre o básico da web para quem não sabe nada de internet.",
  },
  {
    id: 3,
    name: "Node.js e Express.js",
    href: "https://docs.google.com/presentation/d/13N6A4f_GCxJA0963y2NBUILpSN6Jfj0rMPJgZBM7Ux4/edit?usp=sharing",
    price: "R$0",
    imageSrc: "/images/ebook-nodejs-express.png",
    imageAlt: "ebook sobre Node.js e Express.js.",
  },
  {
    id: 4,
    name: "CSS in JS",
    href: "https://docs.google.com/presentation/d/1wDefpdDIoW-8wXfK3ooNaNQlJUv-QC3tkzyqbDKwApQ/edit?usp=sharing",
    price: "R$0",
    imageSrc: "/images/ebook-css-in-js.png",
    imageAlt: "Ebook sobre CSS in JS.",
  },
  {
    id: 5,
    name: "Testes com JS",
    href: "https://docs.google.com/presentation/d/14YteXpQD4nbX_28emM5AoX78acewWvSjAMY3aTcpOP4/edit?usp=sharing",
    price: "R$0",
    imageSrc: "/images/ebook-testes-js.png",
    imageAlt: "Ebook sobre testes com JS.",
  },
  {
    id: 6,
    name: "Produto e Agilidade na Visão Dev",
    href: "https://speakerdeck.com/danvitoriano/produtos-and-agilidade-na-visao-dev",
    price: "R$0",
    imageSrc: "/images/ebook-agilidade.png",
    imageAlt: "Ebook sobre produto e agilidade na visão dev.",
  },
  {
    id: 7,
    name: "GraphQL",
    href: "https://speakerdeck.com/danvitoriano/introducao-ao-graphql",
    price: "R$0",
    imageSrc: "/images/ebook-graphql.png",
    imageAlt: "Ebook sobre GraphQL.",
  },
  {
    id: 8,
    name: "Google Material Design",
    href: "https://speakerdeck.com/danvitoriano/google-material-design",
    price: "R$0",
    imageSrc: "/images/ebook-google-material.png",
    imageAlt: "Ebook sobre Google Material Design.",
  },
];

export default function Ebooks() {
  return (
    <>
    <ProductList products={ebooks} />
    </>
  );
}
