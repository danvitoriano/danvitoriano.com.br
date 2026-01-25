"use client";

import { useEffect, useRef, useState } from "react";

export default function BrandsCloud() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Parcerias
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Marcas que já trabalharam comigo
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ao longo da minha trajetória como criador de conteúdo, tive o privilégio de colaborar 
            com grandes marcas em campanhas de publicidade, patrocínios e parcerias estratégicas.
          </p>
        </div>

        <div 
          className={`mx-auto max-w-4xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="/images/marcas-publicidade.png"
            alt="Logos das marcas parceiras: Mercado Livre, L'Oréal, Descomplica, Twilio, Alura, Insider, TCL, Locaweb, Woovi, ActiveCampaign, Leapmotor, Reply, Cielo, FIAP, The Developer's Conference"
            className="w-full rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl"
          />
        </div>

        <div 
          className={`mx-auto mt-16 max-w-2xl rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 p-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Quer fazer publicidade comigo?
          </h3>
          <p className="text-gray-700 mb-6">
            Estou sempre aberto a novas parcerias e colaborações. Com um alcance de mais de 80 mil seguidores 
            nas redes sociais e um público engajado na área de tecnologia, posso ajudar sua marca a alcançar 
            desenvolvedores, profissionais de TI e entusiastas de tecnologia.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://beacons.ai/danvitoriano/mediakit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105"
            >
              Ver mídia kit
              <span className="ml-2" aria-hidden="true">↗</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:scale-105"
            >
              Entre em contato
              <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
