import "./Hero.css";
import Animation from "../../../src/animation/Animation3.json";
import Lottie from "lottie-react";
import { useRef } from "react";


const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex ">
          <img className="avatar" src="1.jpg" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">I&apos;m Doaa Mahmoud, Frontend Developer</h1>
        <p className="sub-title">
          As a passionate and detail-oriented Frontend Developer, I specialize
          in creating responsive, user-friendly websites and applications.
        </p>
        <div className="icons flex">
          <div className="icon-linkedin icon"></div>
          <div className="icon-github icon"></div>
          <div className="icon-instagram icon"></div>
          <div className="icon-twitter icon"></div>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie  lottieRef={lottieRef} 
        onLoadedImages={() => {
          lottieRef.current.setSpeed(0.5);
        }
        }
          animationData={Animation}
        />
      </div>
    </section>
  );
};

export default Hero;
