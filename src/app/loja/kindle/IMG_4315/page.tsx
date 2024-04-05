import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className=" text-xl pt-8">
        <Link href="/loja/kindle">Voltar</Link>
      </h1>
      <Link href="/loja/kindle">
        <img src="/images/large/IMG_4315 Large.jpeg" alt="Kindle" />
      </Link>
    </div>
  );
}
