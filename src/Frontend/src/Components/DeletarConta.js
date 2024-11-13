import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 110px 60px 100px 100px;
  @media (max-width: 768px) {
    margin: 150px 20px 30px 20px; 
  }
  @media (max-width: 480px) {
    margin: 100px 10px 20px 10px; 
  }
`;

const Title = styled.h2`
  font-family: 'Inter';
  font-style: italic;
  font-size: 32px;
  color: #000000;
  text-decoration: underline;
  text-align: left; 
  @media (max-width: 768px) {
    font-size: 24px; 
  }
  @media (max-width: 480px) {
    font-size: 18px; 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start; 
  width: 100%;
`;

const Button = styled.div`
  background-color: #A66A4F;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 18px 0;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 120px; 
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 100px; 
    height: 30px; 
  }
`;

function DeletarConta() {
  return (
    <Container>
      <Title>Deseja deletar a conta?</Title>
      <ButtonContainer>
        <Button>Deletar</Button>
      </ButtonContainer>
    </Container>
  );
}

export default DeletarConta;