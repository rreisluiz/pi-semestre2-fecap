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
  width: 85%;
  max-height: auto;
  margin: 10px auto;


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
  color: #2C5431;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 4px;
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

const InterestData = styled.h2`
  font-size: 20px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

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

const ProductDescription = styled.div`
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

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  border: none;
  background-color: #2d572c;
  color: white;
  cursor: pointer;
  margin-top: auto;
  font-weight: 550;
  font-size: 1.05em;
  border-radius: 8px;
  &:hover {
    background-color: #2d452c;
  }
`;

const DonatorInfo = styled.div`
  color: #fff;
  display: flex;
  background-color: #2C5431;
  border-radius: 8px;
  padding: 10px 40px;
  margin: 0 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ProductInterestCard = ({item}) => {
  const apiUrl = useApiUrl();
  const navigate = useNavigate();
  const data_interesse = new Date(item.data_interesse)

    return (
      <Card>
        {item.images && item.images.length > 0 ? (
        <ImagePlaceholder src={`${apiUrl}/uploads/${item.images[0].foto}`}/>
        ) : (
          <ImagePlaceholder/>
        )
        }  
        <InfoContainer>
          <ProductInfo>
            <InterestData>Data de Interesse: {data_interesse.toLocaleDateString('pt-BR')}</InterestData>
            <ProductID>ID: {item.id}</ProductID>
            <ProductName>Nome: {item.nome_item}</ProductName>
            <ProductStatus>Estado: {item.estado_uso_item}</ProductStatus>
            <ProductDescription>
              {item.descricao_item}
            </ProductDescription>
            <Button onClick={() => navigate(`/item/${item.id}`)}>
              Saiba Mais
            </Button>
          </ProductInfo>
          <DonatorInfo>
            <ProductName>Doador: {item.nome_usuario}</ProductName>
            <ProductName>{item.email_usuario}</ProductName>
            <ProductStatus>{item.telefone}</ProductStatus>
          </DonatorInfo>
        </InfoContainer>
      </Card>
    );
};
  
export default ProductInterestCard;