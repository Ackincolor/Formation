import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WeatherBox from './components/weatherBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <WeatherBox/>
    </div>
  )
}

export default App
