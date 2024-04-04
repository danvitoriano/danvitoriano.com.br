import Link from "next/link";

export default function Loja() {
  return (
    <div className="p-4">
      <h1 className=" text-xl">Loja</h1>
      <ul className="list-disc pl-4">
        <li>
          <Link href="/nilly/e-books">E-books</Link>
        </li>
        <li>
          <Link href="/nilly/roupas">Roupas</Link>
        </li>
      </ul>
    </div>
  );
}
