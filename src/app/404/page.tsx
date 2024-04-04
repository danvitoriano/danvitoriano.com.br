import Link from "next/link";

export default function Error() {
  return (
    <div className="p-4">
      <Link href="/">Home</Link>
      <h1 className=" text-xl">Error</h1>
    </div>
  );
}
