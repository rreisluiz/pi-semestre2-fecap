import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import Seta from '../assets/icon_seta.png';
import { useApiUrl } from "../context/ApiContext";
import axios from 'axios'


const Container = styled.div`
  padding-top: 20px;
  margin: 0 auto;
  width: 80%;
`;

const ProductListContainer = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 32px;
  margin-top: 20px;
  justify-content: space-around;

  @media (max-width: 768px) {
    padding: 16px;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
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

const ImagemEstilizada = styled.img`
  width: 32px;
  height: 32px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(90deg)")};
  transition: transform 0.3s ease;
  margin-right: 10px; 

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const Title = styled.h2`
  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  text-decoration: underline;
  text-align: left;
  margin: 0 10px 0 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

function ProductList({user}) {
  const [isListVisible, setIsListVisible] = useState(false);
  const [userItems, setUserItems] = useState([]);
  const apiUrl = useApiUrl();
  
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}/items/cpf/${user}`)
  //       setUserItems(response.data)
  //       console.log(response.data)
  //     } catch (error) {
  //       console.error('Erro ao buscar itens: ', error)
  //     }
  //   };

  //   fetchItems();
  // }, [user]);

  useEffect(() => {
    const fetchUserItems = () => {
        const token = localStorage.getItem('token');
    
        if (token) {
          axios.get(`${apiUrl}/items/cpf/${user}`, { // Rota para obter o nome do usuário
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(response => {
            setUserItems(response.data); // Define o nome do usuário no estado
          })
          .catch(error => {
            console.error('Erro ao obter itens do usuário:', error);
          });
        }
    }
    fetchUserItems();
  }, [user]); // Executa o efeito apenas uma vez, quando o componente é montado

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <Container>
      <TitleContainer onClick={toggleListVisibility}>
        <ImagemEstilizada src={Seta} alt="Seta" isOpen={isListVisible} />
        <Title>Produtos Cadastrados</Title>
      </TitleContainer>
      <ProductListContainer isOpen={isListVisible}>
        {userItems.map((userItem, itemIndex) => (
          <ProductCard key={itemIndex} item={userItem}/>
        ))}
      </ProductListContainer>
    </Container>
  );
}

export default ProductList;