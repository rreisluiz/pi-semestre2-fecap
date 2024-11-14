import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 1400px;
  margin: 20px auto;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Alterado para 4 colunas por linha */
  gap: 6em 7em; 
  overflow-y: auto;
`;


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 1px 1px 20px 0 #c0c0c0;
  max-width: 300px; 
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  color: #2d572c;
  text-align: justify;
  margin: 10px 0;
  font-size: 1.2em;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal; 
  width: 100%; 
  max-width: 90%; 
  flex-shrink: 1; 
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
  &:hover {
    background-color: #2d452c;
  }
`;

const Trail = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

const TrailDot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#2c5431' : '#ccc')};
  transition: background-color 0.3s ease;
`;

// Estilização das setas
const ArrowButton = styled.button`
  position: absolute;
  top: 8em;
  transform: translateY(-50%); /* Ajusta a posição vertical para o meio da imagem */
  background: transparent;
  border: none;
  z-index: 10;
  color: #2c5431; /* Cor do botão */

  &:focus {
    outline: none;
  }

  &.prev {
    left: 10px; /* Ajuste da posição horizontal da seta anterior */
  }

  &.next {
    right: 10px; /* Ajuste da posição horizontal da seta próxima */
  }

  span {
    font-size: 2em; /* Aumente o tamanho das setas, se necessário */
    color: #2c5431; /* Cor das setas */
    transition: background-color 0.3s ease; /* Transição suave */
  }

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
        <Card key={product.id}>
          <ImageContainer>
            <CarouselWrapper>
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
                      <Image src={image} alt={`Produto ${product.id} - Imagem ${imgIndex + 1}`} />
                    </div>
                  ))}
                </div>

                {/* Botão anterior */}
                <ArrowButton
                  className="prev"
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
                </ArrowButton>

                {/* Botão próximo */}
                <ArrowButton
                  className="next"
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
                </ArrowButton>
              </div>
            </CarouselWrapper>

            {/* Trilha de bolinhas */}
            <Trail>
              {product.images.map((_, imgIndex) => (
                <TrailDot key={imgIndex} active={imgIndex === activeImageIndexes[productIndex]} />
              ))}
            </Trail>
          </ImageContainer>

          <Title>{product.title}</Title>

          <Button onClick={() => navigate(`/item/${product.id}`)}>
            Saiba Mais
          </Button>
        </Card>
      ))}
    </Container>
  );
}

export default DivProdutos;
