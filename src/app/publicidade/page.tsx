import BrandsCloud from "../components/brandsCloud";
import Featured from "../components/featured";

export default function Publicidade() {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-5xl pb-8 font-bold tracking-tight text-gray-900">Publicidade</h1>
          <p className="text-lg leading-8 text-gray-600 max-w-3xl">
            Como criador de conteúdo tech, ajudo marcas a conectar-se com um público 
            qualificado de desenvolvedores e profissionais de tecnologia através de 
            parcerias autênticas e conteúdo de valor.
          </p>
        </div>
      </div>
      <BrandsCloud />
    </>
  );
}
