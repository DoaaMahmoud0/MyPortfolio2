import { useEffect, useState } from "react";
import "./Header.css";
const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentValue")  ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
    else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  });
  return (
    <header className="flex">
      <button
        onClick={() => setShowModel(true)}
        className="menu icon-menu flex"></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articals</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {

// Send value to LS
localStorage.setItem("currentValue", theme ==="dark"? "light" : "dark")

// Get value from LS
setTheme(localStorage.getItem("currentValue"));




}}
        className="mood flex ">

          {theme==="dark" ? (<span className="icon-moon-o"></span>):
            (<span className="icon-sun"></span>)}

        
      </button>


      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModel(false)}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articals</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
