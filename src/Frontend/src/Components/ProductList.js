import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import Seta from '../assets/icon_seta.png';

const Container = styled.div`
  margin-top: 100px;
  margin-left: -14px;
`;

const ProductListContainer = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
  padding: 32px;
  margin-top: 20px;

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
  margin-left: 80px;

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

const products = [
  { id: 1, name: 'Produto 1', status: 'Descrição ...' },
  { id: 2, name: 'Produto 2', status: 'Descrição ...' },
  { id: 3, name: 'Produto 3', status: 'Descrição ...' },
  { id: 4, name: 'Produto 4', status: 'Descrição ...' },
  { id: 5, name: 'Produto 5', status: 'Descrição ...' },
  { id: 6, name: 'Produto 6', status: 'Descrição ...' },
];

function ProductList() {
  const [isListVisible, setIsListVisible] = useState(false);

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
        {products.map((product) => (
          <ProductCard key={product.id} name={product.name} status={product.status} />
        ))}
      </ProductListContainer>
    </Container>
  );
}

export default ProductList;