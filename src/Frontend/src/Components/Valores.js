import React from "react";
import styled from "styled-components";

const ValoresContainer = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #2C5431;
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
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ValoresFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin: 44px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Card = styled.div`
  background-color: #1e3d27;
  border: 2px solid #fff; 
  border-radius: 8px; 
  padding: 1.5rem;
  flex: 1;
  text-align: left; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SubTitulo = styled.h3`
  font-size: 1.5rem;
  line-height: 1.5;
  font-style: italic;
  font-family: 'Inter-BoldItalic', 'Helvetica';
  font-weight: bold;
  color: #fff;
  margin-bottom: 1rem;
  text-align: left; 

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Texto = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-style: italic;
  font-family: 'Inter-BoldItalic', 'Helvetica';
  color: #fff;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Valores = () => {
  return (
    <ValoresContainer>
      <Titulo>Valores</Titulo>
      <ValoresFlex>
        <Card>
          <SubTitulo>Sustentabilidade:</SubTitulo>
          <Texto>Promover o reaproveitamento e o consumo consciente.</Texto>
        </Card>
        <Card>
          <SubTitulo>Comunidade:</SubTitulo>
          <Texto>Conectar pessoas que acreditam que juntos podemos fazer a diferença.</Texto>
        </Card>
        <Card>
          <SubTitulo>Respeito ao Planeta:</SubTitulo>
          <Texto>Valorizar e proteger os recursos naturais, garantindo um futuro melhor.</Texto>
        </Card>
      </ValoresFlex>
    </ValoresContainer>
  );
};

export default Valores;
