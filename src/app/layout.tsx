import "./globals.css";
import { Inter } from "next/font/google";
import SimpleFooter from "./components/footer";
import Header from "./components/header";
import Script from 'next/script';

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
      <Script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/21db23b6-9557-4dd7-bcb5-62eea936f818-loader.js" />
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
