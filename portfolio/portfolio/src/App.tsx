import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { darkTheme, lightTheme } from './styles/theme.css';
import Header from './components/Header'

import { sprinkles } from "./styles/sprinkles.css";
import "./styles/global.css";
import Cv from './components/Cv';
import CvItem from './components/CvItem';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div id="app" className={isDarkTheme ? darkTheme : lightTheme}>
      <Header switchTheme={setIsDarkTheme} isDarkTheme={isDarkTheme}></Header>
      <Cv>
        <CvItem title="Etudes" image="" content="Iut Senart Fontainbleau puis écoles d'ingenieur en system d'information" period='2014-2020'></CvItem>
        <CvItem title="Dirisi" image="" content="Chef de projet pour de l'integration sur ServiceNow" period='2020-2022'></CvItem>
        <CvItem title="Elcimai" image="" content='Devbeloppeur web Fulstack' period='2022-NOW'></CvItem>
        <CvItem title="test" image="" content='je suis le contenu' period='2014-2019'></CvItem>
      </Cv>
    </div>
  )
}

export default App
