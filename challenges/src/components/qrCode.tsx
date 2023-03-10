import { useState } from "react";
import {QRCodeCanvas} from 'qrcode.react';

import "../assets/css/qrCode.css"

function QrCode() {
    const[url,setUrl] = useState("");

    const availableSize = [
        16, 32, 64, 128, 256, 512, 1024
    ]

    return(
        <>
            <div className="wrapper">
                <div className="urlInput">
                    <input type="text" placeholder="Entre une URL" onChange={(event)=>{setUrl(event.target.value)}}></input>
                    <select>
                        
                    </select>
                </div>
                <div className="qrCodeWrapper">
                    <QRCodeCanvas value={url} />
                </div>
            </div>
        </>
    )
}

export default QrCode;
