import Link from "next/link";
import Image from "next/image";

export default function Loja() {
  return (
    <div className="p-4">
      {/* título */}
      <h1 className=" text-xl pt-8">AirPods Pro original Apple (usado)</h1>
      {/* descrição */}
      <p className="pb-4">
        Com estojo de recarga MagSafe. Em perfeito estado, ainda na caixa. Isolamento de ruído perfeito. Comprei em 2022 no México. Estou vendendo porque ganhei outro.
      </p>
      {/* imagens */}
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/airpodspro/IMG_4317">
            <img src="/images/small/IMG_4317 Small.jpeg" alt="AirPods Pro" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/airpodspro/IMG_4318">
            <img src="/images/small/IMG_4318 Small.jpeg" alt="AirPods Pro" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/airpodspro/IMG_4319">
            <img src="/images/small/IMG_4319 Small.jpeg" alt="AirPods Pro" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/airpodspro/IMG_4320">
            <img src="/images/small/IMG_4320 Small.jpeg" alt="AirPods Pro" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/airpodspro/IMG_4321">
            <img src="/images/small/IMG_4321 Small.jpeg" alt="AirPods Pro" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/airpodspro/IMG_4322">
            <img src="/images/small/IMG_4322 Small.jpeg" alt="AirPods Pro" />
          </Link>
        </div>
      </div>
      {/* preço */}
      <p className="pb-4 bold text-2xl">R$ 799,00</p>
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
        href="https://openpix.com.br/pay/a7008b88-5711-4e41-89ec-dcaf17784bf7"
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 rounded-lg bg-lime-900 text-white border border-transparent px-5 py-4 transition-colors hover:border-lime-400 hover:bg-lime-500 hover:dark:border-lime-700 hover:dark:bg-lime-950"
      >
        Comprar
      </a>
    </div>
  );
}
