import Link from "next/link";

export default function Loja() {
  return (
    <div className="p-4">
      <h1 className=" text-xl">E-books</h1>
      <ul className="list-disc pl-4">
        <li>
          <Link href="/nilly/p/o-bsico-da-web-para-quem-no-sabe-nada-de-tecnologia-ebook-dan-vitoriano">
            o-bsico-da-web-para-quem-no-sabe-nada-de-tecnologia-ebook-dan-vitoriano
          </Link>
        </li>
        <li>
          <Link href="/nilly/p/node-e-express-js">node-e-express-js</Link>
        </li>
        <li>
          <Link href="/nilly/p/guia-de-agilidade-e-produto-para-devs">
            guia-de-agilidade-e-produto-para-devs
          </Link>
        </li>
      </ul>
    </div>
  );
}
