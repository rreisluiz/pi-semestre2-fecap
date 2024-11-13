import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 490px;
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

const ImagePlaceholder = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 13 / 9; 
  background-color: #6c6c6c;
  border-radius: 8px;

  /* Responsividade */
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
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
  font-size: 13px;
  padding: 8px;
  background: #2C5431;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  line-height: 1.5;
  margin: 8px 0;
  height: 55px;

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
  background-color: ${(props) => (props.delete ? '#A66A4F' : '#2C5431')};

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

const ProductCard = ({ name, status }) => {
    return (
      <Card>
        <ImagePlaceholder />
        <InfoContainer>
          <ProductName>Nome</ProductName>
          <ProductStatus>Status</ProductStatus>
          <ProductDescrition><br />Descrição</ProductDescrition>
          <ButtonContainer>
            <Button>Editar</Button>
            <Button delete>Deletar</Button>
          </ButtonContainer>
        </InfoContainer>
      </Card>
    );
};
  
export default ProductCard;