import React from "react";
import { Link } from "react-router-dom";

import subMenuItem from "./subMenuItem";

type MenuProps = {
    id:number,
    text:string,
    link:string,
    subMenu?:Array<MenuProps>
}


function MenuItem(props:MenuProps) {
    return (
        <li >
            <Link to={props.link}>
            <svg className="icon icon-pie-chart" aria-hidden="true">
                <use xlinkHref="./assets/img/icons/sprite.svg#pie-chart"></use>
            </svg>
            <span className="menu-text">{props.text}</span>
            </Link>
            <ul className="menu-submenu" data-name="Consultation">
                {props.subMenu?.map((props2:MenuProps) => (
                    <li key={props2.id}><span>{props2.text}</span></li>
                ))}
            </ul>
        </li>
    )
}

export default MenuItem
export type {MenuProps}