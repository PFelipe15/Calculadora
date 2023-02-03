import React from 'react';
import Button from '../../components/Button';
import { useState } from 'react';
import { useContext } from 'react';
import './calculadora.css';
import { CalculadoraContext } from '../../contexts/CalculadoraContext';

function Calculadora() {
    const { displayValue,

        historyValue,
    } = useContext(CalculadoraContext)


    return (
        <div className='container'>

            <div className="container-calculadora">

                <div className="calculo    ">
                    <div className="historico ">
                        <span > {historyValue}</span>
                    </div>
                    <div className="resultado">
                        <span className='boxLeft  '>= </span>
                        <span className='boxRigth'> {displayValue} </span>
                    </div>
                </div>
                <div className="teclado">
                    <Button typeButton={'tecladoNumber'} value={'CE'} color={'#975DFA'} />
                    <Button typeButton={'tecladoNumber'} value={'C'} />
                    <Button typeButton={'tecladoNumber'} value={'%'} />
                    <Button typeButton={'tecladoEqual'} value={'/'} />
                    <Button typeButton={'tecladoNumber'} value={'7'} />
                    <Button typeButton={'tecladoNumber'} value={'8'} />
                    <Button typeButton={'tecladoNumber'} value={'9'} />
                    <Button typeButton={'tecladoEqual'} value={'X'} />
                    <Button typeButton={'tecladoNumber'} value={'4'} />
                    <Button typeButton={'tecladoNumber'} value={'5'} />
                    <Button typeButton={'tecladoNumber'} value={'6'} />
                    <Button typeButton={'tecladoEqual'} value={'-'} />
                    <Button typeButton={'tecladoNumber'} value={'1'} />
                    <Button typeButton={'tecladoNumber'} value={'2'} />
                    <Button typeButton={'tecladoNumber'} value={'3'} />
                    <Button typeButton={'tecladoEqual'} value={'+'} />
                    <Button typeButton={'tecladoNumber'} value={'+-'} />
                    <Button typeButton={'tecladoNumber'} value={'0'} />
                    <Button typeButton={'tecladoNumber'} value={','} />
                    <Button typeButton={'tecladoEqual'} value={'='} background="#7F45E2" />
                </div>

            </div>
        </div>
    )
}

export default Calculadora;