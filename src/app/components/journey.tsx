"use client";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "15 anos",
    title: "Início na Propaganda",
    description:
      "Começou a carreira em agência de propaganda, trabalhando com gráfica, web design e comunicação visual.",
    icon: BriefcaseIcon,
  },
  {
    year: "10 anos",
    title: "Publicitário e Criativo",
    description:
      "Atuou por uma década como publicitário e criativo, inclusive com estúdio próprio, focando em produtos digitais.",
    icon: SparklesIcon,
  },
  {
    year: "2011",
    title: "Transição para Tecnologia",
    description:
      "Migrou para programação após os 35 anos, focando em transformação pessoal e social através da tecnologia.",
    icon: CodeBracketIcon,
  },
  {
    year: "Hoje",
    title: "Educador e Líder de Comunidades",
    description:
      "Professor na FIAP, mestrando em Ciência da Computação na USP, UI Engineer e criador de comunidades tech inclusivas.",
    icon: AcademicCapIcon,
  },
];

export default function Journey() {
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
    <div className="bg-gray-50 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Trajetória
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uma jornada de transformação
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Da propaganda à tecnologia, uma história de reinvenção profissional
            que inspira pessoas a começarem ou recomeçarem suas carreiras em tech
            em qualquer idade.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`flex flex-col transition-all duration-700 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 transition-transform duration-300 hover:rotate-12">
                    <milestone.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-indigo-600">{milestone.year}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </p>
                  <p className="flex-auto">{milestone.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:text-center">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-4">
            Formação Acadêmica
          </h3>
          <div className="text-left space-y-2 text-gray-600">
            <p>📚 Graduação em <strong>Comunicação Social</strong></p>
            <p>💻 Graduação em <strong>Sistemas de Informação</strong></p>
            <p>🎬 Pós-graduação em <strong>Cinema, Vídeo e Fotografia</strong></p>
            <p>🎓 Mestrado em <strong>Ciência da Computação na USP</strong> (em andamento)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

