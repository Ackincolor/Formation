import { useState } from "react";
import {QRCodeCanvas} from 'qrcode.react';

import "../assets/css/qrCode.css"

function QrCode() {
    const[url,setUrl] = useState("");
    const[size, setSize] = useState(16);

    const availableSize = [
        16, 32, 64, 128, 256, 512, 1024
    ]

    return(
        <>
            <div className="wrapper">
                <div className="urlInput">
                    <input type="text" placeholder="Entre une URL" onChange={(event)=>{setUrl(event.target.value)}}></input>
                </div>
                <div className="urlInput">
                    <select onChange={(event) => {setSize(parseInt(event.target.value))}}>
                        {availableSize.map(size => 
                            <>
                            <option value={size}>{size}x{size}</option>
                            </>
                        )}
                    </select>
                </div>
                <div className="qrCodeWrapper">
                    <QRCodeCanvas value={url} size={size} level="L"/>
                </div>
            </div>
        </>
    )
}

export default QrCode;
