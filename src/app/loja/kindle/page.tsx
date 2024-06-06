import Link from "next/link";
import Image from "next/image";

export default function Loja() {
  return (
    <div className="p-4">
      {/* título */}
      <h1 className=" text-xl pt-8">Kindle 10ª Geração</h1>
      {/* descrição */}
      <p className="pb-4">
        O Kindle mais barato da Amazon. Pouco usado. Com retroiluminação, dá pra
        ler no escuro. Tela touchscreen.
      </p>
      {/* imagens */}
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/kindle/IMG_4312">
            <img src="/images/small/IMG_4312 Small.jpeg" alt="Kindle" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/kindle/IMG_4313">
            <img src="/images/small/IMG_4313 Small.jpeg" alt="Kindle" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/kindle/IMG_4314">
            <img src="/images/small/IMG_4314 Small.jpeg" alt="Kindle" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/kindle/IMG_4315">
            <img src="/images/small/IMG_4315 Small.jpeg" alt="Kindle" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/kindle/IMG_4316">
            <img src="/images/small/IMG_4316 Small.jpeg" alt="Kindle" />
          </Link>
        </div>
      </div>
      {/* preço */}
      <p className="pb-4 bold text-2xl">R$ 349,00</p>
      {/* botão de comprar */}
      <p className="pb-4">
        <strong>Forma de pagamento:</strong> PIX (você será direcionada par ao
        checkout da Woovi)
      </p>
      <p className="pb-4">
        <strong>Entrega:</strong> Entrega grátis em São Paulo capital. Depois da compra eu pego seu endereço por email ou celular. Para outras regiões, calcular o frete e o pagamento deve ser feito a parte antes de eu enviar pelos Correios. Prazo de entrega é de 1 a 2 dias úteis no máximo.
      </p>
      <a
        disabled
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 rounded-lg bg-lime-900 text-white border border-transparent px-5 py-4 transition-colors hover:border-lime-400 hover:bg-lime-500 hover:dark:border-lime-700 hover:dark:bg-lime-950"
      >
        Comprar
      </a>
    </div>
  );
}
