import BrandsCloud from "../components/brandsCloud";

export default function Publicidade() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Publicidade & Parcerias
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Como criador de conteúdo tech, ajudo marcas a conectar-se com um público 
              qualificado de desenvolvedores e profissionais de tecnologia através de 
              parcerias autênticas e conteúdo de valor.
            </p>
          </div>

          {/* Stats Banner */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-2xl sm:p-10">
              <div className="text-center">
                <div className="text-5xl font-bold text-white sm:text-6xl">97k+</div>
                <div className="mt-2 text-lg text-gray-300">Seguidores nas Principais Plataformas</div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">32.2k</div>
                  <div className="text-sm text-gray-400">Instagram</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">33k</div>
                  <div className="text-sm text-gray-400">LinkedIn</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">18.9k</div>
                  <div className="text-sm text-gray-400">TikTok</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">8.4k</div>
                  <div className="text-sm text-gray-400">Threads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.4k</div>
                  <div className="text-sm text-gray-400">YouTube</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Alcance e Engajamento
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Dados reais das principais plataformas de conteúdo tech
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {/* Instagram */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">32.2k</div>
                  <div className="text-sm text-gray-600">Instagram</div>
                </div>
              </div>
              <div className="mb-4 flex-1 space-y-2 border-b border-gray-200 pb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Engajamento</span>
                  <span className="font-semibold text-gray-900">6.1%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Alcance 30d</span>
                  <span className="font-semibold text-gray-900">3.3M</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Impressões</span>
                  <span className="font-semibold text-gray-900">5.3M</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Views Reels</span>
                  <span className="font-semibold text-gray-900">295.3k</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Média Likes</span>
                  <span className="font-semibold text-gray-900">17k</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Total Engajamentos</span>
                  <span className="font-semibold text-gray-900">526.9k</span>
                </div>
              </div>
              <div className="mb-4 rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-medium text-white">
                Top 1% em engajamento
              </div>
              <div className="space-y-1 text-xs text-gray-600">
                <div className="font-semibold text-gray-900">Demografia:</div>
                <div>56.1% feminino</div>
                <div>25-34 anos (principal)</div>
                <div>Brasil 93.6%</div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">33k</div>
                  <div className="text-sm text-gray-600">LinkedIn</div>
                </div>
              </div>
              <div className="mb-4 flex-1 space-y-2 border-b border-gray-200 pb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Impressões/ano</span>
                  <span className="font-semibold text-gray-900">1.23M</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Membros alcançados</span>
                  <span className="font-semibold text-gray-900">452.8k</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Newsletter</span>
                  <span className="font-semibold text-gray-900">14.5k</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Views artigos/ano</span>
                  <span className="font-semibold text-gray-900">30k</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Crescimento</span>
                  <span className="font-semibold text-green-600">+25.7%</span>
                </div>
              </div>
              <div className="mb-4 rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-medium text-white">
                Público profissional tech
              </div>
              <div className="space-y-1 text-xs text-gray-600">
                <div className="font-semibold text-gray-900">Demografia:</div>
                <div>Decisores e influenciadores</div>
                <div>Profissionais tech sênior</div>
                <div>Brasil e América Latina</div>
              </div>
            </div>

            {/* TikTok */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-900">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">18.9k</div>
                  <div className="text-sm text-gray-600">TikTok</div>
                </div>
              </div>
              <div className="mb-4 flex-1 space-y-2 border-b border-gray-200 pb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Engajamento</span>
                  <span className="font-semibold text-gray-900">4.5%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Vídeos</span>
                  <span className="font-semibold text-gray-900">681</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Média Views</span>
                  <span className="font-semibold text-gray-900">1.3k</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Média Likes</span>
                  <span className="font-semibold text-gray-900">90</span>
                </div>
              </div>
              <div className="mb-4 rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-medium text-white">
                Conteúdo dinâmico
              </div>
              <div className="space-y-1 text-xs text-gray-600">
                <div className="font-semibold text-gray-900">Demografia:</div>
                <div>55% masculino</div>
                <div>18-24 anos (principal)</div>
                <div>Brasil 81.7%</div>
              </div>
            </div>

            {/* Threads */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-900">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.704-1.63 0-2.898-.681-3.567-1.919-.518-.96-.568-2.183-.142-3.44.65-1.91 2.084-3.23 3.608-3.23.814 0 1.609.403 2.237 1.134l.13-1.038h1.579l-.764 6.074c-.13 1.036.096 1.875.654 2.43.558.555 1.418.835 2.479.809 1.293-.033 2.343-.543 3.13-1.519.968-1.204 1.415-2.923 1.415-5.422 0-3.324-1.203-6.08-3.58-8.202C16.76 1.218 14.082.024 12.186 0zm1.772 11.037c-.505 0-1.025.556-1.39 1.485-.212.54-.274 1.047-.185 1.508.062.325.214.6.429.774.288.234.688.364 1.129.364.933 0 1.626-.554 2.063-1.648.218-.544.325-1.084.319-1.608-.004-.327-.079-.604-.222-.826-.19-.294-.54-.458-.989-.458l-.154.009z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">8.4k</div>
                  <div className="text-sm text-gray-600">Threads</div>
                </div>
              </div>
              <div className="mb-4 flex-1 space-y-2 border-b border-gray-200 pb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Engajamento</span>
                  <span className="font-semibold text-gray-900">1.8%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Impressões</span>
                  <span className="font-semibold text-gray-900">16.4k</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Média Views</span>
                  <span className="font-semibold text-gray-900">821</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Média Likes</span>
                  <span className="font-semibold text-gray-900">8</span>
                </div>
              </div>
              <div className="mb-4 rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-medium text-white">
                Público 35-44 anos
              </div>
              <div className="space-y-1 text-xs text-gray-600">
                <div className="font-semibold text-gray-900">Demografia:</div>
                <div>66.5% masculino</div>
                <div>35-44 anos (principal)</div>
                <div>Brasil 96.6%</div>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-600">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.4k</div>
                  <div className="text-sm text-gray-600">YouTube</div>
                </div>
              </div>
              <div className="mb-4 flex-1 space-y-2 border-b border-gray-200 pb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Engagement</span>
                  <span className="font-semibold text-gray-900">9.1%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Vídeos</span>
                  <span className="font-semibold text-gray-900">546</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Formato</span>
                  <span className="font-semibold text-gray-900">Long+Short</span>
                </div>
              </div>
              <div className="mb-4 rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-medium text-white">
                Conteúdo educacional
              </div>
              <div className="space-y-1 text-xs text-gray-600">
                <div className="font-semibold text-gray-900">Demografia:</div>
                <div>62.5% masculino</div>
                <div>35-44 anos (principal)</div>
                <div>Brasil 80.9%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Niches */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nichos de Conteúdo
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Áreas de especialização e foco de conteúdo
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Tecnologia & IA</h3>
              <p className="mt-3 text-gray-600">
                Análises, tendências e insights sobre inteligência artificial e tecnologia emergente.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Marketing Digital</h3>
              <p className="mt-3 text-gray-600">
                Estratégias, ferramentas e práticas de marketing digital e redes sociais.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Educação em Tech</h3>
              <p className="mt-3 text-gray-600">
                Conteúdo educacional sobre tecnologia, programação e desenvolvimento de carreira.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Diversidade LGBTQIA+</h3>
              <p className="mt-3 text-gray-600">
                Representatividade, inclusão e diversidade no mercado de tecnologia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Marcas Parceiras
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Empresas que já confiaram no meu trabalho
            </p>
          </div>
          <div className="mt-16">
            <BrandsCloud />
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tabela de Investimentos
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Valores e formatos de conteúdo disponíveis para parcerias
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
              <span className="font-medium text-gray-900">Reels Instagram</span>
              <span className="text-2xl font-bold text-gray-900">R$ 4.000</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
              <span className="font-medium text-gray-900">Sequência Stories (3x)</span>
              <span className="text-2xl font-bold text-gray-900">R$ 1.000</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
              <span className="font-medium text-gray-900">Pacote Reels + Stories</span>
              <span className="text-2xl font-bold text-gray-900">R$ 4.500</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
              <span className="font-medium text-gray-900">TikTok Vídeo</span>
              <span className="text-2xl font-bold text-gray-900">R$ 2.000</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
              <span className="font-medium text-gray-900">YouTube Short</span>
              <span className="text-2xl font-bold text-gray-900">R$ 1.500</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
              <span className="font-medium text-gray-900">YouTube Inserção Patrocinada</span>
              <span className="text-2xl font-bold text-gray-900">R$ 1.500</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
              <span className="font-medium text-gray-900">Newsletter LinkedIn</span>
              <span className="text-2xl font-bold text-gray-900">R$ 2.000</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
              <span className="font-medium text-gray-900">Pacote Newsletter + Reels</span>
              <span className="text-2xl font-bold text-gray-900">R$ 5.500</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
              <span className="font-medium text-gray-900">Cobertura Presencial</span>
              <span className="text-xl font-bold text-indigo-600">Consultar</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
              <span className="font-medium text-gray-900">Pacote Mensal</span>
              <span className="text-xl font-bold text-indigo-600">Consultar</span>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm text-gray-700">
              <strong>Nota:</strong> Pagamento via boleto ou PIX com nota fiscal pela FULLCIRCLE SERVIÇOS DE INFORMÁTICA LTDA.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Valores com validade de 30 dias.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vamos trabalhar juntos?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Confira meu mídia kit completo no Beacons com métricas detalhadas e dados demográficos 
              atualizados em tempo real.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://beacons.ai/danvitoriano"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-900 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-gray-800 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Ver Mídia Kit Completo
              </a>
              <a
                href="mailto:contato@danvitoriano.com.br"
                className="rounded-full border-2 border-gray-900 px-8 py-3.5 text-base font-semibold text-gray-900 transition-all hover:bg-gray-900 hover:text-white hover:scale-105"
              >
                Entrar em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
