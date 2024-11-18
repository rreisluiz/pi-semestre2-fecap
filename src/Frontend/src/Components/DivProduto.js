import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  gap: 20px;
  margin: 70px; /* Margem de 70px */
  padding-bottom: 20px;
`;

const ImageContainer = styled.div`
  width: 100%; /* Ocupa toda a largura da célula */
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px; /* Ajuste de padding para controle do espaçamento */
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  text-align: center;
  margin: 10px 0;
  font-size: 1rem; /* Reduzindo o tamanho da fonte */
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  background-color: #2c5431;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }

  &:hover {
    background-color: #96AF9F;
    color: #2C5431;
  }
`;


function DivProduto({ images }) {
  const navigate = useNavigate(); // Usando o hook de navegação

  const [activeImageIndex, setActiveImageIndex] = useState(0); // Estado para controlar a imagem ativa

  // Função para alternar a imagem automaticamente a cada 3 segundos para o produto com id 1
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images[0].images.length); // Alterna a imagem
    }, 3000); // Intervalo de 3 segundos

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [images]);

  return (
    <Container>
      {images.map((product, index) => (
        <ImageContainer key={index}>
          {/* Carrossel dentro do ImageContainer */}
          <div id={`carousel${product.id}`} className="carousel slide" data-bs-ride="false">
            <div className="carousel-inner">
              {/* Mapeia as imagens do produto para criar os itens do carrossel */}
              {product.images.map((image, imgIndex) => (
                <div
                  className={`carousel-item ${imgIndex === activeImageIndex ? 'active' : ''}`} // Imagem ativa
                  key={imgIndex}
                >
                  <img src={image.src} className="d-block w-100" alt={image.alt} />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carousel${product.id}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#carousel${product.id}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <Text>{product.text}</Text>
          <Button onClick={() => navigate(`/item/${product.id}`)}>Saiba Mais</Button> {/* Navegação para a página do produto */}
        </ImageContainer>
      ))}
    </Container>
  );
}

export default DivProduto;
