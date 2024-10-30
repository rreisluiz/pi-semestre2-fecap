import * as React from "react";
import styled from "styled-components";
import LoginForm from "../Components/LoginForm";

function LoginPage() {
  return (
    <MainContainer>
      <ImageSection>
        <BackgroundImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a875d5e269a9735ba58fda05bee0d844a01655a32b0b586a006b10838131e03d?placeholderIfAbsent=true&apiKey=c30f435924ad4a89a84cfb0e00a2057f"
          alt="Login background"
        />
      </ImageSection>
      <FormSection>
        <Title>Iniciar sessão</Title>
        <LoginForm />
      </FormSection>
      <BackArrow href="/">&#8592;</BackArrow>
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
  font-size: 30px;
  text-decoration: none;
`;

export default LoginPage;
