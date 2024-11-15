import React, { useEffect, useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import DivProdutos from '../Components/DivProdutos';
import guitarra01 from '../assets/Produtos_Ficticios/guitarra01.jpg';
import guitarra02 from '../assets/Produtos_Ficticios/guitarra02.jpg';
import guitarra03 from '../assets/Produtos_Ficticios/guitarra03.jpg';
import Controle01 from '../assets/Produtos_Ficticios/Controle01.jpg';
import Controle02 from '../assets/Produtos_Ficticios/Controle02.jpg';
import Controle03 from '../assets/Produtos_Ficticios/Controle03.jpg';

function Explorar_Itens() {
  // Lista de itens com suas respectivas imagens, descrições e títulos
  const allItens = [
    {
      id: 1,
      images: [guitarra01, guitarra02, guitarra03],
      title: 'Guitarra Clássica',
    },
    {
      id: 2,
      images: [Controle01, Controle02, Controle03],
      title: 'Controle PS4',
    },
    {
      id: 3,
      images: [guitarra01, guitarra02, guitarra03],
      title: 'Guitarra Elétrica',
    },
    {
      id: 4,
      images: [guitarra01, guitarra02, guitarra03],
      title: 'Guitarra Premium',
    },
    {
      id: 5,
      images: [guitarra01, guitarra02, guitarra03],
      title: 'Guitarra Acessível',
    },
    {
      id: 6,
      images: [guitarra01, guitarra02, guitarra03],
      title: 'Guitarra Exclusiva',
    },
  ];

  // Estado para armazenar a lista de produtos e o índice da imagem ativa
  const [products, setProducts] = useState(allItens);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Função para embaralhar o array de produtos
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  // Efeito para embaralhar a lista de produtos ao carregar o componente
  useEffect(() => {
    setProducts(shuffleArray([...allItens]));
  }, []);

  // Efeito para atualizar o índice da imagem ativa a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % products[0].images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [products]);

  // Atualiza os produtos com o índice da imagem ativa
  const updatedProducts = products.map((product) => ({
    ...product,
    activeImageIndex,
  }));

  return (
    <div>
      <Navbar />
      <DivProdutos images={updatedProducts} />
      <Footer />
    </div>
  );
}

export default Explorar_Itens;