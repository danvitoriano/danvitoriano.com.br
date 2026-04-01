import type { Metadata } from "next";
import Events from "../components/Events";

export const metadata: Metadata = {
  title: "Eventos e Palestras | Dan Vitoriano",
  description: "Eventos de tecnologia, palestras e conferências com Dan Vitoriano. Produção e participação em eventos tech com foco em inteligência artificial, diversidade e inclusão no mercado de tecnologia brasileiro.",
  keywords: ["eventos tecnologia", "palestras tecnologia", "diversidade eventos tech", "Dan Vitoriano palestrante", "produção eventos tech", "conferências IA"],
  alternates: { canonical: "https://danvitoriano.com.br/eventos" },
  openGraph: {
    title: "Eventos e Palestras | Dan Vitoriano",
    description: "Eventos de tecnologia, palestras e conferências com foco em IA, diversidade e inclusão no mercado tech.",
    url: "https://danvitoriano.com.br/eventos",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://danvitoriano.com.br" },
    { "@type": "ListItem", "position": 2, "name": "Eventos", "item": "https://danvitoriano.com.br/eventos" }
  ]
};

const eventsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Palestras, Eventos e Conferências - Dan Vitoriano",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Event",
        "name": "WTM Latin America 2026",
        "startDate": "2026-04-14",
        "endDate": "2026-04-16",
        "location": { "@type": "Place", "name": "Expo Center Norte, São Paulo, SP" },
        "url": "https://www.wtm.com/latin-america/",
        "description": "Maior feira B2B de turismo da América Latina.",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Event",
        "name": "VTEX Day",
        "startDate": "2026-04-16",
        "endDate": "2026-04-17",
        "location": { "@type": "Place", "name": "São Paulo, SP" },
        "url": "https://vtex.com/br-pt/vtexday/",
        "description": "Evento anual da VTEX reunindo líderes de e-commerce, varejo digital e tecnologia.",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Event",
        "name": "TDC Summit IA 2026 · São Paulo",
        "startDate": "2026-04-23",
        "endDate": "2026-04-24",
        "location": { "@type": "Place", "name": "Distrito Anhembi, São Paulo, SP" },
        "url": "https://www.thedevelopersconference.com.br/tdc/2026/summit-sao-paulo/",
        "description": "The Developer's Conference — Summit de IA com palestras, workshops e networking.",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Event",
        "name": "APIX 2026 · Sensedia",
        "startDate": "2026-05-21",
        "endDate": "2026-05-21",
        "location": { "@type": "Place", "name": "WTC Events Center, São Paulo, SP" },
        "url": "https://www.sensedia.com.br/apix",
        "description": "Evento da Sensedia sobre APIs, integrações, IA e transformação digital.",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Event",
        "name": "Web Summit Rio 2026",
        "startDate": "2026-06-08",
        "endDate": "2026-06-11",
        "location": { "@type": "Place", "name": "Rio de Janeiro, RJ" },
        "url": "https://websummit.com/rio",
        "description": "Uma das maiores conferências de tecnologia do mundo chega ao Brasil.",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Event",
        "name": "Minas Summit 2026",
        "startDate": "2026-06-17",
        "endDate": "2026-06-18",
        "location": { "@type": "Place", "name": "Belo Horizonte, MG" },
        "url": "https://minassummit.com.br/",
        "description": "Evento de inovação, empreendedorismo e transformação digital.",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Event",
        "name": "Startup Summit",
        "startDate": "2026-08-26",
        "endDate": "2026-08-28",
        "location": { "@type": "Place", "name": "Florianópolis, SC" },
        "url": "https://startupsummit.com.br/",
        "description": "O maior evento de empreendedorismo e inovação do Sul do Brasil.",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Event",
        "name": "ABAV Expo",
        "startDate": "2026-09-30",
        "endDate": "2026-10-02",
        "location": { "@type": "Place", "name": "Expo Center Norte, São Paulo, SP" },
        "url": "https://www.abavexpo.com.br/",
        "description": "Feira internacional de turismo da ABAV.",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
      }
    },
    {
      "@type": "ListItem",
      "position": 9,
      "item": {
        "@type": "Event",
        "name": "Futurecom 2026",
        "startDate": "2026-10-06",
        "endDate": "2026-10-08",
        "location": { "@type": "Place", "name": "São Paulo, SP" },
        "url": "https://www.futurecom.com.br/",
        "description": "Maior evento de tecnologia, telecomunicações e transformação digital da América Latina.",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
      }
    }
  ]
};

export default function Eventos() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }} />
      <Events />
    </div>
  );
}
