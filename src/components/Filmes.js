import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Filme(props) {

    const [items, setItems] = useState([])

    useEffect(() => {

        const request = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        request.then(response => {
            setItems(response.data)
        })

    },[]);
    return (

        <div className="Filme">
            {items.map(item => <img src={item.posterURL} alt={item.nome} id={item.id}/>)}
        </div>
    )
}