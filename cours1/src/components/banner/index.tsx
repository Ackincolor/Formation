import React from 'react';
import './Banner.css'

import logo from '../../assets/img/logo.png'

function Banner() {
    const title = "La maison jungle"
    return (
        <div className='banner'>
            <img src = {logo} alt='lguillet' className='logo' />
            <h1 className='title'>{title}</h1>
        </div>
    )
}

export default Banner;
