'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string | null;
  status: string | null;
  location?: string;
  isInternal?: boolean;
  link: {
    url: string;
    text: string;
  } | null;
  additionalLink?: {
    url: string;
    text: string;
  };
}

const PAST_EVENTS_PER_PAGE = 5;

type EventSection = 'upcoming' | 'past';

function eventAnchorId(section: EventSection, id: number): string {
  return `evento-${section}-${id}`;
}

export default function List() {
  const [visiblePast, setVisiblePast] = useState(PAST_EVENTS_PER_PAGE);
  const [copiedAnchorId, setCopiedAnchorId] = useState<string | null>(null);
  const pendingScrollAnchorRef = useRef<string | null>(null);

  const upcomingEvents: Event[] = [
    {
      id: 3,
      title: "WTM Latin America 2026",
      date: "14 a 16 de abril de 2026",
      location: "Expo Center Norte - São Paulo/SP",
      description: "Maior feira B2B de turismo da América Latina. Networking, negócios internacionais e tendências do setor de turismo e hospitalidade.",
      status: "Feira de negócios",
      link: {
        url: "https://www.wtm.com/latin-america/",
        text: "wtm.com/latin-america"
      }
    },
    {
      id: 4,
      title: "VTEX Day",
      date: "16 a 17 de abril de 2026",
      location: "São Paulo, SP",
      description: "Evento anual da VTEX reunindo líderes de e-commerce, varejo digital e tecnologia. Palestras sobre inovação, cases de sucesso e o futuro do comércio eletrônico.",
      status: "Evento presencial e online",
      link: {
        url: "https://vtex.com/br-pt/vtexday/",
        text: "vtex.com/vtexday"
      }
    },
    {
      id: 31,
      title: "TDC Summit IA 2026 · São Paulo",
      date: "23 e 24 de abril de 2026",
      location: "Distrito Anhembi — Av. Olavo Fontoura, 1209, Santana, São Paulo, SP",
      description: "The Developer's Conference (TDC): Summit com foco em inteligência artificial aplicada — palestras, painéis, workshops, mentorias e networking. Formato presencial e digital, com trilhas de engenharia de IA, arquitetura, agentes autônomos, governança e FinOps.",
      status: "Presencial + digital",
      link: {
        url: "https://www.thedevelopersconference.com.br/tdc/2026/summit-sao-paulo/",
        text: "thedevelopersconference.com.br"
      }
    },
    {
      id: 33,
      title: "Woman & Queer Tech — 2º meetup",
      date: "25 de abril de 2026 · 9h30 às 13h",
      location: "São Paulo, SP · local próximo ao metrô (a divulgar)",
      description: "Segundo encontro Woman & Queer Tech, com palestras sobre GitHub Copilot e inteligência artificial. Duas pausas para café — uma na entrada e outra na saída — para networking. Realização: comunidades Orgulho Tech, Devs 40+ e Elas Programam, com Dan Vitoriano, Silvia Coelho e Roberson Miguel (biosbug); apoio Bradesco. Link de cadastro e endereço em breve.",
      status: "Cadastro e local em breve",
      link: {
        url: "https://www.orgulhotech.com.br/",
        text: "orgulhotech.com.br — cadastro em breve"
      }
    },
    {
      id: 30,
      title: "APIX 2026 · Sensedia",
      date: "21 de maio de 2026",
      location: "WTC Events Center — São Paulo, SP",
      description: "11ª edição do principal evento da Sensedia sobre APIs e integrações. Conteúdo sobre APIs e integrações, agentic AI, governança e segurança de APIs, inovação aberta e estratégia de negócios — em formato presencial.",
      status: "Evento presencial",
      link: {
        url: "https://www.sensedia.com.br/apix",
        text: "sensedia.com.br/apix"
      }
    },
    {
      id: 32,
      title: "Orgulho Tech Conf 2026",
      date: "3 de junho de 2026 · quarta-feira à noite (véspera da Parada LGBT+ de SP)",
      location: "São Paulo, SP · local a definir",
      description: "Conferência da Orgulho Tech na semana da Parada do Orgulho LGBT+ de São Paulo: conteúdo, comunidade e visibilidade para profissionais LGBTQIA+ e aliadas na tecnologia. Local em definição; venda de ingressos e oportunidades de patrocínio em breve.",
      status: "Ingressos e patrocínio em breve",
      link: {
        url: "https://www.orgulhotech.com.br/",
        text: "orgulhotech.com.br"
      }
    },
    {
      id: 5,
      title: "Web Summit Rio 2026",
      date: "8 a 11 de junho de 2026",
      location: "Rio de Janeiro, RJ",
      description: "Uma das maiores conferências de tecnologia do mundo chega ao Brasil. Startups, investidores, grandes empresas e líderes tech discutindo IA, inovação, futuro digital e transformação tecnológica.",
      status: "Ingressos disponíveis",
      link: {
        url: "https://websummit.com/rio",
        text: "websummit.com/rio"
      }
    },
    {
      id: 6,
      title: "Minas Summit 2026",
      date: "17 a 18 de junho de 2026",
      location: "Belo Horizonte, MG",
      description: "Evento de inovação, empreendedorismo e transformação digital com foco no ecossistema de startups e tecnologia de Minas Gerais e região.",
      status: "Evento regional",
      link: {
        url: "https://minassummit.com.br/",
        text: "minassummit.com.br"
      }
    },
    {
      id: 7,
      title: "Startup Summit",
      date: "26 a 28 de agosto de 2026",
      location: "Florianópolis, SC",
      description: "O maior evento de empreendedorismo e inovação do Sul do Brasil. Startups, investidores, mentorias, networking e conteúdo sobre tecnologia e negócios.",
      status: "Inscrições em breve",
      link: {
        url: "https://startupsummit.com.br/",
        text: "startupsummit.com.br"
      }
    },
    {
      id: 8,
      title: "ABAV Expo",
      date: "30 de setembro a 2 de outubro de 2026",
      location: "Expo Center Norte - São Paulo/SP",
      description: "Feira internacional de turismo da ABAV (Associação Brasileira de Agências de Viagens). Networking, negócios e tendências do setor de turismo.",
      status: "Feira de negócios",
      link: {
        url: "https://www.abavexpo.com.br/",
        text: "abavexpo.com.br"
      }
    },
    {
      id: 9,
      title: "Futurecom 2026",
      date: "6 a 8 de outubro de 2026",
      location: "São Paulo, SP",
      description: "Maior evento de tecnologia, telecomunicações e transformação digital da América Latina. Discussões sobre 5G, IoT, cloud computing, IA e o futuro da conectividade.",
      status: "Evento presencial",
      link: {
        url: "https://www.futurecom.com.br/",
        text: "futurecom.com.br"
      }
    }
    
  ];

  const pastEvents: Event[] = [
    {
      id: 27,
      title: "BioTECH Fair",
      date: "18 a 20 de março de 2026",
      location: "Porto Alegre, RS",
      description: "Feira focada em inovação ambiental, energias limpas e tecnologias sustentáveis. Reunindo empresas, startups e especialistas em biotecnologia e soluções verdes para o futuro.",
      status: null,
      link: {
        url: "https://www.biotechfair.com.br/",
        text: "biotechfair.com.br"
      }
    },
    {
      id: 20,
      title: "Woman & Queer Tech — 1ª edição (meetup)",
      date: "19 de março de 2026",
      location: "Blip — Av. Brigadeiro Faria Lima, 4221, Itaim Bibi, São Paulo, SP",
      description: "Encontro gratuito que nasce da união de Orgulho Tech, Devs 40+ e Elas Programam. Um espaço seguro e acolhedor para trocas sobre carreira, tecnologia, diversidade, longevidade profissional e pertencimento — com painel de discussão, networking e coffee break. Presencial + transmissão online.",
      status: null,
      link: {
        url: "https://www.meetup.com/pt-br/orgulhotech/events/313611019/",
        text: "meetup.com/orgulhotech"
      }
    },
    {
      id: 28,
      title: "Smart City Expo Curitiba",
      date: "18 de março de 2026",
      location: "Curitiba, PR",
      description: "Evento focado em cidades inteligentes, urbanismo, governança e inteligência artificial. Discussões sobre tecnologias que transformam a gestão urbana e a qualidade de vida nas cidades.",
      status: null,
      link: {
        url: "https://www.smartcityexpocuritiba.com.br/",
        text: "smartcityexpocuritiba.com.br"
      }
    },
    {
      id: 10,
      title: "Programaria Summit 10 Anos",
      date: "18 de outubro de 2025",
      location: "UNIP Indianópolis - São Paulo",
      description: "Celebração dos 10 anos da Programaria, organização que promove a diversidade de gênero na tecnologia. Evento com palestras, painéis, workshops, feira de oportunidades e networking.",
      status: null,
      link: {
        url: "https://www.programaria.org/",
        text: "programaria.org"
      }
    },
    {
      id: 11,
      title: "World Neurotechnologies Forum (WNF)",
      date: "26 de agosto de 2025",
      location: "Teatro Santander - São Paulo/SP",
      description: "O maior evento de neurotecnologia da América Latina. Tema: \"Engenharia da Mente - Reconstruindo a Nossa Humanidade\". Evento presencial e online das 8h às 19h, reunindo especialistas em neurociência, IA, interfaces cérebro-máquina e tecnologias emergentes.",
      status: null,
      link: {
        url: "https://wnf.global/",
        text: "wnf.global"
      }
    },
    {
      id: 12,
      title: "Rio Innovation Week + TDC Experience",
      date: "De 12 a 15 de agosto de 2025",
      location: "Pier Mauá, Rio de Janeiro",
      description: "Um dos maiores eventos de inovação do país! Vou mediar um painel especial no encerramento (15/08 às 18h), em parceria com o TDC Experience, abordando viéses, diversidade e acessibilidade na Inteligência Artificial. Uma oportunidade única de discutir inclusão no mercado tech com convidados especialistas.",
      status: null,
      link: {
        url: "https://rioinnovationweek.com.br/",
        text: "rioinnovationweek.com.br"
      }
    },
    {
      id: 13,
      title: "IA Conference Brasil",
      date: "13 de agosto de 2025",
      location: "Centro de Convenções Rebouças, São Paulo",
      description: "Conferência sobre Inteligência Artificial e suas aplicações no mercado brasileiro. Foco em inovação, ética e futuro da tecnologia.",
      status: null,
      link: {
        url: "https://www.alura.com.br/",
        text: "alura.com.br"
      }
    },
    {
      id: 14,
      title: "Imersão Dados com Python - Alura",
      date: "05 a 08 de agosto de 2025",
      location: "100% Online",
      description: "Aprenda Python do zero, crie dashboards interativos e acelere sua carreira em dados. Em 4 dias, você sai do zero em Python e cria um dashboard real. Evento gratuito com suporte de especialistas e certificado de participação.",
      status: null,
      link: {
        url: "https://www.alura.com.br/",
        text: "alura.com.br"
      }
    },
    {
      id: 15,
      title: "FIAP + ALURA | Lives IA em 4 Dimensões",
      date: "04 a 07 de agosto de 2025",
      location: "YouTube - 19h30",
      description: "Descubra como a Inteligência Artificial está revolucionando o mercado em 4 áreas estratégicas: DEV, BUSINESS, DATA e CYBER. Lives gratuitas com especialistas do mercado, aplicações práticas e estratégias reais adotadas por empresas líderes.",
      status: null,
      link: {
        url: "https://www.fiap.com.br/",
        text: "fiap.com.br"
      }
    },
    {
      id: 16,
      title: "Fórum E-Commerce Brasil 2025",
      date: "29, 30 e 31 de julho de 2025",
      location: "Distrito Anhembi - São Paulo/SP",
      description: "Três dias de conteúdo de altíssima qualidade, networking estratégico e oportunidades de negócio reais. Varejo e Indústria se reúnem com grandes marcas de soluções para e-commerce para impulsionar o desenvolvimento do setor e construir o futuro do comércio eletrônico.",
      status: null,
      link: {
        url: "https://eventos.ecommercebrasil.com.br/forum",
        text: "ecommercebrasil.com.br"
      }
    },
    {
      id: 17,
      title: "Codecon Summit 2025",
      date: "18 e 19 de julho de 2025",
      description: "Um dos maiores encontros dev do sul do mundo. Tema: \"The Hacker Way\". Viasoft Experience, Curitiba-PR.",
      status: null,
      link: {
        url: "https://www.codecon.dev/summit",
        text: "codecon.dev/summit"
      }
    },
    {
      id: 18,
      title: "Meetup FIAP Orgulho Tech",
      date: "17 de junho de 2025",
      description: "Meetup especial sobre diversidade LGBTQIA+ na tecnologia, realizado na FIAP em São Paulo. Tema: \"Envelhecer na Tecnologia\". Evento contou com premiação e reconhecimento de profissionais LGBTQIA+ que contribuem para a diversidade no setor tech.",
      status: null,
      link: {
        url: "https://orgulhotech.com.br",
        text: "orgulhotech.com.br"
      }
    },
    {
      id: 19,
      title: "Rio Innovation Week",
      date: "De 13 a 16 de Agosto de 2024",
      location: "Pier Máua - Rio de Janeiro",
      description: "Serão 70.000m² de evento, com 34 conferências, mais de 2.500 palestrantes convidados, 2.200 startups e incubadoras fomentando negócios, mais de 350 expositores apresentando inovações e soluções para os setores, além de bootcamps setorizados, mentorias, exposições, workshops, networking e muitos negócios.",
      status: null,
      link: {
        url: "https://www.sympla.com.br/evento/rio-innovation-week-4-edicao/2421228",
        text: "Ingressos no Sympla"
      }
    },
    {
      id: 270,
      title: "User Conference Brasil 2024",
      date: "7 e 8 de agosto de 2024",
      description: "Evento da ManageEngine para usuários de seus produtos, com foco em gerenciamento de TI e infraestrutura.",
      status: null,
      link: {
        url: "https://events.manageengine.com/brasil-userconf-2024",
        text: "Inscreva-se grátis"
      }
    },
    {
      id: 21,
      title: "Mentoria para Todes",
      date: "13 de julho de 2024",
      description: "Será um dia de sessões de mentorias individuais gratuitas com especialistas e referências no mercado para potencializar a carreira de pessoas da nossa comunidade.",
      status: null,
      link: {
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7183418510436384768/",
        text: "LinkedIn de Rafa Mores"
      }
    },
    {
      id: 22,
      title: "Maratona do Orgulho",
      date: "25 de junho de 2024",
      description: "Os futuros desejáveis acontecem primeiro nos sonhos, no mês do orgulho, vamos sonhar juntos? Um evento completo para você viver uma experiência imersiva e aprender com os melhores do mercado.",
      status: null,
      link: {
        url: "https://materiais.nohssomos.com.br/landing-page-maratona-do-orgulho-futurosdesejaveis",
        text: "Inscreva-se"
      }
    },
    {
      id: 23,
      title: "FIAP + Alura",
      date: "21 de junho de 2024",
      description: "A importância do letramento LGBTQIAPN+ como uma ferramenta fundamental para promover a compreensão, o respeito e a inclusão em todos os espaços e contextos.",
      status: null,
      isInternal: true,
      link: {
        url: "https://www.fiap.com.br/imprensa/dois-tercos-noticias-em-sao-paulo-evento-orgulho-tech-conf-celebra-a-diversidade-e-inclusao-lgbtqiapn-na-tecnologia-fiap/",
        text: "FIAP + Alura e Orgulho Tech"
      }
    },
    {
      id: 24,
      title: "Monday @ Page (Pride Edition)",
      date: "17 de junho de 2024",
      description: "Os desafios e oportunidades para a comunidade LGBTQIA+ e a importância da representatividade, da inclusão e da construção de um ambiente de trabalho mais diversos. Através de dados, exemplos e estratégias, convido empresas e profissionais a se engajarem na promoção da diversidade como um impulsionador da inovação.",
      status: null,
      isInternal: true,
      link: {
        url: "https://materiais.danvitoriano.com.br/diversidadetech",
        text: "Futuro Inclusivo: Diversidade no Mercado de Tecnologia"
      },
      additionalLink: {
        url: "https://www.michaelpage.co.uk/advice/career-advice/being-happy-work/monday-motivation-how-be-happier-work",
        text: "Monday motivation: how to be happier at work"
      }
    },
    {
      id: 25,
      title: "Reply Xchange",
      date: "13 de junho de 2024",
      description: null,
      status: null,
      isInternal: true,
      link: {
        url: "https://www.reply.com/pt/xchange",
        text: "Reply Xchange"
      }
    },
    {
      id: 26,
      title: "Devs 40+ Conference",
      date: "28 de outubro de 2023",
      description: "1ª edição da conferência de profissionais maduras na tecnologia.",
      status: null,
      link: {
        url: "https://www.devs40mais.com.br/",
        text: "Devs 40+ Conference"
      }
    }
  ];

  useLayoutEffect(() => {
    const raw = window.location.hash.slice(1);
    const m = raw.match(/^evento-(upcoming|past)-(\d+)$/);
    if (!m) return;
    const section = m[1] as EventSection;
    const id = Number(m[2]);
    const anchorId = eventAnchorId(section, id);

    if (section === 'upcoming') {
      if (!upcomingEvents.some(e => e.id === id)) return;
      pendingScrollAnchorRef.current = anchorId;
      return;
    }

    const idx = pastEvents.findIndex(e => e.id === id);
    if (idx < 0) return;
    pendingScrollAnchorRef.current = anchorId;
    setVisiblePast(v => Math.max(v, idx + 1));
  }, []);

  useEffect(() => {
    const anchorId = pendingScrollAnchorRef.current;
    if (!anchorId) return;
    const el = document.getElementById(anchorId);
    if (!el) return;
    pendingScrollAnchorRef.current = null;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [visiblePast]);

  const copyEventLink = async (anchorId: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedAnchorId(anchorId);
      window.setTimeout(() => setCopiedAnchorId(null), 2000);
    } catch {
      window.prompt('Copie o link:', url);
    }
  };

  const renderEvent = (event: Event, section: EventSection) => {
    const isPast = section === 'past';
    const anchorId = eventAnchorId(section, event.id);
    const containerClass = isPast
      ? 'px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 opacity-60 scroll-mt-24'
      : 'px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 scroll-mt-24';
    const titleClass = isPast ? "text-sm font-medium leading-6 text-gray-500" : "text-sm font-medium leading-6 text-gray-900";
    const contentClass = isPast ? "mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0" : "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0";
    const descriptionClass = isPast ? "text-gray-400" : "text-gray-600";
    const linkClass = isPast ? "text-indigo-500 hover:text-indigo-400 underline" : "text-indigo-600 underline hover:text-indigo-500";
    const internalClass = isPast ? "text-gray-400" : "text-gray-500";

    return (
      <div key={`${section}-${event.id}`} id={anchorId} className={containerClass}>
        <dt className={`${titleClass} flex flex-wrap items-baseline gap-x-2 gap-y-1`}>
          <span className="min-w-0">{event.title}</span>
          <button
            type="button"
            className="shrink-0 text-base leading-none hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
            aria-label={`Copiar link direto para o evento: ${event.title}`}
            title={copiedAnchorId === anchorId ? 'Link copiado!' : 'Copiar link deste evento'}
            onClick={() => copyEventLink(anchorId)}
          >
            🔗
          </button>
          {event.isInternal && (
            <>
              <br />
              <small className={`${internalClass} basis-full`}>Evento Interno</small>
            </>
          )}
        </dt>
        <dd className={contentClass}>
          <strong>{event.date}</strong>
          {event.location && ` | ${event.location}`}
          {event.description && (
            <>
              <br />
              <span className={descriptionClass}>
                {event.description}
              </span>
            </>
          )}
          {event.status && (
            <>
              <br />
              <span className="text-gray-500 text-xs">{event.status}</span>
            </>
          )}
          {event.link && (
            <>
              <br />
              <a
                href={event.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {event.link.text}
              </a>
            </>
          )}
          {event.additionalLink && (
            <>
              <br />
              <small className={internalClass}>
                Mais sobre a Michael Page:{" "}
                <a
                  href={event.additionalLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {event.additionalLink.text}
                </a>
              </small>
            </>
          )}
        </dd>
      </div>
    );
  };

  return (
    <>
      {/* Hero — chamada geral */}
      <div className="relative bg-gradient-to-br from-indigo-50 via-white to-sky-50 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-15rem)] w-[50rem] aspect-[1155/678] -translate-x-1/2 bg-gradient-to-tr from-sky-200 via-indigo-200 to-violet-200 opacity-40"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          />
        </div>

        <div className="mx-auto max-w-4xl px-6 py-24 sm:py-28 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-800 ring-1 ring-indigo-200">
            <span>📅</span> Agenda de eventos
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Palestras, eventos e conferências
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Participação em encontros sobre tecnologia, inteligência artificial, diversidade e inclusão no mercado tech — em todo o Brasil.
          </p>
        </div>
      </div>

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Eventos
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Palestras, Eventos e Conferências
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Eventos, conferências e palestras sobre diversidade, inclusão e tecnologia.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <p className="sr-only" aria-live="polite">
            {copiedAnchorId ? 'Link do evento copiado para a área de transferência.' : ''}
          </p>
          <dl className="divide-y divide-gray-100">
            {/* Próximos Eventos */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                Próximos Eventos
              </h3>
              <div className="space-y-6">
                {upcomingEvents.map(event => renderEvent(event, 'upcoming'))}
              </div>
            </div>

            {/* Eventos Passados */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-600 mb-6 border-b border-gray-200 pb-2">
                Eventos Passados
              </h3>
              <div className="space-y-6">
                {pastEvents.slice(0, visiblePast).map(event => renderEvent(event, 'past'))}
              </div>

              {visiblePast < pastEvents.length && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setVisiblePast(v => v + PAST_EVENTS_PER_PAGE)}
                    className="rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    Carregar Mais
                  </button>
                </div>
              )}
            </div>
          </dl>
        </div>
      </div>
    </div>
    </>
  );
}
