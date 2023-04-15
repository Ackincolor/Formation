import { Outlet } from "react-router-dom";
import "css-doodle";

import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { darkTheme, lightTheme } from '../styles/theme.css';
import Doodle from "./Doodle";
import LeftFrame from "./LeftFrame";


function Layout() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    return (
        <>
        <div id="mainContainer" className={isDarkTheme ? darkTheme : lightTheme}>
            <LeftFrame></LeftFrame>
            <div id="mainFrame">
                <Header switchTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
                <Outlet />
            </div>
        </div>
        <Doodle rule={`
                :doodle {
                @grid: 18 / 100vmax;
                background: #0a0c27;
                }
                --hue: calc(0 );
                background: hsl(var(--hue), 50%, 70%);
                margin: -.5px;
                transition: @r(.5s) ease;
                clip-path: polygon(@pick(
                '0 0, 100% 0, 100% 100%',
                '0 0, 100% 0, 0 100%',
                '0 0, 100% 100%, 0 100%',
                '100% 0, 100% 100%, 0 100%'
                ));`
            }/>
        </>
    )
}
export default Layout;