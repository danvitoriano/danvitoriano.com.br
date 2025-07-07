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
            Sorteios
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Cadastre-se para participar dos sorteios exclusivos e receber novidades sobre tecnologia, diversidade e eventos.
          </p>
        </div>

        {/* Sorteios Ativos */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
            🎁 Sorteios Ativos
          </h3>
          <p className="text-center text-gray-600 text-sm mb-8">
            Clique no evento desejado para pré-selecionar no formulário
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Codecon Summit 2025 */}
            <div 
              onClick={() => selectEvent('codecon')}
              className={`relative rounded-lg border-2 p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                formData.evento === 'codecon' 
                  ? 'border-indigo-600 bg-indigo-50' 
                  : 'border-gray-200 bg-white hover:border-indigo-300'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">🎟️</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Codecon Summit 2025
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  O maior evento de programação do Brasil
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Clique para participar
                </div>
              </div>
              {formData.evento === 'codecon' && (
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* PrograMaria Summit 2025 */}
            <div 
              onClick={() => selectEvent('programaria')}
              className={`relative rounded-lg border-2 p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                formData.evento === 'programaria' 
                  ? 'border-indigo-600 bg-indigo-50' 
                  : 'border-gray-200 bg-white hover:border-indigo-300'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">👩🏽‍💻</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  PrograMaria Summit 2025
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Empoderamento feminino na tecnologia
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                  Clique para participar
                </div>
              </div>
              {formData.evento === 'programaria' && (
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* World Neurotechnologies Forum */}
            <div 
              onClick={() => selectEvent('wnf')}
              className={`relative rounded-lg border-2 p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                formData.evento === 'wnf' 
                  ? 'border-indigo-600 bg-indigo-50' 
                  : 'border-gray-200 bg-white hover:border-indigo-300'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">🧠</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  World Neurotechnologies Forum
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Futuro das neurotecnologias
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Clique para participar
                </div>
              </div>
              {formData.evento === 'wnf' && (
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div id="formulario-sorteios" className="mx-auto mt-16 max-w-xl sm:mt-20">
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
                    <strong>Evento selecionado:</strong> {
                      formData.evento === 'codecon' ? '🎟️ Codecon Summit 2025' :
                      formData.evento === 'programaria' ? '👩🏽‍💻 PrograMaria Summit 2025' :
                      formData.evento === 'wnf' ? '🧠 World Neurotechnologies Forum' : ''
                    }
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
                      Obrigado por se cadastrar! Você receberá informações sobre os sorteios em seu email.
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
                  <input
                    id="cargo"
                    name="cargo"
                    type="text"
                    required
                    value={formData.cargo}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    placeholder="Seu cargo atual"
                  />
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
                    <option value="codecon">🎟️ Codecon Summit 2025</option>
                    <option value="programaria">👩🏽‍💻 PrograMaria Summit 2025</option>
                    <option value="wnf">🧠 World Neurotechnologies Forum (WNF)</option>
                  </select>
                </div>
                {formData.evento && (
                  <div className="mt-2 text-xs text-indigo-600">
                    ✓ Evento selecionado: {
                      formData.evento === 'codecon' ? '🎟️ Codecon Summit 2025' :
                      formData.evento === 'programaria' ? '👩🏽‍💻 PrograMaria Summit 2025' :
                      formData.evento === 'wnf' ? '🧠 World Neurotechnologies Forum' : ''
                    }
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
                  {isSubmitting ? "Enviando..." : "Participar dos Sorteios"}
                </button>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Ao se cadastrar, você concorda em receber emails sobre sorteios e novidades. 
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