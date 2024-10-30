import React, { useState } from "react"; // Importando useState
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import axios from "axios"; // Importando axios para fazer requisições

const LoginForm = () => {
  const navigate = useNavigate(); // Usando useNavigate
  const [email, setEmail] = useState(""); // Estado para email
  const [password, setPassword] = useState(""); // Estado para senha

  const handleRegisterClick = () => {
    navigate("/create-account"); // Redirecionando para a tela de criar conta
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    try {
      const response = await axios.post("http://localhost:3083/users/login", {
        email_usuario: email, // Enviando email
        senha_usuario: password, // Enviando senha
      });
      alert(response.data); // Mensagem de sucesso do backend
      navigate("/nextPage"); // Substitua "/nextPage" pela rota da próxima página
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      alert("Email ou senha incorretos."); // Mensagem de erro
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}> {/* Adicionando a função de submit */}
        <FormContent>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <EmailInput
              type="email"
              id="email"
              placeholder="Email:"
              aria-label="Email"
              required
              value={email} // Atribuindo valor do estado
              onChange={(e) => setEmail(e.target.value)} // Atualizando estado no change
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
              value={password} // Atribuindo valor do estado
              onChange={(e) => setPassword(e.target.value)} // Atualizando estado no change
            />
          </FormField>

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

export default LoginForm;
