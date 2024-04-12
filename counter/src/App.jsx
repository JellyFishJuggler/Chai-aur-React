import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count, setCounter] = useState(0)

  // let count = 5
  const addValue = () => {
    count = count + 1;
    console.log("Cicked", count);
    setCounter(count);
  }
  const removeValue = () => {
    count = count - 1;
    setCounter(count);
  }

  return (
    <>
      <h1>Chai aur React | Srijan Anand Gupta</h1>
      <h2>Count: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
