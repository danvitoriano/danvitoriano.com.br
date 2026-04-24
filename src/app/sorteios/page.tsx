export default function Sorteios() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Sorteios
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sorteios de eventos
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            No momento, nao ha sorteios ativos. Os sorteios abaixo ficam
            disponiveis apenas como historico.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
            Sorteios passados
          </h3>

          <div className="flex justify-center">
            <div className="rounded-lg border border-gray-200 p-8 max-w-md w-full bg-gray-50 opacity-80">
              <div className="text-center">
                <div className="text-5xl mb-4">🖥️</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  The Developers Conference Sao Paulo
                </h4>
                <p className="text-base text-gray-600 mb-2">
                  O maior evento de desenvolvimento do Brasil
                </p>
                <p className="text-sm text-gray-600 font-semibold mb-4">
                  Abril de 2026
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700">
                  Encerrado
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Quando houver novos sorteios, essa pagina sera atualizada.
          </p>
        </div>
      </div>
    </div>
  );
}
