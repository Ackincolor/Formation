import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/Layout';
import Competences from './pages/Competences';
import Moi from './pages/Moi';
import Parcours from './pages/Parcours';

import "./styles/global.css";
import "./App.css"

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div id="app" >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Moi/>} />
            <Route path="Parcours" element={<Parcours />} />
            <Route path="Competences" element={<Competences />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
