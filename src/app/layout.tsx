import "./globals.css";
import { Inter } from "next/font/google";
import SimpleFooter from "./components/footer";
import Header from "./components/header";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dan Vitoriano | Consultoria em Tecnologia, IA e Diversidade",
  description: "Dan Vitoriano é consultor em tecnologia e inteligência artificial com foco em diversidade e inclusão. Criador de conteúdo tech, produtor de eventos e referência em representatividade LGBTQIA+ no mercado de tecnologia brasileiro.",
  keywords: ["Dan Vitoriano", "consultoria em tecnologia", "inteligência artificial", "diversidade e inclusão", "diversidade na tecnologia", "inclusão LGBTQIA+", "tech creator", "produção de eventos tech", "conteúdo tech", "representatividade tecnologia", "comunidades tech", "Orgulho Tech", "Devs 40+"],
  openGraph: {
    title: "Dan Vitoriano | Consultoria em Tecnologia, IA e Diversidade",
    description: "Consultor em tecnologia e IA com foco em diversidade e inclusão. Criador de conteúdo tech e produtor de eventos. Referência em representatividade no mercado tech brasileiro.",
    url: "https://danvitoriano.com.br",
    siteName: "Dan Vitoriano",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Vitoriano | Consultoria em Tecnologia, IA e Diversidade",
    description: "Consultor em tecnologia e IA com foco em diversidade e inclusão. Criador de conteúdo tech e produtor de eventos.",
    creator: "@danvitoriano",
  },
  alternates: {
    canonical: "https://danvitoriano.com.br",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dan Vitoriano",
  "url": "https://danvitoriano.com.br",
  "image": "https://danvitoriano.com.br/images/logo-dan-vitoriano.jpeg",
  "jobTitle": "Consultor em Tecnologia e Inteligência Artificial",
  "description": "Dan Vitoriano é consultor em tecnologia e inteligência artificial com foco em diversidade e inclusão. Criador de conteúdo tech, produtor de eventos e referência em representatividade LGBTQIA+ no mercado de tecnologia brasileiro.",
  "sameAs": [
    "https://linkedin.com/in/danvitoriano",
    "https://twitter.com/danvitoriano",
    "https://instagram.com/danvitoriano",
    "https://youtube.com/@danvitoriano",
    "https://tiktok.com/@danvitoriano",
    "https://github.com/danvitoriano",
    "https://danvitoriano.substack.com"
  ],
  "knowsAbout": [
    "Consultoria em Tecnologia",
    "Inteligência Artificial",
    "Diversidade e Inclusão na Tecnologia",
    "Inclusão LGBTQIA+",
    "Produção de Eventos Tech",
    "Criação de Conteúdo Tech",
    "Comunidades Tech Inclusivas",
    "Representatividade na Tecnologia",
    "Desenvolvimento Web",
    "JavaScript",
    "IA Generativa"
  ],
  "nationality": {
    "@type": "Country",
    "name": "Brazil"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Fullcircle Serviços de Informática LTDA"
  },
  "speakableSpecification": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".hero-description", "main p"]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Dan Vitoriano",
  "url": "https://danvitoriano.com.br",
  "description": "Site oficial de Dan Vitoriano - consultor em tecnologia e IA, criador de conteúdo tech e produtor de eventos com foco em diversidade e inclusão",
  "inLanguage": "pt-BR",
  "author": {
    "@type": "Person",
    "name": "Dan Vitoriano"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body
        className={
          inter.className +
          "flex min-h-screen flex-col items-center justify-between p-4"
        }
      >
        <Script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/21db23b6-9557-4dd7-bcb5-62eea936f818-loader.js" />
        <main style={{ display: "block" }}>
          <Header />
          {children}
          <SimpleFooter/>
        </main>
      </body>
    </html>
  );
}
