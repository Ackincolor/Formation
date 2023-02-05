import React from "react";

import subMenuItem from "./subMenuItem";

type MenuProps = {
    id:number,
    text:string,
    link:string,
    subMenu?:Array<MenuProps>
}


function MenuItem(props:MenuProps) {
    return (
        <li>
            <a href={props.link}>
            <svg className="icon icon-pie-chart" aria-hidden="true">
                <use xlinkHref="./assets/img/icons/sprite.svg#pie-chart"></use>
            </svg>
            <span className="menu-text">{props.text}</span>
            </a>
            <ul className="menu-submenu" data-name="Consultation">
                {props.subMenu?.map((props:MenuProps) => (
                    <li><span>{props.text}</span></li>
                ))}
            </ul>
        </li>
    )
}

export default MenuItem
export type {MenuProps}