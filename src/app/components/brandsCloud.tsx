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
    <div 
      ref={ref}
      className={`mx-auto max-w-4xl transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <img
        src="/images/marcas-publicidade.png"
        alt="Logos das marcas parceiras: Mercado Livre, L'Oréal, Descomplica, Twilio, Insider, TCL, Locaweb, Woovi, ActiveCampaign, Leapmotor, Reply, Cielo, FIAP, The Developer's Conference"
        className="w-full rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl"
      />
    </div>
  );
}
