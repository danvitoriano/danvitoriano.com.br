import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className=" text-xl pt-8">
        <Link href="/loja/nikond3200">Voltar</Link>
      </h1>
      <Link href="/loja/nikond3200">
        <img src="/images/large/IMG_4339 Large.jpeg" alt="Nikon D3200" />
      </Link>
    </div>
  );
}
