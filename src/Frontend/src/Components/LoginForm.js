import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Estado para erro

  const handleRegisterClick = () => {
    navigate("/create-account");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpa o erro anterior

    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email_usuario: email,
        senha_usuario: password,
      });

      alert(response.data.message); // Exibe a mensagem de sucesso do backend
      navigate("/nextPage");
    } catch (error) {
      console.error("Erro ao realizar login:", error);

      // Verifica o erro retornado pelo backend e exibe a mensagem correspondente
      if (error.response) {
        // Se a resposta da API for válida (erro com status HTTP)
        setError(error.response.data.message); // Atualiza o estado de erro com a mensagem do backend
      } else {
        // Caso não haja resposta, mostra um erro genérico
        setError("Erro ao realizar o login. Tente novamente.");
      }
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormContent>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <EmailInput
              type="email"
              id="email"
              placeholder="Email:"
              aria-label="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>

          <FormField>
            <Label htmlFor="password">Senha</Label>
            <PasswordInput
              type="password"
              id="password"
              placeholder="Senha:"
              aria-label="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>

          {/* Exibindo a mensagem de erro se houver */}
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <ButtonGroup>
            <RegisterButton type="button" onClick={handleRegisterClick}>
              Cadastrar-se
            </RegisterButton>
            <LoginButton type="submit">Entrar</LoginButton>
          </ButtonGroup>
        </FormContent>
      </form>
    </FormWrapper>
  );
};

// Estilos para o componente

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

const EmailInput = styled.input`
  width: 100%;
  border-radius: 8px;
  background-color: rgba(217, 217, 217, 0.3);
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  padding: 10px;
  border: none;
`;

const PasswordInput = styled.input`
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

// Estilo para a mensagem de erro
const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export default LoginForm;
