import { useState } from 'react'
import './App.css'
import CalculatorApp from './calcFolder/CalculatorApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>A four Function Calculator</h1>
      <CalculatorApp />
    </>
  )
}

export default App
