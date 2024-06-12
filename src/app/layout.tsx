import "./globals.css";
import { Inter } from "next/font/google";
import SimpleFooter from "./components/footer";
import Header from "./components/header";

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
          <Header />
          {children}
          <SimpleFooter/>
        </main>
      </body>
    </html>
  );
}
