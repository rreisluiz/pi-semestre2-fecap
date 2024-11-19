import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useApiUrl } from "../context/ApiContext";
import axios from 'axios'

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(50% - 20px);
  height: auto;
  margin-bottom: 10px;


  /* Responsividade */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 12px;
  }
`;

const ImagePlaceholder = styled.img`
  width: 500px; // Largura fixa em pixels
  height: 250px; // Altura fixa em pixels
  object-fit: cover; // Mantém a proporção da imagem, mas corta o excesso
  background-color: #6c6c6c;
  border-radius: 8px;

  /* Responsividade */
  @media (max-width: 768px) {
    width: 90%; // Largura responsiva para telas menores
  }

  @media (max-width: 480px) {
    width: 100%; // Largura responsiva para telas menores
  }
`;

const InfoContainer = styled.div`
  display: flex;
  color: #2C5431;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductID = styled.h4`
  font-size: 20px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ProductName = styled.h4`
  font-size: 16px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ProductStatus = styled.h5`
  font-size: 16px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ProductDescrition = styled.div`
  font-size: 16px;
  padding: 8px;
  color: #2C5431;
  border-radius: 8px;
  border: 2px solid #2C5431;
  line-height: 1.5;
  margin: 8px 0;
  height: 80px;
  overflow-y: auto;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 2px;
`;

const Button = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: ${(props) => (props.delete ? '#A66A4F' : '#2C5431')}; // Cor de fundo variável (verde ou marrom dependendo do tipo de botão)

  &:hover {
    opacity: 0.9;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 10px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex; 

  justify-content: center; // Centraliza horizontalmente
  align-items: center; // Centraliza verticalmente
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const FormEdit = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px
`

const InputEdit = styled.input`
  width: 100%;
  border-radius: 8px;
  background-color: rgba(217, 217, 217, 0.3);
  font-size: 16px;
  padding: 5px 10px;
`;

const InputSelect = styled.select`
  width: 100%;
  border-radius: 8px;
  background-color: rgba(217, 217, 217, 0.3);
  font-size: 16px;
  padding: 5px 10px;
`;

const InputDescription = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  background-color: rgba(217, 217, 217, 0.3);
  font-size: 16px;
  padding: 5px 10px;
`;

const ProductCard = ({item}) => {
  const apiUrl = useApiUrl();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({ ...item });

  useEffect(() => {
    setEditedItem({ ...item }); // Atualiza o estado quando o item muda
  }, [item]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleSaveClick = async (id) => {
    alert("Salvando item:", editedItem);
    try {
      const response = await axios.put(`${apiUrl}/items/update/${id}`, editedItem);
      alert(response.data.message)
    } catch (error) {
      alert('Erro ao atualizar item:', error);
    }
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedItem({ ...item }); // Reverte para os dados originais
    setIsEditing(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/items/delete/${id}`);
      alert(response.data.message)
      window.location.reload()
    } catch (error) {
      alert('Erro ao deletar item:', error);
    }
    closeModal();
    
  };

    return (
      <Card>
        {item.images && item.images.length > 0 ? (
        <ImagePlaceholder src={`${apiUrl}/uploads/${item.images[0].foto}`}/>
        ) : (
          <ImagePlaceholder/>
        )
        }  
        <InfoContainer>
        {isEditing ? ( 
          // Formulário de edição
          <FormEdit>
            <ProductID>ID: {item.id}</ProductID>
            <InputEdit
              type="text"
              name="nome_item"
              value={editedItem.nome_item}
              onChange={handleInputChange}
            />
            <InputSelect
              name="categoria_item"
              value={editedItem.categoria_item}
              onChange={handleInputChange}
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
            </InputSelect>
            <InputSelect
              name="estado_uso_item"
              value={editedItem.estado_uso_item}
              onChange={handleInputChange}
            >
              <option value="">Selecione o estado de uso</option>
              <option value="Novo">Novo</option>
              <option value="Seminovo">Seminovo</option>
              <option value="Usado (bom estado)">Usado (bom estado)</option>
              <option value="Usado (com avarias)">Usado (com avarias)</option>
              <option value="Para conserto ou reaproveitamento">Para conserto ou reaproveitamento</option>
            </InputSelect>
            <InputDescription
              name="descricao_item"
              value={editedItem.descricao_item}
              onChange={handleInputChange}
            />
            <ButtonContainer>
              <Button onClick={() => handleSaveClick(item.id)}>Salvar</Button>
              <Button onClick={handleCancelClick}>Cancelar</Button>
            </ButtonContainer>
          </FormEdit>
        ) : (
          // Visualização normal
          <ProductInfo>
            <ProductID>ID: {item.id}</ProductID>
            <ProductName>Nome: {item.nome_item}</ProductName>
            <ProductStatus>Categoria: {item.categoria_item}</ProductStatus>
            <ProductStatus>Estado: {item.estado_uso_item}</ProductStatus>
            <ProductDescrition>
              {item.descricao_item}
            </ProductDescrition>
            <ButtonContainer>
              <Button onClick={handleEditClick}>Editar</Button>
              <Button delete onClick={openModal}>Deletar</Button>
            </ButtonContainer>
          </ProductInfo>
        )}
        </InfoContainer>
        {/* Modal de confirmação */}
        {modalIsOpen && (
          <ModalContainer>
            <ModalContent>
              <p>Tem certeza que deseja excluir este item?</p>
              <ModalButtons>
                <Button onClick={() => handleDelete(item.id)}>Sim</Button>
                <Button onClick={closeModal}>Não</Button>
              </ModalButtons>
            </ModalContent>
          </ModalContainer>
        )}
      </Card>
    );
};
  
export default ProductCard;