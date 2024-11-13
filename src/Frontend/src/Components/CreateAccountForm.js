import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importando useNavigate

const CreateAccountForm = () => {
  const navigate = useNavigate(); // Usando useNavigate
  const [formData, setFormData] = useState({
    nome_usuario: "",
    data_nascimento_usuario: "",
    telefone: "",
    CPF: "",
    email_usuario: "",
    logradouro: "",
    senha_usuario: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário

    try {
        // Envia a requisição POST para o backend com os dados do formulário
        const response = await axios.post("http://localhost:5000/users/add", formData);
        
        // Verifica o que foi retornado pelo backend e exibe a mensagem de sucesso
        alert(response.data.message); // Exibe a mensagem de sucesso do backend

        // Navega para a página de login após o cadastro bem-sucedido
        navigate("/loginpage");

    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        alert("Erro ao cadastrar o usuário. Tente novamente.");
    }
};

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormContent>
          <FormField>
            <Label htmlFor="nome_usuario">Nome Completo</Label>
            <InputBase
              type="text"
              id="nome_usuario"
              placeholder="Nome Completo"
              required
              value={formData.nome_usuario}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="data_nascimento_usuario">Data de Nascimento</Label>
            <InputBase
              type="date"
              id="data_nascimento_usuario"
              required
              value={formData.data_nascimento_usuario}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="telefone">Telefone</Label>
            <InputBase
              type="tel"
              id="telefone"
              placeholder="Telefone"
              required
              value={formData.telefone}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="CPF">CPF</Label>
            <InputBase
              type="text"
              id="CPF"
              placeholder="CPF"
              required
              value={formData.CPF}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="email_usuario">Email</Label>
            <InputBase
              type="email"
              id="email_usuario"
              placeholder="Email"
              required
              value={formData.email_usuario}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="logradouro">Endereço</Label>
            <InputBase
              type="text"
              id="logradouro"
              placeholder="Endereço"
              required
              value={formData.logradouro}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="senha_usuario">Senha</Label>
            <InputBase
              type="password"
              id="senha_usuario"
              placeholder="Senha"
              required
              value={formData.senha_usuario}
              onChange={handleChange}
            />
          </FormField>

          <ButtonGroup>
            <RegisterButton type="submit">Registrar-se</RegisterButton>
            <LoginButton type="button" onClick={() => navigate("/loginpage")}>
              Já tenho uma conta
            </LoginButton>
          </ButtonGroup>
        </FormContent>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  font-family: Inter, sans-serif;
  margin: 0 auto;
  position: relative;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const InputBase = styled.input`
  width: 100%;
  border-radius: 8px;
  background-color: rgba(217, 217, 217, 0.3);
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  padding: 10px;
  border: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

const ButtonBase = styled.button`
  flex: 1;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border: none;
`;

const RegisterButton = styled(ButtonBase)`
  background-color: rgb(44, 84, 49);
`;

const LoginButton = styled(ButtonBase)`
  background-color: transparent;
  border: 1px solid #fff;
`;

export default CreateAccountForm;
