import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/Layout'
import './App.css'
import Day1 from "./pages/day1"
import Day2 from "./pages/day2"
import Day5 from "./pages/day5"
import Day4 from "./pages/day4"
import Day3 from "./pages/day3"
import Day6 from "./pages/day6"
import Day7 from "./pages/day7"
import Day8 from "./pages/day8"

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
            <Route path="Day6" element={<Day6 />}/>
            <Route path="Day7" element={<Day7 />}/>
            <Route path="Day8" element={<Day8 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
