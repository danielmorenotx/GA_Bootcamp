import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Plan from "./containers/Plan/Plan";
import Error from "./containers/Error/Error";
import { useState } from "react";
import "./App.css";


const App = () => {
  const [planBook, setPlanBook] = useState([])
  const [theme, setTheme] = useState("light")
  const addToPlanBook = (country) => {
    setPlanBook([...planBook, country])
  }
  return (
    <>
      <Navbar planCount={planBook.length} setTheme={setTheme}/>
      <Routes>
        <Route path="/" element={<Home addToPlanBook={addToPlanBook} theme={theme}/>} />
        <Route path="/plan" element={<Plan planBook={planBook}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
