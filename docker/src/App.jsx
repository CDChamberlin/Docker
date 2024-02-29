import { useState } from 'react'
import './App.css'
import CalculatorApp from './calcFolder/CalculatorApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalculatorApp />
    </>
  )
}

export default App
