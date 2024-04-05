import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className=" text-xl pt-8">
        <Link href="/loja/appletv">Voltar</Link>
      </h1>
      <Link href="/loja/appletv">
        <img src="/images/large/IMG_4325 Large.jpeg" alt="Apple TV" />
      </Link>
    </div>
  );
}
