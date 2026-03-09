import Hero from "./components/hero";
import Featured from "./components/featured";
import HomeHighlights from "./components/HomeHighlights";
// import LogoCloud from "./components/logoCloud";

export default function Home() {
  return (
    <>
      <Hero/>
      <Featured />
      <HomeHighlights />
      {/* <LogoCloud /> */}
    </>
  );
}
