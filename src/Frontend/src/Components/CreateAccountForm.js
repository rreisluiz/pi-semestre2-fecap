import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importando useNavigate

const CreateAccountForm = () => {
  const navigate = useNavigate(); // Usando useNavigate
  const [formData, setFormData] = useState({
    CPF: "",
    nome_usuario: "",
    email_usuario: "",
    senha_usuario: "",
    data_nascimento_usuario: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    uf: "",
    cidade: "",
    estado: "",
    telefone: ""
  });

  function validarDataNascimento(data) {
    const hoje = new Date();
    const dataNascimento = new Date(data);
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const m = hoje.getMonth() - dataNascimento.getMonth();
  
    // Ajusta a idade se o aniversário ainda não ocorreu este ano
    if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }
  
    // Verificar se a data de nascimento é anterior a hoje
    if (dataNascimento > hoje) {
      return false;
    }
  
    // Verificar se a idade é maior ou igual a 18 anos
    return idade >= 18;
  }

  function validarCPF(cpf) {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');
  
    // Verificar se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verificar se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    // Calcular os dígitos verificadores
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
      return false;
    }
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
  }

  function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove tudo o que não for dígito
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
  }
  
  function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    
    // Limita o número de dígitos
    if (telefone.length > 11) {
      telefone = telefone.slice(0, 11);
    }
  
    telefone = telefone.replace(/(\d{2})(\d)/, '($1) $2');
    telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2');
    return telefone;
  }

  const handleTelefoneChange = (e) => {
    const telefoneFormatado = formatarTelefone(e.target.value);
    setFormData(prevData => ({ ...prevData, telefone: telefoneFormatado }));
  };

  const handleCPFChange = (e) => {
    let cpf = e.target.value;
  
    // Limita o número de dígitos
    if (cpf.length > 14) { 
      cpf = cpf.slice(0, 14); // Corta a string para ter no máximo 14 caracteres (incluindo pontos e traço)
    }
  
    const cpfFormatado = formatarCPF(cpf);
    setFormData(prevData => ({ ...prevData, CPF: cpfFormatado }));
  };

  const handleCEPChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
  
    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setFormData({
          ...formData,
          // CEP: cep,
          logradouro: response.data.logradouro,
          bairro: response.data.bairro,
          cidade: response.data.localidade,
          uf: response.data.uf,
        });
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        // Trate o erro, talvez exibindo uma mensagem para o usuário
      }
    } else {
      setFormData({ ...formData, CEP: cep });
    }
  };
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário

    if (!validarDataNascimento(formData.data_nascimento_usuario)) {
      alert("Data de nascimento inválida. Você deve ter pelo menos 18 anos.");
      return;
    }

    if (!validarCPF(formData.CPF)) {
      alert("CPF inválido.");
      return;
    }

    try {
        // Envia a requisição POST para o backend com os dados do formulário
        const cpfSemFormatacao = formData.CPF.replace(/\D/g, '');
        const telefoneSemFormatacao = formData.telefone.replace(/\D/g, '');

        // Criar um novo objeto com os dados do formulário, incluindo CPF e telefone sem formatação
        const dadosFormulario = {
          ...formData,
          CPF: cpfSemFormatacao,
          telefone: telefoneSemFormatacao,
        };

        const response = await axios.post("http://localhost:5000/users/add", dadosFormulario); // Corrigido para enviar dadosFormulario

        
        // Verifica o que foi retornado pelo backend e exibe a mensagem de sucesso
        alert(response.data.message); // Exibe a mensagem de sucesso do backend

        // Navega para a página de login após o cadastro bem-sucedido
        navigate("/loginpage");

    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        alert("Erro ao cadastrar o usuário. Tente novamente." + error);
    }
};

return (
  <FormWrapper>
    <form onSubmit={handleSubmit}>
      <FormContent>
        <FormColumn> {/* Primeira coluna */}
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
            <Label htmlFor="CEP">CEP</Label>
            <InputBase
              type="text"
              id="CEP"
              placeholder="CEP"
              required
              value={formData.CEP}
              onChange={handleCEPChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="EnderecoNumero">Complemento</Label>
            <InputBase
              type="text"
              id="complemento"
              placeholder="Complemento"
              value={formData.complemento}
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
        </FormColumn>

        <FormColumn> {/* Segunda coluna */}
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
              onChange={handleTelefoneChange}
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
              onChange={handleCPFChange}
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
            <Label htmlFor="bairro">Bairro</Label>
            <InputBase
              type="text"
              id="bairro"
              placeholder="Bairro"
              required
              value={formData.bairro}
              onChange={handleChange}
            />
          </FormField>
        </FormColumn>
      </FormContent>

      <ButtonGroup>
        <RegisterButton type="submit">Registrar-se</RegisterButton>
        <LoginButton type="button" onClick={() => navigate("/loginpage")}>
            Já tenho uma conta
        </LoginButton>
      </ButtonGroup>
    </form>
  </FormWrapper>
);
};

const FormContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Divide em duas colunas
  gap: 16px;
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  font-family: Inter, sans-serif;
  margin: 0 auto;
  position: relative;
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
  margin-top: 70px;
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
