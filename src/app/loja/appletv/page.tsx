import Link from "next/link";
import Image from "next/image";

export default function Loja() {
  return (
    <div className="p-4">
      {/* título */}
      <h1 className=" text-xl pt-8">Apple TV (usado)</h1>
      {/* descrição */}
      <p className="pb-4">
        Na caixa, conexão via cabo HDMI. Com controle e manuais.
      </p>
      {/* imagens */}
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/appletv/IMG_4323">
            <img src="/images/small/IMG_4323 Small.jpeg" alt="Apple TV" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/appletv/IMG_4324">
            <img src="/images/small/IMG_4324 Small.jpeg" alt="Apple TV" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/appletv/IMG_4325">
            <img src="/images/small/IMG_4325 Small.jpeg" alt="Apple TV" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/appletv/IMG_4326">
            <img src="/images/small/IMG_4326 Small.jpeg" alt="Apple TV" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
            <Link href="/loja/appletv/IMG_4327">
                <img src="/images/small/IMG_4327 Small.jpeg" alt="Apple TV" />
            </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
            <Link href="/loja/appletv/IMG_4328">
                <img src="/images/small/IMG_4328 Small.jpeg" alt="Apple TV" />
            </Link>
        </div>
      </div>
      {/* preço */}
      <p className="pb-4 bold text-2xl">R$ 180,00</p>
      {/* botão de comprar */}
      <p className="pb-4">
        <strong>Forma de pagamento:</strong> PIX (você será direcionada par ao
        checkout da Woovi)
      </p>
      <p className="pb-4">
        <strong>Entrega:</strong> Entrega grátis em São Paulo capital. Depois da
        compra eu pego seu endereço por email ou celular. Para outras regiões,
        calcular o frete e o pagamento deve ser feito a parte antes de eu enviar
        pelos Correios. Prazo de entrega é de 1 a 2 dias úteis no máximo.
      </p>
      <a
        href="https://openpix.com.br/pay/495a975d-7281-4d9a-b270-ba2443c10cde"
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 rounded-lg bg-lime-900 text-white border border-transparent px-5 py-4 transition-colors hover:border-lime-400 hover:bg-lime-500 hover:dark:border-lime-700 hover:dark:bg-lime-950"
      >
        Comprar
      </a>
    </div>
  );
}
