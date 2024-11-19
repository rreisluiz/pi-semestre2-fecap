import React, { useState } from "react";
import DeletarConta from "../Components/DeletarConta";
import styled from "styled-components";
import Seta from '../assets/icon_seta.png'; 

const Container = styled.div`
  padding-top: 250px;
  margin: 0 auto;
  width: 80%;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 800px) {
    width: 95%;
  }
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 40px;
  }

  @media (max-width: 480px) {
    margin-left: 20px;
  }
`;

const User = styled.h2`
  font-family: "Inter";
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-decoration: underline;
  margin: 0 10px 0 0;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const ImagemEstilizada = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(90deg)")};
  transition: transform 0.3s ease;

  @media (max-width: 800px) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 500px) {
    width: 18px;
    height: 18px;
  }
`;

const Form = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
`;


const NOME = styled.input`
  flex: 1; 
  min-width: 700px; 
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2E583A;
  color: #fff;
  font-size: 16px;
  text-align: left;
`;

const EMAIL = styled.input`
  flex: 1;
  min-width: 700px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2E583A;
  color: #fff;
  font-size: 16px;
  text-align: left;
`;

const TELEFONE = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2E583A;
  color: #fff;
  font-size: 16px;
  text-align: left;
`;

const DATA = styled.input`
  flex: 1;
  min-width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2E583A;
  color: #fff;
  font-size: 16px;
  text-align: left;
`;

const CPF = styled.input`
  flex: 1;
  min-width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2E583A;
  color: #fff;
  font-size: 16px;
  text-align: left;
`;

const ENDERECO = styled.input`
  flex: 1; 
  min-width: 700px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2E583A;
  color: #fff;
  font-size: 16px;
  text-align: left;
`;

const EditButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #A66A4F;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-end; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8B5A3C;
  }
`;

// Componente principal
function Usuario({user}){
    // Estados para armazenar os dados do usuário
    const userData = user;
    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContentVisibility = () => {
      setIsContentVisible(!isContentVisible);
    };

    const userLogradouro = `${userData.logradouro}, ${userData.complemento}`
    const userCidade = `${userData.cidade} - ${userData.uf}`
    const userDataNasc = new Date(userData.data_nascimento_usuario)

    return (
      <Container>
          <UserHeader onClick={toggleContentVisibility}>
            <ImagemEstilizada src={Seta} alt="Seta" isOpen={isContentVisible} />
            <User>Usuário</User>
          </UserHeader>
          
        <ProfileSection>
          <Form isOpen={isContentVisible} readOnly>
            <NOME value={userData.nome_usuario} readOnly placeholder="Nome Completo" />
            <TELEFONE value={userData.telefone} readOnly placeholder="Telefone" />
            <EMAIL value={userData.email_usuario} readOnly placeholder="E-mail" />
            <DATA value={userDataNasc.toLocaleDateString('pt-BR')} readOnly placeholder="DD/MM/AA" />
            <CPF value={userData.CPF} readOnly placeholder="CPF" />
            <ENDERECO value={userLogradouro} readOnly placeholder="Endereço" />
            <ENDERECO value={userData.bairro} readOnly placeholder="Endereço" />
            <ENDERECO value={userCidade} readOnly placeholder="Endereço" />
          </Form>
        </ProfileSection>
      </Container>
    );
}

export default Usuario;