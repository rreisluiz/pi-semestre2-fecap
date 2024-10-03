import React from "react";
import imgFunco from '../assets/img-fundo.png';
import styled from "styled-components";

const StyledBox = styled.div`
  height: 605px;
  width: 100%;

  .overlap-group {
    height: 605px;
    position: relative;
    width: 100%; 
  }

  .img-funco {
    height: 681px;
    object-fit: cover; 
    position: absolute;
    top: 0; 
    left: -30px; 
    width: calc(100% + 30px); 
  }

  .texto-principal {
    height: 605px;
    position: relative; 
    top: 40px; 
  }

  .div {
    color: #000000;
    font-family: "Roboto-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    left: 179px;
    letter-spacing: 0;
    line-height: 52px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 459px;
  }

  .p {
    color: #000000;
    font-family: var(--m3-title-small-font-family);
    font-size: var(--m3-title-small-font-size);
    font-style: var(--m3-title-small-font-style);
    font-weight: var(--m3-title-small-font-weight);
    height: 100px;
    left: 178px;
    letter-spacing: var(--m3-title-small-letter-spacing);
    line-height: var(--m3-title-small-line-height);
    position: absolute;
    text-align: justify;
    top: 156px;
    width: 471px;
  }

  .pontos-de-coleta,
  .mapa-de-coleta {
    position: absolute;
    cursor: pointer; 
  }

  .pontos-de-coleta {
    left: 176px;
    top: 344px;
  }

  .mapa-de-coleta {
    left: 455px;
    top: 344px;
  }
`;

const ButtonStyled = styled.button`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  text-align: center; 
  cursor: pointer; 
  white-space: nowrap; 
  height: 40px; 
  padding: 0 16px; 
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


export const Box = () => {
  return (
    <StyledBox className="box">
      <div className="texto-principal">
        <div className="overlap-group">
          <img className="img-funco" alt="Img funco" src={imgFunco} />
          <p className="div">Transformando o Consumo, Preservando o Futuro</p>
          <p className="p">
            Cada escolha faz diferença. Nosso site nasceu para promover o consumo
            consciente e dar nova vida a produtos que ainda podem ser reutilizados. Em
            vez de descartar, que tal compartilhar com quem pode aproveitar? Estamos aqui
            para facilitar essas trocas e contribuir para um mundo mais sustentável.
          </p>
          <ButtonStyled className="pontos-de-coleta">Pontos de Coleta</ButtonStyled>
          <ButtonStyled className="mapa-de-coleta">Explorar Item</ButtonStyled>
        </div>
      </div>
    </StyledBox>
  );
};

export default Box;
