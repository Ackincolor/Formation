import React, { Dispatch, SetStateAction } from 'react';

import { darkTheme, lightTheme } from '../styles/theme.css';

type HeaderProps = {
    switchTheme:Dispatch<SetStateAction<boolean>>;
    isDarkTheme:boolean;
}


function Header(props:HeaderProps) {
    return (
        <>
        <div className=''>
            <div>
            <button onClick={() => props.switchTheme((currentValue) => !currentValue)}>
                Switch to {props.isDarkTheme ? "light" : "dark"} theme
            </button>
            </div>
        </div>
        </>
    )
}

export default Header;