export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Gradiente de fundo com animação de pulso */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-pulse-slow"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] transition-all duration-1000"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* Badge com animação de entrada */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center animate-fade-in-down">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              Em destaque · Woman &amp; Queer Tech 2º meetup · 25 abr · Copilot &amp; IA · SP{" "}
              <a href="/eventos" className="font-semibold text-purple-700">
                <span className="absolute inset-0" aria-hidden="true" />
                Ver detalhes <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
          
          {/* Título com animação */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-in-up animation-delay-200">
              Dan Vitoriano, developer e tech creator.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in-up animation-delay-400">
              Consultor em tecnologia e IA com foco em diversidade e inclusão. Criador de comunidades tech inclusivas, eventos e podcasts para impacto social e representatividade no mercado tech.
            </p>
            
            {/* Botões com animação */}
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up animation-delay-600">
              <a
                href="/about"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Saber mais
              </a>
              <a
                href="/iniciativas"
                className="text-sm font-semibold leading-6 text-gray-900 transition-all duration-300 hover:text-indigo-600 group"
              >
                Iniciativas <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Gradiente inferior com animação */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] animate-pulse-slow"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] transition-all duration-1000"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
