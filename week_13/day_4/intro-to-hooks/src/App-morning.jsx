import { useState } from 'react'
import './App.css'

const App = () => {
  //useState returns [variable, function]
  const [isDarkMode, setIsDarkMode] = useState(false); // sets variable to 'false'
  console.log('Our isDarkMode state value is:', isDarkMode);

  const [userInfo, setUserInfo] = useState({
    name: "john",
    age: 30,
  });
  console.log(userInfo);

  const [numbers, setNumbers] = useState([10, 20, 30])
  
  return (
        <>
          <h1 className={isDarkMode ? "dark" : "light"}>Hello World!</h1>
          <div>
            <h2>Profile info</h2>
            <h4> Username: {userInfo.name}</h4>
            <h4> Age: {userInfo.age}</h4>
          </div>
          <div>
            <h2>Fav numbers</h2>
            {
              numbers.map((num, i) => {
                return <p key={i}>{num}</p>
              })
            }
          </div>
        </>
      )
}

export default App
