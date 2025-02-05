import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Main.css";

const Main = () => {
  const myprojects = [
    { projectTitle: "Landing Page", category: "react", imgPath: "2.png" },
    { projectTitle: "Landing Page", category: "react", imgPath: "3.png" },
    { projectTitle: "Landing Page", category: "css", imgPath: "4.png" },
    { projectTitle: "Landing Page", category: "css", imgPath: "PSD.png" },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/1.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/3.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/5.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/6.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/7.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/8.jpg",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/b.png",
    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/q.png",
    },
  ];
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myprojects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArr = myprojects.filter((items) => {
      return items.category === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myprojects);
          }}
          className={currentActive === "all" ? "active" : null}>
          All Projects
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}>
          React
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}>
          HTML & CSS
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((items) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale:0" }}
                animate={{ transform: "scale:1" }}
                transition={{type: "spring" , damping:8, stiffness:50}}
                key={items.imgPath}
                className="card">
                <img width={210} src={items.imgPath} />

                <div style={{ width: "210px" }} className="box">
                  <h1 className="title">{items.projectTitle}</h1>
                  <p className="sub-title">
                    The medical services landing page is designed for a smooth
                    user experience, offering easy navigation for booking
                    appointments and exploring services. Its clean, responsive
                    layout ensures accessibility across all devices for optimal
                    convenience.
                  </p>

                  <div className="icons flex">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>
                    <a className="link flex" href="">
                      More
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
