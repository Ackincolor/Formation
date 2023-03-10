import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/Layout'
import './App.css'
import Day1 from "./pages/day1"
import Day2 from "./pages/day2"
import Day5 from "./pages/day5"
import Day4 from "./pages/day4"
import Day3 from "./pages/day3"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="Day1" element={<Day1 />}/>
            <Route path="Day2" element={<Day2 />}/>
            <Route path="Day3" element={<Day3 />}/>
            <Route path="Day4" element={<Day4 />}/>
            <Route path="Day5" element={<Day5 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
