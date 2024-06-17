import { useState } from "react"

const NumberExample = () => {

  const [numbers, setNumbers] = useState([10, 20, 30])

  const addNumber = (num) => {
    const randomNumber = Math.random()

    setNumbers([...numbers, randomNumber])
  }

  return (
    <>
      <h2>My Numbers</h2>
      <ul>
        {
          numbers.map((num, i) => {
            return <li key={i}>{num}</li>
          })
        }
      </ul>
      <button onClick={addNumber}> add number</button>
    </>
  )
}

export default NumberExample