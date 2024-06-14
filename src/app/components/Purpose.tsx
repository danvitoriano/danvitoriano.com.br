import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ChevronDownIcon,
  StopCircleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Empresas com diversidade faturam mais",
    description:
      "Estudo realizado pela McKinsey mostra que empresas com diversidade de gênero faturam 21% a mais, e com diversidade étnica e cultural lucram 33% mais.",
    icon: CloudArrowUpIcon,
    href: "https://www.cnnbrasil.com.br/economia/encontro-promete-debater-a-importancia-da-diversidade-e-inclusao-nas-empresas/#:~:text=De%20acordo%20com%20o%20estudo,lucram%2033%25%20acima%20do%20esperado",
  },
  {
    name: "Questões LGBTQ+ no local de trabalho",
    description:
      "A Catalyst compartilhou a pesquisa \"Questões LGBTQ+ no local de trabalho\", em que 23% dos colaboradores norte-americanos LGBTQIA+ entrevistados disseram que foram discriminados com base em sua orientação sexual ou identidade de gênero ao se candidatarem para vagas.",
    icon: LockClosedIcon,
    href:"https://www.catalyst.org/research/lgbtq-workplace-issues/",
  },
  {
    name: "LGBT Events: Sense of Belonging",
    description:
      "Um estudo da University of Central Florida, mostrou que um dos principais fatores que levam a comunidade LGBTQIA+ a participar de eventos relacionados à causa é justamente o sentimento de pertencimento.",
    icon: ArrowPathIcon,
    href:"https://stars.library.ucf.edu/cgi/viewcontent.cgi?article=1013&context=rosen-research-review",
  },
  {
    name: "SEBRAE: Empresa inclusiva e diversa gera melhores resultados",
    description:
      "Ter um time mais diverso constrói produtos inclusivos e aumenta o retorno mercadológico.",
    icon: FingerPrintIcon,
    href:"https://sebrae.com.br/sites/PortalSebrae/artigos/ter-uma-empresa-inclusiva-e-diversa-pode-gerar-melhores-resultados,112897ad1eb56810VgnVCM1000001b00320aRCRD",
  },
  {
    name: "VTEX e grupos de afinidade LGBTQ+",
    description: "Conectar o grupo de afinidade LGBTQ+ da sua empresa a uma comunidade ainda maior, diversa e inclusiva, pode ser o pertencimento que tantos procuram.",
    icon: ChevronDownIcon,
    href: "https://vtex.com/pt-br/blog/culture-pt-br/importancia-de-referencias-lgbtqia-no-ambiente-de-trabalho/",
    },
    {
        name: "Scielo Brasil: Sexualidad, Salud y Sociedad",
        description: "Eu tento não me esconder, nunca”: estratégias utilizadas pelos profissionais gays e lésbicas para minimizar os estigmas sexuais nos espaços de trabalho.",
        icon: StopCircleIcon,
        href: "https://www.scielo.br/j/sess/a/8nqvDDPLkSV3H8WhsWKTBWg/",
    }
];

export default function Purpose({topic, titulo, content} : any) {
  return (
    <div id="proposito" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            {topic}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {titulo}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {content}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <a href={feature.href} target="_blank" className="text-indigo-600 underline">{feature.name}</a>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
