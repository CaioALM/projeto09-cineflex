import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Filmes from './Filmes';
import Sessao from "./Sessao";


export default function App() {

    return (
        <>
        <BrowserRouter>
                <Header />
            <Routes>
                <Route path="/" element={<Filmes />}/>
                <Route path="/sessao/:idSessao" element={<Sessao />}/>
                {/* <Route path="/sucesso" element={<Sucesso />}/> */}
            </Routes>
      </BrowserRouter>
            
            <Main />
            <Footer />
        </>
        
    )
}

