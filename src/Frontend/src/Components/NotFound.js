import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgFundo from '../assets/img-fundo.png';

const Container = styled.div`
  align-items: center;
  padding: auto;
  position: absolute;
  width: 74.7em;
  height: 25em;
  top: 170px;
  border-radius: 20px;
  background: white; /* rgba(120, 120, 120, 0.2); */
  box-shadow: 0px 16px 32px -8px rgba(12, 12, 13, 0.4);
`;

const Styled404 = styled.div`
  text-align: center;
  padding: 150px;
  position: relative;

  background-image: url(${imgFundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;

  h2 {
    top: -10px;
    font-size: 38px;
    position: relative;
    z-index: 1;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;  
    color: #2c5431;
  }

  p {
    font-size: 14px;
    position: relative;
    z-index: 1;
    color: #2c5431;
    font-family: Arial, Helvetica, sans-serif;
  }

  h1 {
    position: relative;
    color: #fff;
    font-weight: bold;
    font-size: 200px;
    text-shadow: 4px 4px 5px rgba(44, 84, 49, 9);
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    position: relative;
    z-index: 1;
    color: black; /* Cor preta para o texto */
   
  }`;

function NotFound() {
  return (
    <Styled404>
      <Container>
        <h1>404</h1>
        <h2>Página Não Encontrada</h2>
        <p>Desculpe, a página que você está procurando não existe.</p>
        <Link to="/">
          Voltar para a Página Inicial
        </Link>
      </Container>
    </Styled404>
  );
}

export default NotFound;
