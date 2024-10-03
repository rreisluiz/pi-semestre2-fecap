import React from 'react';
import styled from 'styled-components';
import Img1 from '../assets/Img1.png';
import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img3.png';


const FuncionamentoContainer = styled.section`
  background-color: #2C5431;
  padding: 60px;
  text-align: center;
  color: #ffff;
  font-style: italic;
  font-family: 'Inter-BoldItalic', 'Helvetica';
  font-weight: bold;
  text-decoration: underline;
  font-size: 25px;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Step = styled.div`
  width: 20%;
  border: 1px solid #ddd;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  margin: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StepImage = styled.img`
  width: 250px;
  height: 240px;
  border-radius:10px;
  margin-bottom: 10px;
  margin-top: -10px;
`;

const StepTitle = styled.h3`
  margin-top: 5px;
  color: #2C5431;
  font-size: 20px;
  text-decoration:underline;
`;

const StepText = styled.p`
  font-size: 13px;
 
  color: #2C5431;
  margin-bottom: -10px;
  margin-top: 5px;
`;

const Funcionamento = () => {
  return (
    <FuncionamentoContainer>
      <h2>Como Funciona</h2>
      <StepsContainer>
        <Step>
          <StepTitle>Passo 1:</StepTitle>
          <StepImage src={Img1} alt="Passo 1" />
          <StepText>Explore. Navegue pela nossa plataforma e descubra itens que outros usuários estão dispostos a trocar.</StepText>
        </Step>
        <Step>
          <StepTitle>Passo 2:</StepTitle>
          <StepImage src={Img2} alt="Passo 2" />
          <StepText>Troque ou Reutilize. Encontre algo que você precisa e faça uma troca responsável! É simples, fácil e sustentável!</StepText>
        </Step>
        <Step>
          <StepTitle>Passo 3:</StepTitle>
          <StepImage src={Img3} alt="Passo 3" />
          <StepText>Descarte Conscientemente. Caso o item não possa ser reutilizado, recicle usando pontos de coleta próximos a você para o descarte adequado.</StepText>
        </Step>
      </StepsContainer>
    </FuncionamentoContainer>
  );
};

export default Funcionamento;
