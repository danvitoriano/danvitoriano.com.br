import PortfolioList from "@/app/components/portfolioList";

const portfolio = [
  {
    id: 1,
    name: "Checkout Web",
    href: "https://pagseguro.uol.com.br/para-seu-negocio/online/checkout",
    price: "Pagbank",
    imageSrc: "/images/checkout-pagbank.jpeg",
    imageAlt: "Checkout de compras do Pagbank utilizado por milhões de pessoas. Criado com React, Node, Next.js e SASS.",
  },
  {
    id: 2,
    name: "Shopping Cart",
    href: "https://www.gap.com/",
    price: "GAP",
    imageSrc: "/images/shopping-cart-gap.png",
    imageAlt:
      "Construção e manutenção do carrinho de comprar do portal global GAP.com, um dos maiores ecommerces do mundo, transacionando anualmente mais de 6 bilhões de dólares.",
  },
  {
    id: 3,
    name: "Dashboard Minha Conta",
    href: "https://minhaconta.amedigital.com/",
    price: "Ame Empresas",
    imageSrc: "/images/ame-empresas.png",
    imageAlt: "Sistemas administrativos para empresas clientes da Ame Digital.",
  },
  {
    id: 4,
    name: "Marketplace de Serviços",
    href: "https://servicos.oi.com.br/",
    price: "Oi",
    imageSrc: "/images/oi-servicos.jpeg",
    imageAlt: "Ebook sobre CSS in JS.",
  },
  {
    id: 5,
    name: "Sistema Web Admin",
    href: "https://www.novonor.com/",
    price: "Novonor",
    imageSrc: "/images/siseng.jpg",
    imageAlt: "Sistema de gerenciamento de obras para Odebrecht, atualmente Novonor.",
  },
  {
    id: 6,
    name: "Aplicativo iOS",
    price: "Globo Marcas",
    imageSrc: "/images/globo-marcas.jpg",
    imageAlt: "Primeiro app da Globo para exibir conteúdo via streaming. Futuramente seria o Globoplay.",
  },
  {
    id: 7,
    name: "Portal de Imóveis",
    price: "Lopes",
    href: "https://lopes.com.br",
    imageSrc: "/images/lopes-imoveis.jpg",
    imageAlt: "Portal e sistemas administrativos da Lopes Imóveis, a maior corretora imobiliária da América Latina.",
  }
];

export default function Dev() {
  return (
    <>
      <PortfolioList products={portfolio} />
    </>
  );
}
