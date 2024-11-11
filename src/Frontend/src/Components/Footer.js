import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IconInstagram from '../assets/instagram.png';
import IconLinkedin from '../assets/linkedin.png';
import IconGithub from '../assets/github.png';
import Logo from '../assets/logo-rdbrasil-1.png'; 

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background-color: #2d572c; 
  color: #ffffff; 
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin-top: 120px; 
  height: 616px;
  position: relative; 

  .logo-container {
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    margin-bottom: 20px;
    margin-left: 20px; 
    margin-top: 40px; 
  }

  .logo {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      width: 163px; 
      height: 107px; 
    }
  }

  .column {
    display: flex;
    flex-direction: column;

    h5 {
      margin-bottom: 10px;
      font-weight: bold;
    }

    a {
      color: #ffffff; 
      text-decoration: none; 
      margin-bottom: 5px;
    }

    a:hover {
      text-decoration: underline; 
    }
  }

  .social-media {
    display: flex;
    flex-direction: column;
    align-items: center; 

    h5 {
      margin-bottom: 10px;
      font-size: 24px; 
      text-align: center; 
      margin-top: 60px; 
      margin-right: 65px; 
    }

    .footer-icons {
      display: flex;
      align-items: center; 
      margin-top: 60px; 
      gap: 44px; 
      margin-right: 65px; 
    }

    .feedback-container {
      display: flex; 
      flex-direction: column; 
      margin-top: 20px; 
      margin-right: 180px;
      color: #ffffff; 
      font-size: 14px;
      align-items: flex-start; 
      
      span {
        margin-bottom: 20px;
        text-decoration: underline; 
        cursor: pointer;
      }
    }
  }

  .footer-bottom {
    position: absolute; 
    left: 50%; 
    bottom: 20px; 
    transform: translateX(-50%); 
    text-align: center;
    font-size: 12px;
  }
`;

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #B88162;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 60px;  
  height: 60px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1); 
  }
`;


const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10); 
    }
  };

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <FooterContainer>
        <div className="logo-container">
          <div className="logo">
            <img src={Logo} alt="Logo RD Brasil" /> 
          </div>
          <div className="column">
            <h5>Política de privacidade e termos de uso</h5>
            <h5>Meio de contato</h5>
            <a href="mailto:RD.Brasil@gmail.com">RD.Brasil@gmail.com</a>
            <h5>Suporte</h5>
            <h5>Endereço</h5>
            <p>Av. da Liberdade, 532 - Liberdade, São Paulo - SP 01502-001</p>
          </div>
        </div>
        <div className="social-media">
          <h5>SIGA-NOS</h5>
          <div className="footer-icons">
            <img src={IconInstagram} alt="Instagram" />
            <img src={IconLinkedin} alt="LinkedIn" />
            <img src={IconGithub} alt="GitHub" />
          </div>
          <div className="feedback-container">
            <span href="#">Deixe seu feedback</span>
            <span onClick={scrollToTop}>Voltar ao topo</span>
          </div>
        </div>
        <div className="footer-bottom">© 2024 RD Brasil.</div>
      </FooterContainer>
      {showButton && (
        <BackToTopButton onClick={scrollToTop}>↑</BackToTopButton>
      )}
    </>
  );
};

export default Footer;
