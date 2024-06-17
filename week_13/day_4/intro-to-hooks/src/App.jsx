import { useState } from "react";

import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const[boxStyle, setBoxStyle] = useState("solid-box")

  const handleSayHello = () => {
    console.log("HELLLOOOOOO!");
    alert("HELLLOOOOOO!!!")
  }

  const handleDarkMode = () => {
    console.log("Dark mode");
    setIsDarkMode(true)
  }

  const handleLightMode = () => {
    console.log("Light Mode");
    setIsDarkMode(false)
  }

  const handleToggleBoxStyle = () => {
    setBoxStyle(boxStyle === "solid-box" ? "dashed-box" : "solid-box")
  }

  // const handleDashed = () => {
  //   setIsDashed(true)
  // }

  // const handleSolid= () => {
  //   setIsDashed(false)
  // }

  return (
    <>
      <h1 className={isDarkMode ? "dark" : "light"}>Hello World!</h1>
      
      <button onClick={handleSayHello}> Say hello </button>
      <br />
      <button onClick={handleDarkMode}> Dark Mode </button>
      <button onClick={handleLightMode}> Light Mode </button>

      <div className={`box ${boxStyle}`}>
        box1
      </div>
      <button onClick={handleToggleBoxStyle}> Toggle Box Style </button>
    </>
  );
};

export default App;