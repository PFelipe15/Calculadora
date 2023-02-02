import React from 'react';
import ButtonEqual from '../../components/ButtonEqual';
import ButtonNumber from '../../components/ButtonNumber';


import './calculadora.css';

function Calculadora() {
    return <div className='container'>

        <div className="container-calculadora">

            <div className="calculo    ">
                <div className="historico ">
                    <span> 1+1</span>
                </div>
                <div className="resultado   ">
                    <span className='boxLeft  '>= </span>
                    <span className='boxRigth'>2 </span>
                </div>
            </div>
            <div className="teclado">
                <ButtonNumber typeButton={'tecladoNumber'} value={'CE'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'C'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'%'} />
                <ButtonNumber typeButton={'tecladoEqual'} value={'/'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'7'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'C8'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'9'} />
                <ButtonNumber typeButton={'tecladoEqual'} value={'X'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'4'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'5'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'6'} />
                <ButtonNumber typeButton={'tecladoEqual'} value={'-'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'1'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'2'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'3'} />
                <ButtonNumber typeButton={'tecladoEqual'} value={'+'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'+-'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={'0'} />
                <ButtonNumber typeButton={'tecladoNumber'} value={','} />
                <ButtonNumber typeButton={'tecladoEqual'} value={'='} />
            </div>



        </div>
    </div>;
}

export default Calculadora;