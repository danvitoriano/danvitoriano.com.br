import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className=" text-xl pt-8">
        <Link href="/loja/airpodspro">Voltar</Link>
      </h1>
      <Link href="/loja/airpodspro">
        <img src="/images/large/IMG_4317 Large.jpeg" alt="AirPods Pro" />
      </Link>
    </div>
  );
}
