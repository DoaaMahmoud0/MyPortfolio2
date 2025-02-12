import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Main.css";

const Main = () => {
  const myprojects = [
    {
      projectTitle: "Portfolio",
      category: "react",
      imgPath: "2.png",
      link: "https://myportfolio-livid-rho.vercel.app/",
      github: "https://github.com/DoaaMahmoud0/MyPortfolio2",
      subTitle: "This project showcases a personal portfolio website where I present my web development skills and projects. The website is built using a combination of HTML, CSS, JavaScript, and React, aiming to provide a clean and interactive user experience.",

    },
    {
      projectTitle: "Portfolio",
      category: "react",
      imgPath: "3.png",
      link: "my-portfolio2-navy.vercel.app",
      github: "https://github.com/DoaaMahmoud0/MyPortfolio2",
      subTitle: "This project showcases a personal portfolio website where I present my web development skills and projects. The website is built using a combination of HTML, CSS, JavaScript, and React, aiming to provide a clean and interactive user experience.",

    },
    {
      projectTitle: "Restaurant Website",
      category: "css",
      imgPath: "4.png",
      link: "https://doaamahmoud0.github.io/little-lemon/",
      github: "https://github.com/DoaaMahmoud0/little-lemon",
      subTitle: "This project is a fully functional website designed for a restaurant, built using HTML, CSS, JavaScript, and React. The goal was to create an engaging, user-friendly platform where customers can explore the restaurant’s menu, view the ambiance, and easily make reservations"

    },
    {
      projectTitle: "Landing Page",
      category: "css",
      imgPath: "PSD.png",
      link: "https://doaamahmoud0.github.io/LandingPage/",
      github: "https://github.com/DoaaMahmoud0/LandingPage",
      subTitle: "The medical services landing page is designed for a smooth user experience, offering easy navigation for booking appointments and exploring services. Its clean, responsive layout ensures accessibility across all devices for optimal convenience."

    },
    {
      projectTitle: "Courses Website ",
      category: "css",
      imgPath: "./imgs/9.png",
      link: "https://doaamahmoud0.github.io/Nouvil/",
      github: "https://github.com/DoaaMahmoud0/Nouvil",
      subTitle:"This project is a fully functional Online Courses Website designed to provide users with an easy-to-navigate platform to browse, register, and learn from a wide variety of online courses. Built with HTML and CSS, the website offers a dynamic and engaging user experience for both students and instructors."

    },
    {
      projectTitle: "Coffe Website",
      category: "react",
      imgPath: "./imgs/1.jpg",
      subTitle: "This project is a fully functional website , built using HTML, CSS, JavaScript, and React. The goal was to create an engaging, user-friendly platform where customers can explore the menu, view the ambiance, and easily make orders"

    },
    {
      projectTitle: "Shoes Website",
      category: "react",
      imgPath: "./imgs/3.jpg",
      subTitle: "This project is a fully functional website , built using HTML, CSS, JavaScript, and React. The goal was to create an engaging, user-friendly platform where customers can explore the menu, view the ambiance, and easily make orders"

    },
    {
      projectTitle: "Cars Website",
      category: "react",
      imgPath: "./imgs/5.jpg",
      subTitle: "This project is a fully functional website , built using HTML, CSS, JavaScript, and React. The goal was to create an engaging, user-friendly platform where customers can explore the menu, view the ambiance, and easily make orders"

    },
    {
      projectTitle: "Portfolio",
      category: "react",
      imgPath: "./imgs/6.jpg",
      subTitle: "This project showcases a personal portfolio website where I present my web development skills and projects. The website is built using a combination of HTML, CSS, JavaScript, and React, aiming to provide a clean and interactive user experience.",

    },
    {
      projectTitle: "Furniture Website",
      category: "react",
      imgPath: "./imgs/7.jpg",
      subTitle: "This project is a fully functional website , built using HTML, CSS, JavaScript, and React. The goal was to create an engaging, user-friendly platform where customers can explore the menu, view the ambiance, and easily make orders"

    },
    {
      projectTitle: "Landing Page",
      category: "react",
      imgPath: "./imgs/8.jpg",
      subTitle: "This project is a fully functional Landing Page, built using HTML, CSS, JavaScript, and React. The goal was to create an engaging, user-friendly platform where customers can explore the menu, view the ambiance, and easily make orders"

    },
    {
      projectTitle: "Watches Website",
      category: "react",
      imgPath: "./imgs/b.png",
      subTitle: "This project is a fully functional website , built using HTML, CSS, JavaScript, and React. The goal was to create an engaging, user-friendly platform where customers can explore the menu, view the ambiance, and easily make orders"

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
    <main className="flex" id="Projects">
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
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={items.imgPath}
                className="card">
                <img width={210} src={items.imgPath} />

                <div style={{ width: "210px" }} className="box">
                  <h1 className="title">{items.projectTitle}</h1>
                  <p className="sub-title">
                   {items.subTitle}
                  </p>

                  <div className="icons flex">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        href={items.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        {" "}
                        <div className="icon-link"></div>
                      </a>
                      <a
                        href={items.github}
                        target="_blank"
                        rel="noopener noreferrer">
                        {" "}
                        <div className="icon-github"></div>
                      </a>
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
