import Link from "next/link";

export default function Iniciativas() {
  return (
    <div className="p-4">
      <Link href="/">Home</Link>
      <h1 className=" text-xl">
        Iniciativas
      </h1>
      <ul className="list-disc pl-4">
      <li>
          <Link href="/techtelevision">Tech Television</Link>
        </li>
        <li>
          <a href="https://orgulhotech.com.br" target="_blank">Orgulho Tech</a>
        </li>
        <li>
          <Link href="/devs40mais">Tech 40+</Link>
        </li>
        <li>
          <Link href="/iniciativas/alura">Alura</Link>
        </li>
        <li>
          <Link href="/iniciativas/mentorias">Mentorias</Link>
        </li>
        <li>
          <Link href="/iniciativas/cursos">Cursos</Link>
        </li>
        <li>
          <Link href="/iniciativas/ebooks">E-books</Link>
        </li>
      </ul>
    </div>
  );
}
