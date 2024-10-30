import React from "react";
import styled from "styled-components";
import CreateAccountForm from "../Components/CreateAccountForm.js";
import imgRegister from '../img/img_register.png';

function CreateAccountPage() {
  return (
    <MainContainer>
      <ImageSection>
        <BackgroundImage
          loading="lazy"
          src={imgRegister}
          alt="Create Account background"
        />
      </ImageSection>
      <FormSection>
        <Title>Crie uma Conta</Title>
        <CreateAccountForm />
      </FormSection>
      <BackArrow href="/loginpage">&#8592;</BackArrow> {/* Seta de retorno que redireciona para a página de login */}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative; /* Para permitir o posicionamento absoluto da seta */
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #013220;
  color: #fff;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
`;

const BackArrow = styled.a`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  font-size: 30px; /* Aumentando o tamanho da seta */
  text-decoration: none;
`;

export default CreateAccountPage;