import Link from "next/link";
export default function Loja() {
  return (
    <div className="p-4">
      <ul className="list-disc pl-4">
        <li>
          <Link href="/loja/airpodspro" className="underline">
            AirPods Pro original Apple (usado)
          </Link>
        </li>
        {/* <li>
          <Link href="/loja/appletv" className="underline">
            Apple TV (usada)
          </Link>
        </li> */}
        <li>
          <Link href="/loja/nikond3200" className="underline">
            Nikon D3200 (usado) <span
        className=" text-red-500"
      >
        VENDIDA
      </span>
          </Link>
        </li>
        {/* <li>
          <Link href="/loja/tecladomxkeyss" className="underline">
            Teclado Logitech MX Keys S (novo)
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
