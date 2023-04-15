import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, SetStateAction } from 'react';

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { header } from '../styles/header.css';

type HeaderProps = {
    switchTheme:Dispatch<SetStateAction<boolean>>;
    isDarkTheme:boolean;
}


function Header(props:HeaderProps) {
    return (
        <>
        <div className={header}>
        <button onClick={() => props.switchTheme((currentValue) => !currentValue)}>
            {props.isDarkTheme ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </button>
        </div>
        </>
    )
}

export default Header;