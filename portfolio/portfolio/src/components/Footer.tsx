import { useRef } from "react";
import { NavLink } from "react-router-dom";

import { listMenu, listMenuItem, hoverLetter } from "../styles/footer.css";


function Footer() {
    const itemEls = useRef(new Array())

    function handleHover(event:React.MouseEvent){
        console.log(event.target);
        console.log(itemEls.current);
    }

    return (
        <>
            <ul className={listMenu}>
                <li className={listMenuItem}>
                    <NavLink to="/">{"Moi".split('').map((elem, index) => <mark key={elem+'Moi'+index} onMouseEnter={handleHover} ref={(element) => itemEls.current.push(element)} className={hoverLetter}>{elem}</mark>)}</NavLink>
                </li>
                <li className={listMenuItem}>
                    <NavLink to="Parcours">{"Parcours".split('').map((elem, index) => <mark key={elem+'Parcours'+index} ref={(element) => itemEls.current.push(element)} className={hoverLetter}>{elem}</mark>)}</NavLink>       
                </li>
                <li className={listMenuItem}>
                    <NavLink to="Competences">{"Competences".split('').map((elem, index) => <mark key={elem+'Competences'+index} ref={(element) => itemEls.current.push(element)} className={hoverLetter}>{elem}</mark>)}</NavLink>
                </li>
            </ul>
        </>
    )
}
export default Footer;