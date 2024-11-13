import React, { useState } from "react";
import styled from "styled-components";
import Seta from '../assets/icon_seta.png';

const Container = styled.div`
  margin-top: 100px; 
  margin-left: -14px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 80px 0 24px 80px;

  /* Responsividade */
  @media (max-width: 768px) {
    margin: 12px 0 16px 16px; 
  }

  @media (max-width: 480px) {
    margin: 8px 0 12px 12px; 
  }
`;

const Title = styled.h2`
  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  text-decoration: underline;
  text-align: left;
  margin: 0;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ImagemEstilizada = styled.img`
  width: 32px;
  height: 32px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(90deg)")};
  transition: transform 0.3s ease;
  margin-right: 10px; 

  /* Responsividade */
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const Subtitulos = styled.section`
  margin: 16px 32px;
  padding: 16px;
  border-left: 4px solid #2C5431;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: ${(props) => (props.isOpen ? "block" : "none")}; /* Condicional para exibir/ocultar */

  @media (max-width: 768px) {
    margin: 12px 16px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    margin: 8px 12px;
    padding: 8px;
  }
`;

const Sub = styled.h3`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #333333;
  margin-bottom: 300px; 

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

function HistoricoProdutos() {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <Container>
      <TitleContainer onClick={toggleListVisibility}>
        <ImagemEstilizada src={Seta} alt="Seta" isOpen={isListVisible} />
        <Title>Histórico de Produtos</Title>
      </TitleContainer>
      <Subtitulos isOpen={isListVisible}>
        <Sub>Solicitados</Sub>
        <Sub>Requeridos</Sub>
      </Subtitulos>
    </Container>
  );
}

export default HistoricoProdutos;