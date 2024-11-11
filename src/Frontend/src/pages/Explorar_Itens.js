import React, { useEffect, useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import DivProdutos from '../Components/DivProdutos';


function Explorar_Itens() {
  const allItens = [
    {
      id: 1,
      images: [
        { src: 'https://placehold.co/600x400/000000/FFFFFF/png', alt: '1º Item - Imagem 1' },
        { src: 'https://placehold.co/600x400/6A5ACD/FFFFFF/png', alt: '1º Item - Imagem 2' },
        { src: 'https://placehold.co/600x400/006400/FFFFFF/png', alt: '1º Item - Imagem 3' }
      ],
      text: '1º Item'
    },
    {
      id: 2,
      images: [
        { src: 'https://placehold.co/600x400/000000/FFFFFF/png', alt: '2º Item - Imagem 1' },
        { src: 'https://placehold.co/600x400/6A5ACD/FFFFFF/png', alt: '2º Item - Imagem 2' },
        { src: 'https://placehold.co/600x400/006400/FFFFFF/png', alt: '2º Item - Imagem 3' }
      ],
      text: '2º Item'
    },
    {
      id: 3,
      images: [
        { src: 'https://placehold.co/600x400/000000/FFFFFF/png', alt: '3º Item - Imagem 1' },
        { src: 'https://placehold.co/600x400/6A5ACD/FFFFFF/png', alt: '3º Item - Imagem 2' },
        { src: 'https://placehold.co/600x400/006400/FFFFFF/png', alt: '3º Item - Imagem 3' }
      ],
      text: '3º Item'
      
    },
    {
        id: 4,
        images: [
          { src: 'https://placehold.co/600x400/000000/FFFFFF/png', alt: '4º Item - Imagem 1' },
          { src: 'https://placehold.co/600x400/6A5ACD/FFFFFF/png', alt: '4º Item - Imagem 2' },
          { src: 'https://placehold.co/600x400/006400/FFFFFF/png', alt: '4º Item - Imagem 3' }
        ],
        text: '4º Item'
        
      },
      {
        id: 5,
        images: [
          { src: 'https://placehold.co/600x400/000000/FFFFFF/png', alt: '5º Item - Imagem 1' },
          { src: 'https://placehold.co/600x400/6A5ACD/FFFFFF/png', alt: '5º Item - Imagem 2' },
          { src: 'https://placehold.co/600x400/006400/FFFFFF/png', alt: '5º Item - Imagem 3' }
        ],
        text: '5º Item'
        
      },
      {
        id: 6,
        images: [
          { src: 'https://placehold.co/600x400/000000/FFFFFF/png', alt: '6º Item - Imagem 1' },
          { src: 'https://placehold.co/600x400/6A5ACD/FFFFFF/png', alt: '6º Item - Imagem 2' },
          { src: 'https://placehold.co/600x400/006400/FFFFFF/png', alt: '6º Item - Imagem 3' }
        ],
        text: '6º Item'
        
      },
  ];

  const [products, setProducts] = useState(allItens);
  
  // Estado para controlar a imagem ativa do item 1
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Função para embaralhar os itens aleatoriamente
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    // Embaralhar os itens e definir no estado
    setProducts(shuffleArray([...allItens]));
  }, []);

  useEffect(() => {
    // Alterar a imagem a cada 3 segundos (3000ms) apenas para o produto com id 1
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % allItens[0].images.length); // Alterna a imagem
    }, 3000); // Intervalo de 3 segundos

    return () => clearInterval(interval); // Limpar o intervalo quando o componente for desmontado
  }, []);

  // Atualizar as imagens do produto com id 1
  const updatedProducts = products.map((product) => {
    if (product.id === 1) {
      return {
        ...product,
        images: product.images.map((image, index) => ({
          ...image,
          active: index === activeImageIndex, // Definindo qual imagem está ativa
        })),
      };
    }
    return product;
  });

  return (
    <div>
      <Navbar />
      <DivProdutos images={updatedProducts} />
      <Footer />
    </div>
  );
}

export default Explorar_Itens;