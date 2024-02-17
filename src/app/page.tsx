import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className=" text-xl inline-block">danvitoriano.com.br</h1>
      <nav className=" float-end">
        <p>Menu:</p>
        <Link href="/eventos" className=" text-sm block">Eventos</Link>
        <Link href="/nilly" className=" text-sm block">Loja</Link>
        <Link href="/devs40mais" className=" text-sm block">Devs 40+</Link>
      </nav>
    </main>
  );
}
