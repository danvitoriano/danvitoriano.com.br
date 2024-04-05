import Link from "next/link";
export default function Loja() {
  return (
    <div className="p-4">
      <ul className="list-disc pl-4">
        <li>
          <Link href="/loja/kindle" className="underline">Kindle 10ª Geração (usado)</Link>
        </li>
        <li>
          <Link href="/loja/2">Produto 2</Link>
        </li>
        <li>
          <Link href="/loja/3">Produto 3</Link>
        </li>
      </ul>
    </div>
  );
}
