import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-4">
        <h1 className=" text-xl">danvitoriano.com.br</h1>
      </div>
      <ul className="list-disc pl-4">
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
