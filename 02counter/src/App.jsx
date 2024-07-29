import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0)

  //let counter = 15

    const addValue = () => {
      setCounter((preCounter) => (preCounter + 1))
      setCounter((preCounter) => (preCounter + 1))
      setCounter((preCounter) => (preCounter + 1))
      setCounter((preCounter) => (preCounter + 1))
      
    }

    const removeValue = () => {
      setCounter(counter - 1)
    }

  return (
    <>
    <center>
    <h1>React Course with Shreelaxmi</h1>
    <h1>Counter value: {counter} </h1>
    <button onClick={addValue}>Add value</button> {" "}
    <button onClick={removeValue}>Remove value</button>
    <p>Footer: </p>
    </center>
    </>
  )
}

export default App


