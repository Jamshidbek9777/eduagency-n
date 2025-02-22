import { Element } from "react-scroll";
import Cards from "./components/cards";
import HeroSection from "./components/hero";
import Numbers from "./components/numbers";
import Partners from "./components/partners";
import Services from "./components/services";
import Why from "./components/why";
import Xizmatlar from "./components/xizmatlar";
import Comments from "./components/comments";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <h1>Salom</h1>
        <HeroSection />
        <Numbers />
        <Cards />
        <Why />
        <Element name="services">
          <Services />
        </Element>
        <Element name="xizmatlar">
          <Xizmatlar />
        </Element>
        <Element name="comments">
          <Comments />
        </Element>
        <Partners />
      </div>
    </>
  );
}

export default App;
