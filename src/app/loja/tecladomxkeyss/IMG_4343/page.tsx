import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className=" text-xl pt-8">
        <Link href="/loja/tecladomxkeyss">Voltar</Link>
      </h1>
      <Link href="/loja/tecladomxkeyss">
        <img src="/images/large/IMG_4343 Large.jpeg" alt="Teclado Logitech" />
      </Link>
    </div>
  );
}
