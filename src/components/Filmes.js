import axios from 'axios'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

export default function Filme(props) {

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
            {filmes.map(item => 
                <div id={item.id} onClick={()=> sessao(item.id)}>
                    <img src={item.posterURL} alt={item.nome} id={item.id}/>
                </div>    
            )}
        </ListaFilmes>
    )
}

// -------------------------------------------- Styled Components -----------------------------------------------------------
const ListaFilmes = styled.div`
    width: 375px;
    display: flex;
    flex-wrap: wrap;
    background-color: #E5E5E5;

    img{
    height: 193px;
    width: 129px;
    margin: 27px;
    
}
    img :hover{
        cursor: pointer;
    }
`
