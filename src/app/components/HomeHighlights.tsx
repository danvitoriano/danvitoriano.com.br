export default function HomeHighlights() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">

        {/* Próximo Evento em destaque — Woman & Queer Tech 2º meetup */}
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Próximo evento em destaque</h2>
          <div className="overflow-hidden rounded-2xl ring-2 ring-purple-300/80 bg-white shadow-md">
            <div className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-rose-500 h-1.5 w-full" />
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 p-6 sm:p-8">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-purple-900 bg-purple-100 px-2 py-0.5 rounded-full">
                    25 abr 2026 · 9h30–13h
                  </span>
                  <span className="text-xs font-medium text-fuchsia-900 bg-fuchsia-100 px-2 py-0.5 rounded-full">
                    Copilot &amp; IA
                  </span>
                  <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">
                    Próximo ao metrô · local em breve
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  Woman &amp; Queer Tech — 2º meetup
                </p>
                <p className="text-sm sm:text-base text-gray-700 mt-3 leading-relaxed">
                  Palestras sobre <strong className="font-semibold text-gray-900">GitHub Copilot</strong> e{" "}
                  <strong className="font-semibold text-gray-900">inteligência artificial</strong>. Dois coffees: na entrada e na saída, para networking. Organizado pelas comunidades{" "}
                  <strong className="font-medium text-gray-900">Orgulho Tech</strong>,{" "}
                  <strong className="font-medium text-gray-900">Devs 40+</strong> e{" "}
                  <strong className="font-medium text-gray-900">Elas Programam</strong>, com{" "}
                  <strong className="font-medium text-gray-900">Dan Vitoriano</strong>,{" "}
                  <strong className="font-medium text-gray-900">Silvia Coelho</strong> e{" "}
                  <strong className="font-medium text-gray-900">Roberson Miguel (biosbug)</strong>.{" "}
                  <span className="text-gray-800">Apoio Bradesco.</span>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  Endereço e link de cadastro serão divulgados em breve — fique de olho nas redes e no site da Orgulho Tech.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0 lg:pt-2">
                <a
                  href="https://www.orgulhotech.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 transition-colors"
                >
                  Orgulho Tech — novidades em breve
                </a>
                <a
                  href="/eventos"
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

        {/* Orgulho Tech Conf 2026 */}
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Orgulho Tech — em São Paulo</h2>
          <div className="overflow-hidden rounded-2xl ring-1 ring-purple-200 bg-gradient-to-br from-purple-50 via-white to-rose-50 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-purple-800 bg-purple-100 px-2 py-0.5 rounded-full">
                    3 jun 2026 · qua · à noite
                  </span>
                  <span className="text-xs font-medium text-rose-800 bg-rose-100 px-2 py-0.5 rounded-full">
                    Véspera da Parada LGBT+ SP
                  </span>
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                    Local a definir
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Orgulho Tech Conf — edição 2026
                </h3>
                <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  Na quarta à noite anterior à{" "}
                  <span className="font-medium text-gray-900">Parada do Orgulho LGBT+ em São Paulo</span>{" "}
                  (domingo, 7 de junho de 2026), a conferência volta para celebrar tecnologia, representatividade e comunidade. Endereço em definição;{" "}
                  <span className="font-medium text-gray-900">venda de ingressos</span> e{" "}
                  <span className="font-medium text-gray-900">patrocínio</span> abrem em breve.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0 sm:pt-1">
                <a
                  href="https://www.orgulhotech.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-lg bg-purple-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 transition-colors"
                >
                  Orgulho Tech →
                </a>
                <a
                  href="/eventos"
                  className="inline-flex justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-purple-900 ring-1 ring-purple-200 hover:ring-purple-400 transition-colors"
                >
                  Ver na agenda de eventos
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Woman & Queer Tech — retrospectiva */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50 ring-1 ring-purple-200/60 px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-700 mb-2">
                Recentes na comunidade
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Como foi a 1ª edição do Woman &amp; Queer Tech
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
                Em março de 2026, a Blip recebeu o encontro que reuniu{" "}
                <span className="font-medium text-gray-900">Orgulho Tech</span>,{" "}
                <span className="font-medium text-gray-900">Devs 40+</span> e{" "}
                <span className="font-medium text-gray-900">Elas Programam</span>
                — painel, networking e coffee em um espaço pensado para carreira, tecnologia e pertencimento. Quem veio presencialmente ou acompanhou online ajudou a registrar mais um capítulo da nossa comunidade LGBTQIA+ e aliadas no tech.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Virada de página com gratidão a palestrantes, parceiros e a cada pessoa que participou.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href="https://www.meetup.com/pt-br/orgulhotech/events/313611019/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-lg bg-purple-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 transition-colors"
              >
                Página do encontro no Meetup
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

        {/* Comunidades */}
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Comunidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

        {/* Conteúdo & Parceria */}
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Conteúdo &amp; Parceria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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

            <a
              href="https://link.danvitoriano.com.br/alura"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-white ring-1 ring-gray-200 p-6 hover:ring-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Parceria Alura
              </h3>
              <p className="text-sm text-gray-600 mt-2 flex-1">
                Cursos de tecnologia e IA com desconto exclusivo. Aprenda Python, dados, programação e muito mais com a maior escola tech do Brasil.
              </p>
              <span className="mt-4 text-sm font-semibold text-blue-600 inline-block group-hover:translate-x-1 transition-transform">
                Ver cursos →
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
