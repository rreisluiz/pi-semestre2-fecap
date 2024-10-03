import React from "react";
import background from '../assets/pexels-singkham-178541-1108572-1.png';
import styled from "styled-components";

const StyledBox = styled.div`
  height: auto; 
  width: 100%; 
  position: relative; 
  overflow: hidden; 
  display: flex; 
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  margin-top: 60px; 
  height: 681px;

  .div-sobre-nos {
    width: 100%;
    max-width: 1084px; 
    position: relative;
    z-index: 1; 
    padding: 20px; 
    color: white; 
  
  }

  .background {
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    height: 681px; 
    background-image: url(${background}); 
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
    z-index: 0; 
  }

  .div {
    font-family: "Inter-BoldItalic", Helvetica;
    font-size: 48px;
    font-style: italic;
    font-weight: 700;
    text-align: center;
    margin: 20px 0;
  }

  .p {
    font-family: "Inter-BoldItalic", Helvetica;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    text-align: center;
    margin: 20px auto 40px;
    max-width: 800px; 
  }

  .mais-detalhes {
    margin: 40px auto; 
    display: flex;
    justify-content: center;
  }
`;

const ButtonStyled = styled.button` 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  text-align: center; 
  cursor: pointer; 
  white-space: nowrap; 
  height: 60px; 
  width: 120px;
  padding: 0; 
  font-size: 14px; 
  background-color: #2c5431; 
  color: white; 
  border: none; 
  border-radius: 5px; 
  margin-left: 10px; 
  transition: background-color 0.3s ease, color 0.3s ease; 
  font-weight: bold;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px; 
  }

  &:hover {
    background-color: #96AF9F; 
    color: #2C5431; 
  }
`;





export const DivsobreNos = () => {
  return (
    <StyledBox>
      <div className="background" />
      <div className="div-sobre-nos">
        <div className="div">Sobre Nós</div>
        <p className="p">
          Acreditamos que pequenas atitudes podem gerar grandes transformações! Nosso site existe para dar uma nova chance a produtos que ainda têm muito a oferecer, conectando pessoas que valorizam o reaproveitamento e o consumo consciente. Cada item trocado aqui é um passo a mais para preservar o meio ambiente e cuidar do nosso planeta. Além disso, ajudamos você a encontrar pontos de coleta para o descarte responsável, garantindo que juntos estamos fazendo nossa parte pelos Objetivos de Desenvolvimento Sustentável (ODS 12 e 15). Seja parte dessa mudança. Juntos, podemos transformar o mundo em um lugar mais sustentável!
        </p>
        <div className="mais-detalhes">
          <ButtonStyled>Mais detalhes</ButtonStyled>
        </div>
      </div>
    </StyledBox>
  );
};  

export default DivsobreNos;
