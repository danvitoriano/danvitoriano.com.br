import Link from "next/link";

export default function Loja() {
  return (
    <div className="p-4">
      <h1 className=" text-xl">Roupas</h1>
      <ul className="list-disc pl-4">
        <li>
          <Link href="/nilly/p/mens-fitted-straight-cut-t-shirt-front-end-back-end">Mens Fitted Straight Cut T-Shirt Front End Back End</Link>
        </li>
      </ul>
    </div>
  );
}
