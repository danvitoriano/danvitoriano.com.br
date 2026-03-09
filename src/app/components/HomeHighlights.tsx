export default function HomeHighlights() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">

        {/* Próximo Evento */}
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Próximo Evento</h2>
          <a
            href="https://www.meetup.com/pt-br/orgulhotech/events/313611019/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-white hover:ring-purple-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-gradient-to-b from-purple-600 to-fuchsia-600 w-full sm:w-1.5 flex-shrink-0" />
            <div className="flex flex-1 flex-col sm:flex-row items-start sm:items-center justify-between p-6 gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">19 mar 2026</span>
                  <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Gratuito</span>
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">Presencial + Online</span>
                </div>
                <p className="text-lg font-bold text-gray-900 group-hover:text-purple-800 transition-colors">
                  Woman &amp; Queer Tech
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  📍 Blip · Av. Brigadeiro Faria Lima, 4221 · Itaim Bibi, São Paulo, SP
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Uma realização de <span className="font-medium text-gray-700">Orgulho Tech</span> · <span className="font-medium text-gray-700">Devs 40+</span> · <span className="font-medium text-gray-700">Elas Programam</span>
                </p>
              </div>
              <span className="flex-shrink-0 rounded-md bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white group-hover:bg-purple-800 transition-colors">
                Inscreva-se Grátis →
              </span>
            </div>
          </a>
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
              href="https://link.danvitoriano.com.br/python"
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
