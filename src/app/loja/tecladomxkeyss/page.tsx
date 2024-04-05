import Link from "next/link";
import Image from "next/image";

export default function Loja() {
  return (
    <div className="p-4">
      {/* título */}
      <h1 className=" text-xl pt-8">Teclado Logitech MX Keys S (novo)</h1>
      {/* descrição */}
      <p className="pb-4">
        Teclado sem fio da Logitech, modelo MX Keys S, novo na caixa. Com
        iluminação, conexão Bluetooth e USB-C. Ganhei da própria para marca, só
        abri para fazer unboxing. Nunca usado.
      </p>
      {/* imagens */}
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/tecladomxkeyss/IMG_4312">
            <img
              src="/images/small/IMG_4342 Small.jpeg"
              alt="Teclado Logitech"
            />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/tecladomxkeyss/IMG_4343">
            <img
              src="/images/small/IMG_4343 Small.jpeg"
              alt="Teclado Logitech"
            />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/tecladomxkeyss/IMG_4344">
            <img
              src="/images/small/IMG_4344 Small.jpeg"
              alt="Teclado Logitech"
            />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/tecladomxkeyss/IMG_4345">
            <img
              src="/images/small/IMG_4345 Small.jpeg"
              alt="Teclado Logitech"
            />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/tecladomxkeyss/IMG_4346">
            <img
              src="/images/small/IMG_4346 Small.jpeg"
              alt="Teclado Logitech"
            />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/tecladomxkeyss/IMG_4347">
            <img
              src="/images/small/IMG_4347 Small.jpeg"
              alt="Teclado Logitech"
            />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
          <Link href="/loja/tecladomxkeyss/IMG_4348">
            <img
              src="/images/small/IMG_4348 Small.jpeg"
              alt="Teclado Logitech"
            />
          </Link>
        </div>
      </div>
      {/* preço */}
      <p className="pb-4 bold text-2xl">R$ 590,00</p>
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
        href="https://openpix.com.br/pay/fb07024b-6ded-4fa7-8af8-2de80e763bb1"
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 rounded-lg bg-lime-900 text-white border border-transparent px-5 py-4 transition-colors hover:border-lime-400 hover:bg-lime-500 hover:dark:border-lime-700 hover:dark:bg-lime-950"
      >
        Comprar
      </a>
    </div>
  );
}
