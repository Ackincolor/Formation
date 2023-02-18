import { useState } from 'react';


import {fond, chipimage, typecard} from '../../assets/img/card'

import './style.css'
function CardViewer() {

    let CardInfo = {
        cvv :"562",
        cardNumber : "1456 3216 4565 7945",
        name : "L GUILLET-ANDRE",
        expireMonth : "12",
        expireYear :"24",
        type: "visa",
        background:5
    }

    let [showCvv,setShowCvv] = useState(false);

    function handleCvv() {
        setShowCvv(current => !current);
    }


    return(
        <>
        <div className={showCvv ? "card-item -active" : "card-item"} >
            <div className="card-item__side -front">
            <div className="card-item__cover">
              <img
              src={fond[1]} className="card-item__bg" />
            </div>

            <div className="card-item__wrapper">
              <div className="card-item__top">
                <img src={chipimage.chip} className="card-item__chip" />
                <div className="card-item__type">
                    <img src={typecard.visa}  alt="" className="card-item__typeImg" />
                </div>
              </div>
              <label htmlFor="cardNumber" className="card-item__number" >
                        {CardInfo.cardNumber.split('').map(c => <span><div className={c==' ' ? "card-item__numberItem -active": "card-item__numberItem"}>{c}</div></span>)}
              </label>
              <div className="card-item__content">
                <label htmlFor="cardName" className="card-item__info" >
                  <div className="card-item__holder">Card Holder</div>
                    <div className="card-item__name" key="1">
                    </div>
                    <div className="card-item__name" >{CardInfo.name}</div>
                </label>
                <div className="card-item__date" >
                  <label htmlFor="cardMonth" className="card-item__dateTitle">Expires</label>
                  <label htmlFor="cardMonth" className="card-item__dateItem">
                      <span >{CardInfo.expireMonth}</span>
                  </label>
                  /
                  <label htmlFor="cardYear" className="card-item__dateItem">
                      <span >{CardInfo.expireYear}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-item__side -back">
            <div className="card-item__cover">
              <img
              src={fond[1]} className="card-item__bg" />
            </div>
            <div className="card-item__band"></div>
            <div className="card-item__cvv">
                <div className="card-item__cvvTitle">cvv</div>
                <div className="card-item__cvvBand">
                  <span>
                  {CardInfo.cvv}
                  </span>

              </div>
                <div className="card-item__type">
                    <img src={typecard.visa} className="card-item__typeImg" />
                </div>
            </div>
          </div>
        </div>
        <div className='mt-20 w-100'>
            <button className="btn btn-ghost btn-md" onClick={handleCvv}>
                code cvv ?
            </button>
        </div>
        </>
    )
}

export default CardViewer;
