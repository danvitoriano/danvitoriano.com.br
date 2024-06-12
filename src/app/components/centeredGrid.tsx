import { ArrowPathIcon, CloudArrowUpIcon, ServerIcon, LockClosedIcon, DocumentArrowDownIcon, PaintBrushIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
  
    {
        name: "Tech 40+",
        description:
          "Comunidade, evento e podcast de tecnologia para a faixa etária acima dos 40 anos.",
        icon: CloudArrowUpIcon,
        url: "https://devs40mais.com.br"
      },
      {
        name: "Orgulho Tech",
        description:
          "1ª conferência e podcast para profissionais da comunidade LGBTQIA+ na tecnologia.",
        icon: LockClosedIcon,
        url: "https://orgulhotech.com.br"
      },
      {
        name: "Tech Television Brasil",
        description:
          "1º canal de TV com conteúdo 24 horas sobre tecnologia e programação.",
        icon: ServerIcon,
        url: "https://techtelevision.com.br"
      },
      {
        name: "Alura",
        description:
          "Estude com desconto na maior ecossistema de educação em tecnologia do Brasil.",
        icon: ArrowPathIcon,
        url: "https://alura.tv/danvitoriano"
      },
      {
        name: "Cursos",
        description:
          "Divulgação de cursos gratuitos e descontos para diversas instituições.",
        icon: DocumentArrowDownIcon,
        url: "/iniciativas/cursos"
      },
      {
        name: "eBooks",
        description:
          "Materiais sobre programação, gestão de projetos e marketing digital.",
        icon: PaintBrushIcon,
        url: "/iniciativas/ebooks"
      },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <h1 className="text-5xl pb-16">Dan Vitoriano</h1>
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Iniciativas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Educação, tecnologia e entretenimento.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Consultoria em criação de conteúdo, eventos e podcasts. Divulgação de cursos e eBooks.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <Link href={feature.url}>
                    {feature.name}
                  </Link>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
