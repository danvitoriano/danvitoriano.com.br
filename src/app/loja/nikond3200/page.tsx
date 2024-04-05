import Link from "next/link";
import Image from "next/image";

export default function Loja() {
  return (
    <div className="p-4">
      {/* título */}
      <h1 className=" text-xl pt-8">Nikon D3200 + Lente 18-55mm (usada)</h1>
      {/* descrição */}
      <p className="pb-4">
        Kit na caixa, câmera Nikon D3200 digital com lente 18-55mm, carregador,
        bateria.
      </p>
      {/* imagens */}
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/nikond3200/IMG_4331">
            <img src="/images/small/IMG_4331 Small.jpeg" alt="Nikon D3200" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/nikond3200/IMG_4332">
            <img src="/images/small/IMG_4332 Small.jpeg" alt="Nikon D3200" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/nikond3200/IMG_4333">
            <img src="/images/small/IMG_4333 Small.jpeg" alt="Nikon D3200" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/nikond3200/IMG_4334">
            <img src="/images/small/IMG_4334 Small.jpeg" alt="Nikon D3200" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/nikond3200/IMG_4335">
            <img src="/images/small/IMG_4335 Small.jpeg" alt="Nikon D3200" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/nikond3200/IMG_4336">
            <img src="/images/small/IMG_4336 Small.jpeg" alt="Nikon D3200" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/nikond3200/IMG_4337">
            <img src="/images/small/IMG_4337 Small.jpeg" alt="Nikon D3200" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/nikond3200/IMG_4338">
            <img src="/images/small/IMG_4338 Small.jpeg" alt="Nikon D3200" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/nikond3200/IMG_4339">
            <img src="/images/small/IMG_4339 Small.jpeg" alt="Nikon D3200" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/nikond3200/IMG_4340">
            <img src="/images/small/IMG_4340 Small.jpeg" alt="Nikon D3200" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl-w-1/6 mb-4">
          <Link href="/loja/nikond3200/IMG_4341">
            <img src="/images/small/IMG_4341 Small.jpeg" alt="Nikon D3200" />
          </Link>
        </div>
      </div>
      {/* preço */}
      <p className="pb-4 bold text-2xl">R$ 900,00</p>
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
        href="https://openpix.com.br/pay/63a53cc2-e03e-4b7e-8a4d-1aa51d01a35b"
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 rounded-lg bg-lime-900 text-white border border-transparent px-5 py-4 transition-colors hover:border-lime-400 hover:bg-lime-500 hover:dark:border-lime-700 hover:dark:bg-lime-950"
      >
        Comprar
      </a>
    </div>
  );
}
