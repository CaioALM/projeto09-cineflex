import axios from 'axios'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Sessao from './Sessao'
import { Link } from 'react-router-dom'


export default function Filmes() {

    const [filmes, setFilmes] = useState([])
    const [id, setId] = useState([])

    useEffect(() => {

        const request = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        request.then(response => {
            setFilmes(response.data)
        })

    },[]);
    return (
        <ListaFilmes>
            <div className='Main'>
                <HeaderMain> 
                    <p> Selecione o filme </p> 
                </HeaderMain>
                <Filmes >  
                    {/* {filmes.map(item => 
                    <Link to={`/sessao/${item.id}`}> 
                        <div>
                        <img src={item.posterURL} alt={item.nome} id={item.id}/>
                        </div>   
                    
                    </Link>
                        
                    )} */}
                </Filmes>
            </div>
        </ListaFilmes>
    )
}

// --------------------------------------------Styled Components -----------------------------------------------------------
const ListaFilmes = styled.div`
    width: 375px;
    display: flex;
    flex-wrap: wrap;
    background-color: #E5E5E5;

    img{
    height: 193px;
    width: 129px;
    margin: 27px;
    cursor: pointer
}
    img :hover{
        cursor: pointer;
    }
`

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