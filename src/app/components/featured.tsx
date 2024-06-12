import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Tech 40+",
    description:
      "Comunidade, evento e podcast de tecnologia para a faixa etária acima dos 40 anos.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Orgulho Tech",
    description:
      "1ª conferência e podcast para profissionais da comunidade LGBTQIA+ na tecnologia.",
    icon: LockClosedIcon,
  },
  {
    name: "Tech Television Brasil",
    description:
      "1º canal de TV com conteúdo 24 horas sobre tecnologia e programação.",
    icon: ServerIcon,
  },
];

export default function Feature({titulo}: any) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {titulo ? (<h1 className="text-5xl pb-16">{titulo}</h1>) : null}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Criatividade e inovação
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Conteúdo em tecnologia
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Sou professor de tecnologia, publicitário e LinkedIn Top Voice
                em Desenvolvimento de Software, gerando impacto através da
                promoção de eventos, formação de comunidades e a gestão de
                canais de comunicação como:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/images/home-danvitoriano.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
