"use client";

import {
  TrophyIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const recognitions = [
  {
    name: "LinkedIn Top Voice",
    description:
      "Reconhecido como Top Voice em Desenvolvimento de Software, com mais de 31 mil seguidores e 3.000+ publicações.",
    icon: TrophyIcon,
    color: "bg-blue-600",
  },
  {
    name: "Alura Influencer",
    description:
      "Membro do programa de influenciadores da Alura, promovendo educação em tecnologia acessível e de qualidade.",
    icon: UserGroupIcon,
    color: "bg-indigo-600",
  },
  {
    name: "Rocketseat Experts Club",
    description:
      "Parte do seleto grupo de especialistas da Rocketseat, compartilhando conhecimento avançado em desenvolvimento.",
    icon: RocketLaunchIcon,
    color: "bg-purple-600",
  },
  {
    name: "LinkedIn Creators Brasil",
    description:
      "Acelerado pelo programa LinkedIn Creators, criando conteúdo de impacto sobre tecnologia e diversidade.",
    icon: ChatBubbleLeftRightIcon,
    color: "bg-green-600",
  },
];

const stats = [
  { label: "Seguidores no LinkedIn", value: "31.648+" },
  { label: "Seguidores no Instagram", value: "30K" },
  { label: "Seguidores no TikTok", value: "18.5K" },
  { label: "Inscritos no YouTube", value: "4.2K" },
  { label: "Seguidores no Twitter/X", value: "4K" },
  { label: "Publicações no LinkedIn", value: "3.000+" },
];

export default function Recognition() {
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
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Reconhecimentos
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Impacto e alcance
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Reconhecido por grandes empresas e comunidades tech pela contribuição
            em educação, diversidade e inovação no mercado de tecnologia.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-7xl">
          <dl
            className={`grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse gap-y-3 border-l-4 border-indigo-600 pl-6 transition-all duration-500 hover:scale-105 hover:border-indigo-400"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Recognitions */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {recognitions.map((recognition, index) => (
              <div
                key={recognition.name}
                className={`relative pl-16 transition-all duration-700 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div
                    className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ${recognition.color} transition-transform duration-300 hover:rotate-12`}
                  >
                    <recognition.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {recognition.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {recognition.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Additional Recognition */}
        <div
          className={`mx-auto mt-16 max-w-2xl rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 p-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            🏆 Destaques Especiais
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Top 150 Profissionais LGBTQIA+</strong> reconhecido pela 
              Maratona do Orgulho em 2025, destacando a liderança e impacto na 
              promoção da diversidade no mercado de tecnologia.
            </p>
            <p className="text-gray-700">
              Reconhecido pela <strong>Gama Academy</strong> como um dos{" "}
              <strong>50 Programadores a se seguir</strong>, destacando a
              contribuição para a comunidade tech brasileira através de conteúdo
              educacional, iniciativas de diversidade e liderança de comunidades.
            </p>
          </div>
        </div>

        {/* Tech Focus */}
        <div className="mx-auto mt-16 max-w-2xl lg:text-center">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-6">
            Áreas de Especialização
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Front-End Engineering",
              "TypeScript",
              "Node.js",
              "React",
              "Inteligência Artificial",
              "MLOps",
              "GenAIOps",
              "UI Engineering",
            ].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-800 hover:bg-indigo-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

