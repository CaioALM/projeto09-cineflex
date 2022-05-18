import Filmes from "./Filmes"
import { useState } from 'react';
import axios from 'axios';

export default function Main() {

    
    return (
        <div className='Main'>
            <div className='HeaderMain'> 
                <p> Selecione o filme </p> 
            </div>
            <div className='ListaFilmes'></div>
            <div className='Horarios'></div>
            <div className="Assento"></div>
            <Filmes>

            </Filmes>
            <Filmes id={1} nome={'Enola Holmes'} url={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"}/>
        </div>
    )
}