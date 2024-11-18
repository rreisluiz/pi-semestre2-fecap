import React, { useState } from "react";
import styled from "styled-components";
import Logo from '../assets/icon_seta.png'; 

const Container = styled.div`
  padding-top: 470px;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px auto;
  width: 90%;

  @media (max-width: 800px) {
    width: 95%;
  }
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const User = styled.h2`
  font-family: "Inter";
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
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
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(90deg)")}; // Rotaciona o ícone conforme o estado
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
  display: ${(props) => (props.isOpen ? "flex" : "none")}; // Exibe ou oculta com base no estado
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

const SENHA = styled.input`
  flex: 1;
  min-width: 250px;
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

function Usuario(){
    // Estados para armazenar os dados do usuário
    const [userData, setUserData] = useState({
      nomeCompleto: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    cpf: '',
    endereco: '',
    senha: '',
  });

  // Estado que controla se o formulário está visível ou não
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Função para alternar a visibilidade do formulário
  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible); // Inverte o estado de visibilidade
  };

  return (
    <Container>
      <ProfileSection>
        <UserHeader onClick={toggleContentVisibility}>
          <ImagemEstilizada src={Logo} alt="Logo RepassEco" isOpen={isContentVisible} />
          <User>Usuário</User>
        </UserHeader>
        
        {/* Formulário com os dados do usuário, aparece quando o estado 'isContentVisible' for true */}
        <Form isOpen={isContentVisible}>
          <NOME value={userData.nomeCompleto} readOnly placeholder="Nome Completo" />
          <TELEFONE value={userData.telefone} readOnly placeholder="Telefone" />
          <EMAIL value={userData.email} readOnly placeholder="E-mail" />
          <DATA value={userData.dataNascimento} readOnly placeholder="DD/MM/AA" />
          <CPF value={userData.cpf} readOnly placeholder="CPF" />
          <ENDERECO value={userData.endereco} readOnly placeholder="Endereço" />
          <SENHA type="password" value={userData.senha} readOnly placeholder="Senha" />
        </Form>
        {/* Botão de editar que aparece quando o formulário está visível */}
        {isContentVisible && <EditButton>Editar</EditButton>}
      </ProfileSection>
    </Container>
  );
}

export default Usuario;