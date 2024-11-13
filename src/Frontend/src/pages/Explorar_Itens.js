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
  const allItens = [
    {
      id: 1,
      images: [guitarra01, guitarra02, guitarra03],
      title: '1º Item',
    },
    {
      id: 2,
      images: [Controle01, Controle02, Controle03],
      title: 'Controle PS4',
    },
    {
      id: 3,
      images: [guitarra01, guitarra02, guitarra03],
      title: '3º Item',
    },
    // Add caso for necessario 
  ];

  const [products, setProducts] = useState(allItens);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  useEffect(() => {
    setProducts(shuffleArray([...allItens]));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % allItens[0].images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
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
