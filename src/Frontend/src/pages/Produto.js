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
  justify-content: space-around; 
  width: 100%; 
  min-height: 20em; 
  padding: 1em;
  box-sizing: border-box; 
`;

const Image = styled.img`
  width: 100%;
  max-height: 30em;
  object-fit: cover;
  border-radius: 20px;
  border-style: groove;
`;

const TextContainer = styled.div`
  text-align: left;
`;

const DonatorContainer = styled.div`
  text-align: center;
  background-color: #2C5431;
  border-radius: 8px;
  color: #fff;
  padding: 20px 0;
`

const ItemInfo = styled.h2`
  font-family:Arial, Helvetica, sans-serif;
  font-style:bold;
  color: #000;
  font-size: 1.2rem;
`;

const DonatorInfo = styled.h2`
  font-family:Arial, Helvetica, sans-serif;
  font-style: bold;
  color: #fff;
  font-size: 1.2rem;
`;

const ItemTitle = styled.h1`
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #2C5431;
  padding: 5px;
  text-align: left;
  border-radius: 8px;
  color: #fff;
  font-style: bold;
  font-size: 1.5rem;
`

const Description = styled.p`
  font-size: 1.2em;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  border-radius: 8px;
  border: 2px solid #2C5431;
  line-height: 1.5;
  padding: 5px;
  height: 80px;
  overflow-y: auto;
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

  const handleInterest = async(item) => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        
        const data = {
          id_item: item.id
        }

        const response = await axios.post(`${apiUrl}/interests/add`, data, config);
        alert(response.data.message)
      }
    }catch (error) {
      alert('Erro ao criar interesse:', error);
    }
  }

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
                <ItemTitle><strong>{item.nome_item}</strong></ItemTitle>
                <ItemInfo>Categoria: <strong>{item.categoria_item}</strong></ItemInfo>
                <ItemInfo>Estado de uso: <strong>{item.estado_uso_item}</strong></ItemInfo>
                <Description>{item.descricao_item}</Description>
              </TextContainer>
              <DonatorContainer>
                <DonatorInfo><strong>{item.nome_usuario}</strong></DonatorInfo>
                <DonatorInfo>{item.email_usuario}</DonatorInfo>
                <DonatorInfo>{item.telefone}</DonatorInfo>
                <DonatorInfo>{item.bairro} - {item.cidade}, {item.uf}</DonatorInfo>
              </DonatorContainer>
              <InterestedButton onClick={() => handleInterest(item)}>Interessado?</InterestedButton>
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