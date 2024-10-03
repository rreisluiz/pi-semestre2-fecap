import React from "react";
import styled from "styled-components";

const ValoresContainer = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #2C5431; /* Cor do fundo */
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Titulo = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  margin-top: 30px;
  text-align: center;
  font-style: italic;
  font-family: 'Inter-BoldItalic', 'Helvetica';
  font-weight: bold;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ValoresFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 44px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px 0;
  }
`;

const SubTitulo = styled.h3`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-left:190px;

  text-align: justify;
  font-style: italic;
  font-family: 'Inter-BoldItalic', 'Helvetica';
  font-weight: bold;
  color: #fff;
  margin-right: 44px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0;
  }
`;

const Texto = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: justify;
  margin-left:120px;
  margin-right:44px;
  font-style: italic;
  font-family: 'Inter-BoldItalic', 'Helvetica';
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Valores = () => {
  return (
    <ValoresContainer>
      <Titulo>Valores</Titulo>
      <ValoresFlex>
        <div>
          <SubTitulo>Sustentabilidade:</SubTitulo>
          <Texto>Promover o reaproveitamento e o consumo consciente.</Texto>
        </div>
        <div>
          <SubTitulo>Comunidade:</SubTitulo>
          <Texto>Conectar pessoas que acreditam que juntos podemos fazer a diferença.</Texto>
        </div>
        <div>
          <SubTitulo>Respeito ao Planeta:</SubTitulo>
          <Texto>Valorizar e proteger os recursos naturais, garantindo um futuro melhor.</Texto>
        </div>
      </ValoresFlex>
    </ValoresContainer>
  );
};

export default Valores;
