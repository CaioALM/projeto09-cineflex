import Filmes from "./Filmes"
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

export default function Main() {

    
    return (
        <div className='Main'>
            <HeaderMain> 
                <p> Selecione o filme </p> 
            </HeaderMain>
            <Filmes >  </Filmes>
            <div className='Horarios'></div>
            <div className="Assento"></div>
            

          
        </div>
    )
}


//--------------------------------------Styled Components ------------------------------------------------------
const HeaderMain = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 375px;
    margin-top: 67px;
    background: #E5E5E5;

p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845;

}

`