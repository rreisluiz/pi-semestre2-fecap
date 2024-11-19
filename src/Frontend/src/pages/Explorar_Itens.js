import React, { useEffect, useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import styled from 'styled-components';
import DivProdutos from '../Components/DivProdutos';
import axios from 'axios';
import { useApiUrl } from '../context/ApiContext';

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  background-color: #2C5431;
  color: #fff;
  padding: 20px 50px;
`;

function Explorar_Itens() {
  // Lista de itens com suas respectivas imagens, descrições e títulos
  const [items, setItems] = useState([]);
  const apiUrl = useApiUrl()

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

  // Estado para armazenar a lista de produtos e o índice da imagem ativa
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Função para embaralhar o array de produtos
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  // Efeito para embaralhar a lista de produtos ao carregar o componente
  useEffect(() => {
    setItems(shuffleArray([...items]));
  }, []);

  // Efeito para atualizar o índice da imagem ativa a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % items[0].images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [items]);

  // Atualiza os produtos com o índice da imagem ativa
  const updatedItems = items.map((item) => ({
    ...item,
    activeImageIndex,
  }));

  return (
    <div>
      <Navbar />
      <Title>Explorar Itens</Title>
      <DivProdutos images={updatedItems} />
      <Footer />
    </div>
  );
}

export default Explorar_Itens;