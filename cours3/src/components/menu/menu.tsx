import React from 'react';

import MenuItem from './menuItem'
import { MenuProps } from './menuItem';                                                                                                              

import {menuItems} from './menuItems.js';

import '../../assets/sass/style.scss'

import sprite from '../../assets/img/icons/sprite.svg';

import $ from 'jquery';
import '../../assets/js/menu'

function Menu() {
    return(
        <div className="sidebar">
             <svg className="icon" aria-hidden="true">
                <use xlinkHref="./assets/img/icons/sprite.svg#delubac-logo"></use>
            </svg>
            <div className="sidebar-wrapper">
                <ul className="sidebar-menu">
                    {menuItems.map((props:MenuProps) => (
                        <MenuItem key={props.id}
                            {...props}
                        />
                    ))}
                </ul>
            </div>
            <div className="mt-auto text-center">
                <button type="button" className="sidebar-close js-sidebarToggler">
                    <svg className="icon icon-reduce-angle-left" aria-hidden="true">
                    <use xlinkHref={`${sprite}#reduce-angle-left`}></use>
                    </svg>
                    <span className="menu-text">Réduire le menu</span>
                </button>
            </div>
        </div>
    )
}

export default Menu