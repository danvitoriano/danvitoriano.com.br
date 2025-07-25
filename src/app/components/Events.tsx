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

export default function List() {
  const upcomingEvents: Event[] = [
    {
      id: 15,
      title: "Fórum E-Commerce Brasil 2025",
      date: "29, 30 e 31 de julho de 2025",
      location: "Distrito Anhembi - São Paulo/SP",
      description: "Três dias de conteúdo de altíssima qualidade, networking estratégico e oportunidades de negócio reais. Varejo e Indústria se reúnem com grandes marcas de soluções para e-commerce para impulsionar o desenvolvimento do setor e construir o futuro do comércio eletrônico.",
      status: "Lote 4 disponível",
      link: {
        url: "https://eventos.ecommercebrasil.com.br/forum",
        text: "ecommercebrasil.com.br"
      }
    },
    {
      id: 17,
      title: "FIAP + ALURA | Lives IA em 4 Dimensões",
      date: "04 a 07 de agosto de 2025",
      location: "YouTube - 19h30",
      description: "Descubra como a Inteligência Artificial está revolucionando o mercado em 4 áreas estratégicas: DEV, BUSINESS, DATA e CYBER. Lives gratuitas com especialistas do mercado, aplicações práticas e estratégias reais adotadas por empresas líderes.",
      status: "Lives gratuitas com certificado por live",
      link: {
        url: "https://link.danvitoriano.com.br/fiap",
        text: "Inscreva-se gratuitamente"
      }
    },
    {
      id: 16,
      title: "Imersão Dados com Python - Alura",
      date: "05 a 08 de agosto de 2025",
      location: "100% Online",
      description: "Aprenda Python do zero, crie dashboards interativos e acelere sua carreira em dados. Em 4 dias, você sai do zero em Python e cria um dashboard real. Evento gratuito com suporte de especialistas e certificado de participação.",
      status: "Evento gratuito com certificado",
      link: {
        url: "https://link.danvitoriano.com.br/python",
        text: "Inscreva-se gratuitamente"
      }
    },
    {
      id: 1,
      title: "IA Conference Brasil",
      date: "13 de agosto de 2025",
      location: "Centro de Convenções Rebouças, São Paulo",
      description: "Conferência sobre Inteligência Artificial e suas aplicações no mercado brasileiro. Foco em inovação, ética e futuro da tecnologia.",
      status: "Um evento Alura | Cupom DANVITORIANO10 - 10% de desconto",
      link: {
        url: "https://link.danvitoriano.com.br/iaconference",
        text: "Inscreva-se com desconto"
      }
    },
    {
      id: 13,
      title: "Rio Innovation Week + TDC Experience",
      date: "De 12 a 15 de agosto de 2025",
              location: "Pier Mauá, Rio de Janeiro",
      description: "Um dos maiores eventos de inovação do país! Vou mediar um painel especial no encerramento (15/08 às 18h), em parceria com o TDC Experience, abordando viéses, diversidade e acessibilidade na Inteligência Artificial. Uma oportunidade única de discutir inclusão no mercado tech com convidados especialistas.",
      status: "Stone sorteando ingressos gratuitos para grupos subrepresentados",
      link: {
        url: "https://link.danvitoriano.com.br/stone",
        text: "Inscreva-se para concorrer"
      }
    },
    {
      id: 14,
      title: "World Neurotechnologies Forum (WNF)",
      date: "26 de agosto de 2025",
      location: "Teatro Santander - São Paulo/SP",
      description: "O maior evento de neurotecnologia da América Latina. Tema: \"Engenharia da Mente - Reconstruindo a Nossa Humanidade\". Evento presencial e online das 8h às 19h, reunindo especialistas em neurociência, IA, interfaces cérebro-máquina e tecnologias emergentes.",
      status: "Cupom NEUROTECH20 com desconto | Sorteio de ingressos na seção Sorteios",
      link: {
        url: "https://wnf.global/",
        text: "wnf.global"
      }
    },
    {
      id: 3,
      title: "Programaria Summit 10 Anos",
      date: "18 de outubro de 2025",
      location: "UNIP Indianópolis - São Paulo",
      description: "Celebração dos 10 anos da Programaria, organização que promove a diversidade de gênero na tecnologia. Evento com palestras, painéis, workshops, feira de oportunidades e networking.",
      status: "Sorteio de 10 ingressos para mulheres cis ou trans",
      link: {
        url: "/sorteios",
        text: "Participar do sorteio"
      }
    }
    
  ];

  const pastEvents: Event[] = [
    {
      id: 2,
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
      id: 4,
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
      id: 5,
      title: "Devs 40+ Conference",
      date: "28 de outubro de 2023",
      description: "1ª edição da conferência de profissionais maduras na tecnologia.",
      status: null,
      link: {
        url: "https://www.devs40mais.com.br/",
        text: "Devs 40+ Conference"
      }
    },
    {
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
      title: "Reply Xchange",
      date: "13 de junho de 2024",
      description: null,
      status: null,
      isInternal: true,
      link: {
        url: "https://www.reply.com/pt/xchange",
        text: "Reply Xchange"
      }
    }
  ];

  const renderEvent = (event: Event, isPast: boolean = false) => {
    const containerClass = isPast ? "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 opacity-60" : "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0";
    const titleClass = isPast ? "text-sm font-medium leading-6 text-gray-500" : "text-sm font-medium leading-6 text-gray-900";
    const contentClass = isPast ? "mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0" : "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0";
    const descriptionClass = isPast ? "text-gray-400" : "text-gray-600";
    const linkClass = isPast ? "text-indigo-500 hover:text-indigo-400 underline" : "text-indigo-600 underline hover:text-indigo-500";
    const internalClass = isPast ? "text-gray-400" : "text-gray-500";

    return (
      <div key={event.id} className={containerClass}>
        <dt className={titleClass}>
          {event.title}
          {event.isInternal && (
            <>
              <br />
              <small className={internalClass}>Evento Interno</small>
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
          <dl className="divide-y divide-gray-100">
            {/* Próximos Eventos */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                Próximos Eventos
              </h3>
              <div className="space-y-6">
                {upcomingEvents.map(event => renderEvent(event, false))}
              </div>
            </div>

            {/* Eventos Passados */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-600 mb-6 border-b border-gray-200 pb-2">
                Eventos Passados
              </h3>
              <div className="space-y-6">
                {pastEvents.map(event => renderEvent(event, true))}
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
