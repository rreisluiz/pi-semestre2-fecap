import React from "react";
import Navbar from "../Components/Navbar";
import BemVindo from "../Components/BemVindo"
import Usuario from "../Components/Usuario";
import ProdutosCadastrados from "../Components/ProdutosCadastrados";
import HistoricoProdutos from "../Components/HistoricoProdutos";
import DeletarConta from "../Components/DeletarConta";
import Footer from "../Components/Footer";

function PaginaUsuario(){
    return(
        <div>
            <Navbar/>
            <BemVindo/>
            <Usuario/>
            <ProdutosCadastrados/>
            <HistoricoProdutos/>
            <DeletarConta/>
            <Footer/>
        </div>
    )
}
export default PaginaUsuario