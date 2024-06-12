import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Entre em Contato
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Email <a href="mailto:contato@danvitoriano.com.br" className="text-indigo-600">contato@danvitoriano.com.br</a> ou WhatsApp <a href="https://wa.me/5511948212672" className="text-indigo-600">(11) 94821-2672</a>.
        </p>
        <hr className="my-8 border-gray-200" />
        <h2 className="text-1xl tracking-tight text-gray-900 sm:text-4xl pt-16">
          Newsletter
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Receba as novidades do blog e do canal no seu email.
        </p>
        <Image src="/images/newsletter-substack.png" alt="Entre em contato" width={600} height={333} className="py-8" />
        
        <div>
              <button
                type="submit"
                className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Assinar Newsletter
              </button>
            </div>
            <p className="mt-10 text-left text-sm text-gray-500">
            Procurando meu Mídia Kir?{' '}
            <a href="https://www.canva.com/design/DAEtHvpYXe4/37YTn4mjOvkAMt0r-bK85w/view?website#4" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" target="_blank">
              Acesse online aqui.
            </a>
          </p>
      </div>
    </div>
  );
}
