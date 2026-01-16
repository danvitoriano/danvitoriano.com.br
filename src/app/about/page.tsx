import Ods from "../components/ods";
import Purpose from "./../components/Purpose";
import Featured from "./../components/featured";
import Journey from "./../components/journey";
import Recognition from "./../components/recognition";

const purposeData = {
  id: "proposito",
  topic: "Propósito",
  titulo: "Diversidade e inovação no mercado tech",
  content: "A diversidade é essencial para o crescimento e a inovação do mercado de tecnologia. Ao promover um ambiente inclusivo e acolhedor para todos, as empresas podem atrair e reter os melhores talentos, impulsionar a criatividade e alcançar melhores resultados. Minha própria trajetória, começando na tecnologia após os 35 anos, é prova de que nunca é tarde para recomeçar e fazer a diferença.",
};

export default function Sobre() {
  return (
    <>
      <Featured titulo="Quem é Dan Vitoriano" />
      <Journey />
      <Purpose id={purposeData.id} topic={purposeData.topic} titulo={purposeData.titulo} content={purposeData.content}  />
      <Recognition />
      <Ods />
    </>
  );
}
