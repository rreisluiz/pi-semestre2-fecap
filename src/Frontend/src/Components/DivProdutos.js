import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 70px;
  padding-bottom: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  text-align: left;  /* Alinha o texto à esquerda */
  margin: 10px 0;
  font-size: 1rem;
  width: 100%;  /* Garante que o texto ocupe toda a largura do container */
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

const Trail = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const TrailDot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#2c5431' : '#ccc')};
  transition: background-color 0.3s ease;
`;

function DivProdutos({ images }) {
  const navigate = useNavigate();

  const [activeImageIndexes, setActiveImageIndexes] = useState(
    images.map(() => 0)
  );

  useEffect(() => {
    const intervals = images.map((_, productIndex) =>
      setInterval(() => {
        setActiveImageIndexes((prevIndexes) => {
          const newIndexes = [...prevIndexes];
          newIndexes[productIndex] =
            (newIndexes[productIndex] + 1) % images[productIndex].images.length;
          return newIndexes;
        });
      }, 3000)
    );

    return () => intervals.forEach(clearInterval);
  }, [images]);

  return (
    <Container>
      {images.map((product, productIndex) => (
        <ImageContainer key={productIndex}>
          <div
            id={`carousel${product.id}`}
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-inner">
              {product.images.map((image, imgIndex) => (
                <div
                  className={`carousel-item ${imgIndex === activeImageIndexes[productIndex] ? 'active' : ''}`}
                  key={imgIndex}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Produto ${product.id} - Imagem ${imgIndex + 1}`}
                    style={{ borderRadius: '20px' }}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carousel${product.id}`}
              data-bs-slide="prev"
              onClick={() =>
                setActiveImageIndexes((prevIndexes) => {
                  const newIndexes = [...prevIndexes];
                  newIndexes[productIndex] =
                    (newIndexes[productIndex] - 1 + product.images.length) %
                    product.images.length;
                  return newIndexes;
                })
              }
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#carousel${product.id}`}
              data-bs-slide="next"
              onClick={() =>
                setActiveImageIndexes((prevIndexes) => {
                  const newIndexes = [...prevIndexes];
                  newIndexes[productIndex] =
                    (newIndexes[productIndex] + 1) % product.images.length;
                  return newIndexes;
                })
              }
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Trilha de bolinhas */}
          <Trail>
            {product.images.map((_, imgIndex) => (
              <TrailDot key={imgIndex} active={imgIndex === activeImageIndexes[productIndex]} />
            ))}
          </Trail>

          {/* Exibindo o nome do produto */}
          <Text>{product.title}</Text>

          <Button onClick={() => navigate(`/item/${product.id}`)}>
            Saiba Mais
          </Button>
        </ImageContainer>
      ))}
    </Container>
  );
}

export default DivProdutos;
