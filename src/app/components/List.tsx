import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function List() {
  return (
    <div className="mx-auto mt-8 max-w-4xl py-12 sm:px-6 lg:px-8">
      <div className="mt-24mx-auto max-w-4xl ">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Matérias publicadas
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Assessoria de imprensa: Mention
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Revista Elle
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <a
                  href="https://www.elle.com.br/moda/noticia/imersao-5g-o-que-pode-mudar-na-moda"
                  className="text-indigo-600 hover:text-indigo-500 font-bold"
                >
                  Imersão 5G: o que pode mudar na moda
                </a>
                <br />
                <small>Exclusivo para assinantes </small>
                <br />A quinta geração de internet móvel pode ser responsável
                por transformar a indústria, da produção ao varejo, e propõe
                soluções além da bidimensionalidade da tela do celular.
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                iMasters
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <a
                  href="https://imasters.com.br/noticia/dan-vitoriano-sera-o-apresentador-da-braziljs-conf-2024"
                  className="text-indigo-600 hover:text-indigo-500 font-bold"
                >
                  Dan Vitoriano será o apresentador da BrazilJS Conf 2024
                </a>
                <br />
                <a
                  href="https://imasters.com.br/noticia/sao-paulo-sedia-a-1a-conferencia-tech-para-profissionais-lgbtqia"
                  className="text-indigo-600 hover:text-indigo-500 font-bold"
                >
                  São Paulo sedia a 1ª conferência tech para profissionais LGBTQIA+
                </a>
                <br />
                <a
                  href="https://imasters.com.br/design-ux/ux-ui-e-front-end"
                  className="text-indigo-600 hover:text-indigo-500 font-bold"
                >
                  UX, UI e Front-end
                </a>
                <br />
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Music Non Stop (UOL)
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <a
                  href="https://musicnonstop.uol.com.br/guia-parada-lgbt/"
                  className="text-indigo-600 hover:text-indigo-500 font-bold"
                >
                  O guia definitivo do final de semana da Parada LGBT+ em São Paulo
                </a>
                <br />
                Celebrando a diversidade e a inclusão da comunidade LGBTQIAPN+ no setor tecnológico, acontece a primeira edição do Orgulho Tech Conf, no Teatro Fecap, em São Paulo. Idealizado por Dan Vitoriano e cofundado por Rafa Mores, o evento conta com a presença de mais de 20 especialistas influentes e atuantes nesse setor, como Gui Silveira (Alura), Damiana Nascimento (FIAP), Renato Paixão (Dibbs, PretUX), Nathally Souza (Nubank) e Thiago Holanda (Biti9).
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Dois terços
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <a
                  href="https://www.doistercos.com.br/em-sao-paulo-evento-orgulho-tech-conf-celebra-a-diversidade-e-inclusao-lgbtqiapn-na-tecnologia/#google_vignette"
                  className="text-indigo-600 hover:text-indigo-500 font-bold"
                >
                  Em São Paulo, evento Orgulho Tech Conf celebra a diversidade e inclusão LGBTQIAPN+ na tecnologia
                </a>
                <br />
                Idealizado por Dan Vitoriano e co-fundado por Rafa Mores, o evento está marcado para o próximo sábado, 01, e conta com a presença de mais de onze especialistas influentes e atuantes nesse setor.
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
              Gay Blog BR by Scruff
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <a
                  href="https://gay.blog.br/noticias/conferencia-reune-lideres-lgbt-do-setor-tecnologico-em-sao-paulo/"
                  className="text-indigo-600 hover:text-indigo-500 font-bold"
                >
                  Conferência reúne líderes LGBT+ do setor tecnológico em São Paulo
                </a>
                <br />
                O evento é idealizado pelo fundador da Orgulho Tech, Dan Vitoriano, e co-fundado por Rafa Mores, CEO da Elu Inovação
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  );
}
