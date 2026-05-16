export default function HomeHighlights() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">

        {/* Diferentia — novo projeto */}
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Novo projeto</h2>
          <div className="overflow-hidden rounded-2xl ring-2 ring-teal-300/80 bg-white shadow-md">
            <div className="bg-gradient-to-r from-slate-800 via-teal-700 to-emerald-600 h-1.5 w-full" />
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 p-6 sm:p-8">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-teal-900 bg-teal-100 px-2 py-0.5 rounded-full ring-1 ring-teal-200">
                    Startup
                  </span>
                  <span className="text-xs font-medium text-slate-800 bg-slate-100 px-2 py-0.5 rounded-full">
                    Mercado financeiro
                  </span>
                  <span className="text-xs font-medium text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Agentic AI
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  Diferentia
                </p>
                <p className="text-sm sm:text-base text-gray-700 mt-3 leading-relaxed">
                  Ensino times de{" "}
                  <strong className="font-semibold text-gray-900">fundos, gestoras e fintechs</strong> a criar e operar{" "}
                  <strong className="font-semibold text-gray-900">agentes de IA</strong> no dia a dia — com metodologia
                  proprietária do diagnóstico de maturidade à autonomia operacional, em casos reais do setor financeiro.
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  Capacitação prática, trilhas sob medida por perfil e comunidade exclusiva do mercado — sem treinamento
                  genérico desconectado da mesa de trabalho.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0 lg:pt-2">
                <a
                  href="https://diferentia.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 transition-colors"
                >
                  Conhecer a Diferentia →
                </a>
                <a
                  href="https://diferentia.com.br#contato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-teal-900 ring-1 ring-teal-200 hover:ring-teal-400 transition-colors"
                >
                  Agendar diagnóstico gratuito
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Próximo Evento em destaque — Orgulho Tech Conf 2026 */}
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Próximo evento em destaque</h2>
          <div className="overflow-hidden rounded-2xl ring-2 ring-purple-300/80 bg-white shadow-md">
            <div className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-rose-500 h-1.5 w-full" />
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 p-6 sm:p-8">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-purple-900 bg-purple-100 px-2 py-0.5 rounded-full">
                    Data a definir
                  </span>
                  <span className="text-xs font-medium text-rose-800 bg-rose-100 px-2 py-0.5 rounded-full">
                    Semana da Parada LGBT+ SP
                  </span>
                  <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">
                    São Paulo · local a definir
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  Orgulho Tech Conf — edição 2026
                </p>
                <p className="text-sm sm:text-base text-gray-700 mt-3 leading-relaxed">
                  A conferência da <strong className="font-medium text-gray-900">Orgulho Tech</strong> volta para celebrar tecnologia, representatividade e comunidade LGBTQIA+ e aliadas no mercado tech — na semana da{" "}
                  <strong className="font-medium text-gray-900">Parada do Orgulho LGBT+ em São Paulo</strong>.
                  Data e endereço em definição;{" "}
                  <strong className="font-medium text-gray-900">venda de ingressos</strong> e{" "}
                  <strong className="font-medium text-gray-900">patrocínio</strong> abrem em breve.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0 lg:pt-2">
                <a
                  href="https://www.orgulhotech.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 transition-colors"
                >
                  Orgulho Tech →
                </a>
                <a
                  href="/eventos#evento-upcoming-32"
                  className="inline-flex justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-purple-900 ring-1 ring-purple-200 hover:ring-purple-400 transition-colors"
                >
                  Ver na agenda completa
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://www.sensedia.com.br/apix"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex flex-col sm:flex-row overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-white hover:ring-violet-400 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-gradient-to-b from-violet-600 to-fuchsia-600 w-full sm:w-1.5 flex-shrink-0" />
            <div className="flex flex-1 flex-col sm:flex-row items-start sm:items-center justify-between p-6 gap-4">
              <div>
                <p className="text-xs font-semibold text-indigo-600 mb-1">Também na agenda</p>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-violet-800 bg-violet-100 px-2 py-0.5 rounded-full">21 mai 2026</span>
                  <span className="text-xs font-medium text-fuchsia-800 bg-fuchsia-100 px-2 py-0.5 rounded-full">Sensedia</span>
                </div>
                <p className="text-lg font-bold text-gray-900 group-hover:text-violet-900 transition-colors">
                  APIX 2026
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  WTC Events Center · APIs, integrações e IA
                </p>
              </div>
              <span className="flex-shrink-0 rounded-md bg-violet-700 px-5 py-2.5 text-sm font-semibold text-white group-hover:bg-violet-800 transition-colors">
                Site do evento →
              </span>
            </div>
          </a>
        </div>

        {/* Woman & Queer Tech — retrospectiva */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50 ring-1 ring-purple-200/60 px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-700 mb-2">
                Recentes na comunidade
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Woman &amp; Queer Tech — duas edições em 2026
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
                Em março, a Blip recebeu a 1ª edição; em maio, a UniBrad sediou o 2º meetup — palestras sobre Copilot e IA, com coffees para networking. Em ambos,{" "}
                <span className="font-medium text-gray-900">Orgulho Tech</span>,{" "}
                <span className="font-medium text-gray-900">Devs 40+</span> e{" "}
                <span className="font-medium text-gray-900">Elas Programam</span>{" "}
                reuniram a comunidade LGBTQIA+ e aliadas em um espaço de carreira, tecnologia e pertencimento.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Virada de página com gratidão a palestrantes, parceiros e a cada pessoa que participou.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href="/eventos#evento-past-33"
                className="inline-flex justify-center rounded-lg bg-purple-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 transition-colors"
              >
                2ª edição na agenda
              </a>
              <a
                href="https://www.meetup.com/pt-br/orgulhotech/events/313611019/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-purple-800 ring-1 ring-purple-200 hover:ring-purple-300 transition-colors"
              >
                1ª edição no Meetup
              </a>
              <a
                href="/eventos"
                className="inline-flex justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-purple-800 ring-1 ring-purple-200 hover:ring-purple-300 transition-colors"
              >
                Ver todos os eventos
              </a>
            </div>
          </div>
        </div>

        {/* Comunidades & projetos */}
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Comunidades &amp; projetos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://diferentia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-white ring-1 ring-gray-200 p-6 hover:ring-teal-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                Diferentia
              </h3>
              <p className="text-sm text-gray-600 mt-2 flex-1">
                Agentic AI para fundos, gestoras e fintechs: metodologia do diagnóstico à autonomia para times que operam com agentes de IA no dia a dia.
              </p>
              <span className="mt-4 text-sm font-semibold text-teal-600 inline-block group-hover:translate-x-1 transition-transform">
                diferentia.com.br →
              </span>
            </a>

            <a
              href="https://www.orgulhotech.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-white ring-1 ring-gray-200 p-6 hover:ring-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">🏳️‍🌈</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                Orgulho Tech
              </h3>
              <p className="text-sm text-gray-600 mt-2 flex-1">
                1ª conferência e podcast para profissionais LGBTQIA+ na tecnologia. Um espaço de representatividade, pertencimento e desenvolvimento de carreira no mercado tech.
              </p>
              <span className="mt-4 text-sm font-semibold text-purple-600 inline-block group-hover:translate-x-1 transition-transform">
                orgulhotech.com.br →
              </span>
            </a>

            <a
              href="https://www.devs40mais.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-white ring-1 ring-gray-200 p-6 hover:ring-indigo-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                Devs 40+
              </h3>
              <p className="text-sm text-gray-600 mt-2 flex-1">
                Comunidade, evento e podcast de tecnologia para profissionais acima dos 40 anos. Longevidade, experiência e inovação como diferencial no mercado.
              </p>
              <span className="mt-4 text-sm font-semibold text-indigo-600 inline-block group-hover:translate-x-1 transition-transform">
                devs40mais.com.br →
              </span>
            </a>
          </div>
        </div>

        {/* Conteúdo */}
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Conteúdo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="https://danvitoriano.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-white ring-1 ring-gray-200 p-6 hover:ring-orange-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">📩</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                Newsletter
              </h3>
              <p className="text-sm text-gray-600 mt-2 flex-1">
                Conteúdo sobre tecnologia, IA, diversidade e carreira direto no seu e-mail. Assine gratuitamente no Substack.
              </p>
              <span className="mt-4 text-sm font-semibold text-orange-600 inline-block group-hover:translate-x-1 transition-transform">
                Assinar no Substack →
              </span>
            </a>

            <a
              href="https://medium.com/@danvitoriano"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-white ring-1 ring-gray-200 p-6 hover:ring-gray-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">✍️</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                Medium
              </h3>
              <p className="text-sm text-gray-600 mt-2 flex-1">
                Artigos sobre desenvolvimento, inteligência artificial, inclusão e o futuro do mercado de tecnologia.
              </p>
              <span className="mt-4 text-sm font-semibold text-gray-700 inline-block group-hover:translate-x-1 transition-transform">
                Ler artigos →
              </span>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}
