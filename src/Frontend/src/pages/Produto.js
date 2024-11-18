import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import DivProdutos from '../Components/DivProdutos';
import styled from 'styled-components';
import axios from 'axios';
import { useApiUrl } from '../context/ApiContext';

const Container = styled.div`
  width: 100%;
  padding: 50px 0;
  background-color: #2C5431; /* rgba(120, 120, 120, 0.2); */
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  background: white; /* rgba(120, 120, 120, 0.2); */
  box-shadow: 0px 0px 32px -8px rgba(12, 12, 13, 0.4);
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 10px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  width: 100%; 
  min-height: 20em; 
  padding: 1em;
  box-sizing: border-box; 
`;

const Image = styled.img`
  width: 100%;
  max-height: 40em;
  object-fit: cover;
  border-radius: 20px;
  border-style: groove;
`;

const TextContainer = styled.div`
  text-align: left;
`;

const Title = styled.h1`
  font-family:Arial, Helvetica, sans-serif;
  font-style:bold;
  color: #000;
  font-size: 2rem;
`;

const Description = styled.p`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
`;

const InterestedButton = styled.button`
  padding: 12px 20px;
  background-color: #2C5431;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #96AF9F;
    color: #2C5431;
  }
`;

const AnimatedButton = styled.button`
  transform: translateX(-38.6em);
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 36px;
  border: 4px solid transparent;
  font-size: 16px;
  background-color: #2C5431;
  border-radius: 100px;
  font-weight: 600;
  color: #fff;
  box-shadow: 0 0 0 2px #96AF9F;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #fff;
    border-radius: 12px;
  }

  &:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px greenyellow;
  }

  .arr-1 {
    transform: scaleX(-1);
    position: absolute;
    right: 13px;
    width: 22px;
    fill: #fff;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .arr-2 {
    transform: scaleX(-1);
    position: absolute;
    left: -25%;
    width: 24px;
    fill: #fff;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover .arr-1 {
    right: -25%;
  }

  &:hover .arr-2 {
    left: 16px;
  }

  &:hover .text {
    transform: translateX(12px);
  }

  &:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }
`;

// const productData = {
//   1: {
//     id: 1,
//     title: '1º Item',
//     description: 'Detalhes do 1º Item',
//     images: [guitarra01, guitarra02, guitarra03],
//   },
//   2: {
//     id: 2,
//     title: 'Controle PS4',
//     description: (
//       <>
//           Controle PS4 Usado - Excelente Estado! <br />
//           Está procurando um controle de PS4 em ótimo estado e com preço acessível? Temos o que você precisa!<br />
//           Nosso controle usado oferece toda a funcionalidade de um controle novo, com desempenho de alta qualidade.<br />
//           Ele foi cuidadosamente verificado, garantindo que você tenha uma experiência de jogo incrível, sem comprometer seu bolso.
//       </>
//     ),
//     images: [Controle01, Controle02, Controle03],
//   },
//   3: {
//     id: 3,
//     title: '3º Item',
//     description:'Detalhes do 3º Item',
//     images: [guitarra01, guitarra02, guitarra03],
//   },
//   4: {
//     id: 4, 
//     title: '4º Item',
//     description: 'Detalhes do 4º Item',
//     images: [guitarra01, guitarra02, guitarra03],
//   },
//   5: {
//     id: 5, 
//     title: '5º Item',
//     description: 'Detalhes do 5º Item',
//     images: [guitarra01, guitarra02, guitarra03],
//   },
//   6: {
//     id: 6, 
//     title: '6º Item',
//     description: 'Detalhes do 6º Item',
//     images: [guitarra01, guitarra02, guitarra03],
//   },
// };

function Produto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = useApiUrl();
  const [item, setItem] = useState();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${apiUrl}/items/`)
        setItems(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Erro ao buscar itens: ', error)
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${apiUrl}/items/id/${id}`)
        setItem(response.data[0])
        console.log(response.data)
      } catch (error) {
        console.error('Erro ao buscar itens: ', error)
      }
    };

    fetchItems();
  }, [id]);

  useEffect(() => {
    if (item && item.images) {
      const interval = setInterval(() => {
        setActiveImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [item]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <ItemContainer>
          <ButtonContainer>
            <AnimatedButton onClick={handleBack}>
              <svg className="arr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className="text">VOLTAR</span>
              <span className="circle"></span>
              <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </AnimatedButton>
          </ButtonContainer>
            {item ? (
          <FlexContainer>
            {item.images && item.images.length > 0 ? (
          <Image
            src={`${apiUrl}/uploads/${item.images[activeImageIndex].foto}`} 
            alt={`${item.nome_item} - Imagem ${activeImageIndex + 1}`}
          />
            ) : (
            <Image
            src='https://placehold.co/600x400/orange/white' 
            />
            )}
          <DescriptionWrapper>
            <TextContainer>
              <Title><strong>{item.nome_item}</strong></Title>
              <Title>Categoria: <strong>{item.categoria_item}</strong></Title>
              <Title>Estado de uso: <strong>{item.estado_uso_item}</strong></Title>
              <Description>{item.descricao_item}</Description>
            </TextContainer>
            <InterestedButton>Interessado?</InterestedButton>
          </DescriptionWrapper>
          </FlexContainer>
            ) : (
              <p>Produto não encontrado.</p>  
            )}
        </ItemContainer>
      </Container>
      <DivProdutos images={Object.values(items).filter(p => p.id !== parseInt(id))} />
      <Footer />
    </div>
  );
}

export default Produto;