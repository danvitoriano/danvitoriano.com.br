"use client";

import { useState } from "react";

export default function Sorteios() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    empresa: "",
    cargo: "",
    genero: "",
    evento: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const selectEvent = (eventValue: string) => {
    setFormData({
      ...formData,
      evento: eventValue
    });
    // Scroll suave para o formulário
    document.getElementById('formulario-sorteios')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/sorteios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          cpf: formData.cpf,
          empresa: formData.empresa,
          cargo: formData.cargo,
          genero: formData.genero,
          evento: formData.evento
        })
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", cpf: "", empresa: "", cargo: "", genero: "", evento: "" });
      } else {
        throw new Error(result.error || 'Erro ao enviar formulário');
      }
      
    } catch (error) {
      setError('Erro ao enviar os dados. Tente novamente.');
      console.error('Erro:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Participe
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sorteio TDC Summit São Paulo 2026
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Cadastre-se para participar do sorteio de ingressos para o TDC Summit São Paulo 2026 e receber novidades sobre tecnologia e eventos.
          </p>
        </div>

        {/* Sorteios Ativos */}
        <div className="mx-auto mt-16 max-w-2xl">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
            🎁 Sorteio Ativo
          </h3>
          <p className="text-center text-gray-600 text-sm mb-8">
            Clique no evento para pré-selecionar no formulário
          </p>
          
          <div className="flex justify-center">
            {/* The Developers Conference São Paulo */}
            <div 
              onClick={() => selectEvent('tdc-sp')}
              className={`relative rounded-lg border-2 p-8 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 max-w-md w-full ${
                formData.evento === 'tdc-sp' 
                  ? 'border-indigo-600 bg-indigo-50' 
                  : 'border-gray-200 bg-white hover:border-indigo-300'
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">🖥️</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  The Developers Conference São Paulo
                </h4>
                <p className="text-base text-gray-600 mb-2">
                  O maior evento de desenvolvimento do Brasil
                </p>
                <p className="text-sm text-indigo-600 font-semibold mb-4">
                  Abril de 2026
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Clique para participar
                </div>
              </div>
              {formData.evento === 'tdc-sp' && (
                <div className="absolute top-3 right-3">
                  <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>


        <div id="formulario-sorteios" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="my-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>📋 Importante:</strong> Todos os campos são obrigatórios para participar dos sorteios.
            </p>
          </div>
          {formData.evento && (
            <div className="mb-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
              <div className="flex items-center">
                <div className="text-indigo-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-indigo-800">
                    <strong>Evento selecionado:</strong> 🖥️ The Developers Conference São Paulo - Abril de 2026
                  </p>
                </div>
              </div>
            </div>
          )}
          {isSubmitted ? (
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Cadastro realizado com sucesso!
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>
                      Obrigado por se cadastrar! Você receberá informações sobre o sorteio em seu email.
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="bg-green-100 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Fazer novo cadastro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome completo
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Celular
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">
                  CPF
                </label>
                <div className="mt-2">
                  <input
                    id="cpf"
                    name="cpf"
                    type="text"
                    required
                    value={formData.cpf}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    placeholder="000.000.000-00"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium leading-6 text-gray-900">
                  Empresa
                </label>
                <div className="mt-2">
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cargo" className="block text-sm font-medium leading-6 text-gray-900">
                  Cargo
                </label>
                <div className="mt-2">
                  <select
                    id="cargo"
                    name="cargo"
                    required
                    value={formData.cargo}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  >
                    <option value="">Selecione seu cargo</option>
                    <option value="desenvolvedor-frontend">Desenvolvedor Frontend</option>
                    <option value="desenvolvedor-backend">Desenvolvedor Backend</option>
                    <option value="desenvolvedor-fullstack">Desenvolvedor Full Stack</option>
                    <option value="desenvolvedor-mobile">Desenvolvedor Mobile</option>
                    <option value="engenheiro-software">Engenheiro de Software</option>
                    <option value="arquiteto-software">Arquiteto de Software</option>
                    <option value="tech-lead">Tech Lead</option>
                    <option value="engenheiro-devops">Engenheiro DevOps</option>
                    <option value="sre">Site Reliability Engineer (SRE)</option>
                    <option value="data-scientist">Data Scientist</option>
                    <option value="data-engineer">Data Engineer</option>
                    <option value="data-analyst">Data Analyst</option>
                    <option value="ml-engineer">Machine Learning Engineer</option>
                    <option value="analista-sistemas">Analista de Sistemas</option>
                    <option value="product-manager">Product Manager</option>
                    <option value="product-owner">Product Owner</option>
                    <option value="scrum-master">Scrum Master</option>
                    <option value="agile-coach">Agile Coach</option>
                    <option value="ux-designer">UX Designer</option>
                    <option value="ui-designer">UI Designer</option>
                    <option value="ux-ui-designer">UX/UI Designer</option>
                    <option value="designer-produto">Designer de Produto</option>
                    <option value="qa-engineer">QA Engineer</option>
                    <option value="qa-analyst">QA Analyst</option>
                    <option value="teste-automatizado">Analista de Teste Automatizado</option>
                    <option value="security-engineer">Security Engineer</option>
                    <option value="cybersecurity-analyst">Cybersecurity Analyst</option>
                    <option value="cloud-engineer">Cloud Engineer</option>
                    <option value="solutions-architect">Solutions Architect</option>
                    <option value="dba">Database Administrator (DBA)</option>
                    <option value="it-support">Suporte de TI</option>
                    <option value="infrastructure-engineer">Infrastructure Engineer</option>
                    <option value="network-engineer">Network Engineer</option>
                    <option value="cto">CTO</option>
                    <option value="head-engineering">Head of Engineering</option>
                    <option value="engineering-manager">Engineering Manager</option>
                    <option value="tech-recruiter">Tech Recruiter</option>
                    <option value="business-analyst">Business Analyst</option>
                    <option value="marketing-tech">Marketing Tech</option>
                    <option value="growth-hacker">Growth Hacker</option>
                    <option value="freelancer">Freelancer</option>
                    <option value="consultor">Consultor</option>
                    <option value="empreendedor">Empreendedor</option>
                    <option value="estudante">Estudante</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="genero" className="block text-sm font-medium leading-6 text-gray-900">
                  Gênero
                </label>
                <div className="mt-2">
                  <select
                    id="genero"
                    name="genero"
                    required
                    value={formData.genero}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  >
                    <option value="">Selecione seu gênero</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="nao-binario">Não binário</option>
                    <option value="prefiro-nao-informar">Prefiro não informar</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="evento" className="block text-sm font-medium leading-6 text-gray-900">
                    Evento
                  </label>
                  {formData.evento && (
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, evento: ""})}
                      className="text-xs text-gray-500 hover:text-gray-700 underline"
                    >
                      Limpar seleção
                    </button>
                  )}
                </div>
                <div className="mt-2">
                  <select
                    id="evento"
                    name="evento"
                    required
                    value={formData.evento}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  >
                    <option value="">Selecione o evento</option>
                    <option value="tdc-sp">🖥️ The Developers Conference São Paulo - Abril de 2026</option>
                  </select>
                </div>
                {formData.evento && (
                  <div className="mt-2 text-xs text-indigo-600">
                    ✓ Evento selecionado: 🖥️ The Developers Conference São Paulo - Abril de 2026
                  </div>
                )}
              </div>

              {error && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="text-sm text-red-700">{error}</div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Participar do Sorteio"}
                </button>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Ao se cadastrar, você concorda em receber emails sobre o sorteio e novidades. 
                  Você pode cancelar a qualquer momento.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
} 