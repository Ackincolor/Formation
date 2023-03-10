import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faWater , faWind, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

import img404 from "../assets/img/404.png"
import images from "../assets/img"

import "../assets/css/weatherBox.css"
import React, { useEffect, useRef, useState } from 'react'

type weatherType = {
    main:{
        temp:string,
        humidity:string
    },
    weather:[
        {
            description:string,
            main:keyof typeof images
        }
    ],
    wind: {
        speed:string
    }
}


function WeatherBox() {
    const [searchValue, setSearchValue] = useState("");
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<weatherType>();

    const temperature = useRef<HTMLDivElement>(null);

    let weatherBox;
    let errorBox;
    if(data) {
        weatherBox = <>
        <div className={"weather-box" + (data?" fadeIn":"" )}>
            <img src={images[data.weather[0].main]} />
            <p className="temperature" >{data?.main?.temp} °C</p>
            <p className="description">{data?.weather[0].description}</p>
        </div>

        <div className={"weather-details " + (data?" fadeIn":"" )} >
            <div className="humidity">
                <FontAwesomeIcon icon={faWater} />
                <div className="text">
                    <span> </span>
                    <p>{data?.main.humidity} %</p>
                </div>
            </div>
            <div className="wind">
                <FontAwesomeIcon icon={faWind} />
                <div className="text">
                    <span> </span>
                    <p>{data?.wind.speed} km/h</p>
                </div>
            </div>
        </div>
        </>
    }else{
        weatherBox = <></>
    }

    if(isError){
        errorBox = <div className={"not-found " + (isError ? "fadeIn":"")} >
            <img src={img404} />
            <p>Oops! ville invalide :/</p>
        </div>
    }else {
        errorBox = <></>
    }

    function handleSearch(event:React.MouseEvent){
        const APIKey = 'ee2be0a326d552405f7ff33becaa4e4d';
        const city = searchValue;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if(json.cod==='404'){
                setIsError(true);
                setData(undefined);
            }else{
                console.log(json);
                setIsError(false);
                setData(json);
            }
        })
    }

    return (
        <>
        <div className={"container" + ((data&&!isError)?" big":"" ) +  (isError ? " medium":"")}>
        <div className="search-box">
            <FontAwesomeIcon icon={faLocationDot} />
            <input type="text" value={searchValue} onChange={evt => setSearchValue(evt.target.value)} placeholder="Entrez votre localisation" />
            <button  onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>

        {errorBox}
        {isError ? "":weatherBox }
    </div>
        
        </>
    )
}

export default WeatherBox;