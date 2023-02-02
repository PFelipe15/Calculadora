import React from 'react';

import './buttonNumber.css'

function ButtonNumber({ value, typeButton }) {
    //typeButton = tecladoNumber || tecladoEqual
    return (
        <button className={typeButton}>
            <span>{value} </span>
        </button >
    )

}

export default ButtonNumber;