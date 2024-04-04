import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-96">
        <a
          href="https://bileto.sympla.com.br/event/88083/d/222695?utm_source=mkt&utm_campaign=brazildesconto40&utm_term=danvitoriano"
          target="_blank"
        >
          <Image src="/images/braziljs.webp" alt="Logo" fill />
        </a>
      </div>
      <div className="p-4">
        <h1 className=" text-xl">danvitoriano.com.br</h1>
      </div>
      <ul className="list-disc pl-4 hidden">
        <li>
          <Link href="/iniciativas">Iniciativas</Link>
        </li>
        <li>
          <Link href="/newsletter">Newsletter</Link>
        </li>
        <li>
          <Link href="/nilly">Loja</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/eventos">Eventos</Link>
        </li>
        <li>
          <Link href="/techtv">Tech Tv</Link>
        </li>
        <li>
          <Link href="/techtelevision">Tech Television</Link>
        </li>
        <li>
          <Link href="/devs40mais">Devs40mais</Link>
        </li>
      </ul>
    </>
  );
}
