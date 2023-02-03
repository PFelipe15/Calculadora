import React from 'react';

import './button.css'
import { useContext } from 'react';
import { CalculadoraContext } from '../../contexts/CalculadoraContext';
function Button({ ...props }) {
    //typeButton = tecladoNumber || tecladoEqual
    const { typeButton, value, color, background } = props
    const { displayValue,
        setDisplayValue,
        historyValue,
        setHistoryValue,

    } = useContext(CalculadoraContext)

    function handleClick(value) {
        if (value === 'X') {
            value = '*'
        }
        if (value === ',') {
            value = '.'
        }

        setDisplayValue(displayValue.concat(value))

        if (value === 'CE') {
            setDisplayValue('')
            setHistoryValue('')
        }

        if (value === '=') {

            try {

                setDisplayValue(eval(displayValue).toString())
                setHistoryValue(displayValue)
            } catch (error) {
                setDisplayValue('Error')

            }
        }




    }
    return (
        <button className={typeButton} style={{ background: background }} onClick={() => { handleClick(value) }}   >
            <span style={{ color: color }}>{value} </span>
        </button >
    )

}

export default Button;