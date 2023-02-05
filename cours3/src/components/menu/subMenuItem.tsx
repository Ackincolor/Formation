import React from "react"

function subMenuItem(props:any){
    return(
        <li>
            <a href="mouvements-previsionnels.html"><span className="menu-text">{props.text}</span></a>
        </li>
    )
}
export default subMenuItem