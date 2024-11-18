import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import BemVindo from "../Components/BemVindo"
import Usuario from "../Components/Usuario";
import ProdutosCadastrados from "../Components/ProdutosCadastrados";
import HistoricoProdutos from "../Components/HistoricoProdutos";
import DeletarConta from "../Components/DeletarConta";
import Footer from "../Components/Footer";
import { useApiUrl } from "../context/ApiContext";
import axios from 'axios'

function PaginaUsuario(){
    const [userData, setUserData] = useState({})
    const apiUrl = useApiUrl();

    useEffect(() => {
        const fetchUserData = () => {
            const token = localStorage.getItem('token');
        
            if (token) {
              axios.get(`${apiUrl}/users/data`, { // Rota para obter o nome do usuário
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .then(response => {
                setUserData(response.data[0]); // Define o nome do usuário no estado
              })
              .catch(error => {
                console.error('Erro ao obter nome do usuário:', error);
              });
            }
        }
        fetchUserData();
    }, []); // Executa o efeito apenas uma vez, quando o componente é montado

    return(
        <div>
            <Navbar/>
            <BemVindo user={userData.nome_usuario}/>
            <Usuario user={userData}/>
            <ProdutosCadastrados user={userData.CPF}/>
            {/* <HistoricoProdutos user={userData.CPF}/> */}
            <DeletarConta user={userData.CPF}/>
            <Footer/>
        </div>
    )
}

export default PaginaUsuario