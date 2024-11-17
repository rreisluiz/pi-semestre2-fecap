import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoarItemForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    foto_item: "",
    descricao_item: "",
    nome_item: "",
    categoria_item: "",
    estado_uso_item: "",
    cpf: "", // Obter o CPF do usuário logado (JWT ou sessão)
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Obter o token do localStorage
      const token = localStorage.getItem('token');

      if (token) {
        // Configurar o header Authorization
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Fazer a requisição com o header Authorization
        const response = await axios.post("http://localhost:5000/items/add", formData, config);

        alert(response.data.message);
        navigate("/home"); // Redirecionar para a home após doar
      } else {
        // Lidar com o caso em que o usuário não está logado
        console.error("Usuário não autenticado.");
        alert("Você precisa estar logado para doar um item.");
      }

    } catch (error) {
      console.error("Erro ao doar item:", error);
      alert("Erro ao doar item. Tente novamente.");
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormContent>
          {/* Campos do formulário */}
          <FormField>
            <Label htmlFor="foto_item">Foto do Item</Label>
            <InputBase
              type="text"
              id="foto_item"
              placeholder="URL da foto"
              required
              value={formData.foto_item}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="descricao_item">Descrição</Label>
            <InputBase
              as="textarea" // Mudança para textarea
              id="descricao_item"
              placeholder="Descrição do item"
              required
              value={formData.descricao_item}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="nome_item">Nome do Item</Label>
            <InputBase
              type="text"
              id="nome_item"
              placeholder="Nome do item"
              required
              value={formData.nome_item}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="categoria_item">Categoria</Label>
            <SelectBase 
              id="categoria_item" 
              value={formData.categoria_item} 
              onChange={handleChange}
            >
              <option value="">Selecione a categoria</option>
              <option value="Roupas">Roupas</option>
              <option value="Calçados">Calçados</option>
              <option value="Acessórios">Acessórios</option>
              <option value="Livros">Livros</option>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Eletrodomésticos">Eletrodomésticos</option>
              <option value="Móveis">Móveis</option>
              <option value="Brinquedos">Brinquedos</option>   

              <option value="Outros">Outros</option>  
            </SelectBase>
          </FormField>

          <FormField>
            <Label htmlFor="estado_uso_item">Estado de Uso</Label>
            <SelectBase
              id="estado_uso_item"
              value={formData.estado_uso_item}
              onChange={handleChange}
            >
              <option value="">Selecione o estado de uso</option>
              <option value="Novo">Novo</option>
              <option value="Seminovo">Seminovo</option>
              <option value="Usado (bom estado)">Usado (bom estado)</option>
              <option value="Usado (com avarias)">Usado (com avarias)</option>
              <option value="Para conserto ou reaproveitamento">Para conserto ou reaproveitamento</option>
            </SelectBase>
          </FormField>

          <ButtonGroup>
            <DoarButton type="submit">Doar</DoarButton>
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

const SelectBase = styled.select`
  width: 100%;
  border-radius: 8px;
  background-color: rgba(217, 217, 217, 0.3);
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  padding: 10px;
  border: none;
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

const DoarButton = styled(ButtonBase)`
  background-color: rgb(44, 84, 49);
`;

export default DoarItemForm;