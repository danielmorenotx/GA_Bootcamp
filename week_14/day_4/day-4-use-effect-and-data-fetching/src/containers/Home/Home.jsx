import { useState, useEffect } from "react";
import data from "../../data/countryData";
import Country from "../../components/Country/Country";
import "./Home.css"

const Home = ({addToPlanBook, theme}) => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => setCountries(data))
    .catch()
    
    // test data
    // setCountries(data())
  }, [])


  return (
    <main className="main">
      {
        countries.map((country, index) => {
          return (<Country key={index} country={country} addToPlanBook={addToPlanBook} theme={theme}/>)
        })
      }
    </main>
  )
}

export default Home;