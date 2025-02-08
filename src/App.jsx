import { useEffect, useState } from "react";
import Header from "./Component/1-Header/Header";
import Hero from "./Component/2-Hero/Hero";
import Main from "./Component/3-Main/Main";
import Contact from "./Component/4-Contact/Contact";
import Footer from "./Component/5-Footer/Footer";
import About from "./Component/3-About/About";

function App() {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  });
  return (
    <div className="container" id="up">
      <Header />

      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />

      <Main />
      <div className="divider" />

      <Contact />
      <div className="divider" />

      <Footer />

      <a href="#up">
        <button
          style={{ opacity: showBtn ? 1 : 0, transition: "1s" }}
          className="icon-keyboard_arrow_up scrol2top"></button>
      </a>
    </div>
  );
}

export default App;
