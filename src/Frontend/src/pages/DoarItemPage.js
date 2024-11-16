import React from "react";
import styled from "styled-components";
import DoarItemForm from "../Components/DoarItemForm.js";
import imgDoar from '../img/img_doar.png'; // Importe a imagem de fundo

function DoarItemPage() {
  return (
    <MainContainer>
      <ImageSection>
        <BackgroundImage
          loading="lazy"
          src={imgDoar} // Use a imagem importada
          alt="Doar Item background"
        />
      </ImageSection>
      <FormSection>
        <Title>Doe um Item</Title>
        <DoarItemForm />
      </FormSection>
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

export default DoarItemPage;