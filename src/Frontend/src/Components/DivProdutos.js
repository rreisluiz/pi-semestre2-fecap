import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useApiUrl } from '../context/ApiContext';

const Container = styled.div`
  max-width: 77em;
  margin: 7em auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6em 4em; 
  overflow-y: auto;
  `;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 1px 1px 20px 0 #c0c0c0;
  max-width: 300px; 
  border-radius:8px;
  `;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
  border-radius:8px;
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
  text-align: center;
  margin: -23px auto 70px auto; 
  font-size: 1.2em;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal; 
  width: 100%; 
  max-width: 90%; 
  flex-shrink: 1; 
  `;
  
const Description = styled.h2`
  color: #2d572c;
  text-align: center;
  margin: -23px auto 70px auto; 
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
  border-radius:0px 0px 8px 8px;
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
  const apiUrl = useApiUrl();

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

  useEffect(() => {
    setActiveImageIndexes(images.map(() => 0));
  }, [images]);

  return (
    <Container>
      {images.map((item, productIndex) => (
        <Card key={item.id}>
          <ImageContainer>
          {item.images && item.images.length > 0 ? ( // Renderização condicional
            <CarouselWrapper>
              <div
                id={`carousel${item.id}`}
                className="carousel slide"
                data-bs-ride="false"
              >
                <div className="carousel-inner">
                  {item.images.map((image, imgIndex) => (
                    <div
                      className={`carousel-item ${imgIndex === activeImageIndexes[productIndex] ? 'active' : ''}`}
                      key={imgIndex}
                    >
                      <Image src={`${apiUrl}/uploads/${image.foto}`} alt={`Produto ${item.id} - Imagem ${imgIndex + 1}`} />
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
                        (newIndexes[productIndex] - 1 + item.images.length) %
                        item.images.length;
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
                        (newIndexes[productIndex] + 1) % item.images.length;
                      return newIndexes;
                    })
                  }
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span> 
                </ArrowButton>
              </div>
            </CarouselWrapper>
          ) : (
            <p>Carregando imagens...</p>
          )}

            {/* Trilha de bolinhas */}
            <Trail>
              {item.images.map((_, imgIndex) => (
                <TrailDot key={imgIndex} active={imgIndex === activeImageIndexes[productIndex]} />
              ))}
            </Trail>
          </ImageContainer>

          <Title>{item.nome_item}</Title>
          <Button onClick={() => navigate(`/item/${item.id}`)}>
            Saiba Mais
          </Button>
        </Card>
      ))}
    </Container>
  );
}

export default DivProdutos;
