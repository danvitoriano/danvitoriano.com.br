import Nav from "./components/nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dan Vitoriano",
  description: "Criador de conteúdo. professsor tech e desenvolvedor web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "flex min-h-screen flex-col items-center justify-between p-4"
        }
      >
        <main style={{ display: "block" }}>
          <Link href="\">
            <Image
              src="/images/logo-dan-vitoriano.jpeg"
              alt="logo"
              width={50}
              height={50}
              style={{ margin: "0 auto" }}
            />
          </Link>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
