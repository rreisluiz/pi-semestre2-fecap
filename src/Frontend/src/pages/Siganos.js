import React from "react";
import styled from "styled-components";
import Navbar from '../Components/Navbar'
import Integrantes from "../Components/Integrantes";
import Footer from "../Components/Footer";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  background-color: #2C5431;
  color: #fff;
  padding: 20px 50px;
`;

function Siganos(){
    return(
        <div>
            <Navbar />
            <Title>Equipe</Title>
            <Integrantes />
            <Footer />
        </div>
    )
}
export default Siganos;