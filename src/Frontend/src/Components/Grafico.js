import React from "react";
import barra from '../assets/barra.png';
import Pizza from '../assets/Pizza.png';
import styled from "styled-components";

const StyledGraphicBox = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 140px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 0;
  }

  .grafico-item {
    flex: 1;
    text-align: center;
    margin: 0 20px;
    position: relative;
  }

  .graficoBarra,
  .graficoPizza {
    width: 100%;
    height: auto;
    max-width: 700px; /* Ajuste para manter os gráficos do mesmo tamanho */
    z-index: 1;
    position: relative;
  }

  .descricaoBarra {
    text-align: justify;
    font-size: 16px;
    line-height: 24px;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 40px;
  }

  .descricaoPizza {
    text-align: justify;
    font-size: 16px;
    line-height: 24px;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 92px;
  }
`;

export const GraphicBox = () => {
  return (
    <StyledGraphicBox>
      <div className="container">
        <div className="grafico-item">
          <img className="graficoBarra" alt="Gráfico de Máximos e Mínimos" src={barra} />
          <div className="descricaoBarra">
            <h3>Gráfico de Máximos e Mínimos de Descarte de Resíduos Têxteis</h3>
            <p>
              Descrição: Este gráfico analisa a quantidade estimada de resíduos têxteis descartados no Brasil, destacando os máximos (cenário atual) e mínimos ideais até 2050. Os dados, provenientes da Abrelpe e da International Solid Waste Association (ISWA), evidenciam a urgência de práticas sustentáveis na moda e servem como um alerta para mudanças no comportamento do consumidor. Desenvolvido por nós, grupo RepassEco.
            </p>
          </div>
        </div>
        <div className="grafico-item">
          <img className="graficoPizza" alt="Gráfico de Pizza sobre Reciclagem" src={Pizza} />
          <div className="descricaoPizza">
            <h3>Gráfico de Pizza sobre Reciclagem de Têxteis (Roupas)</h3>
            <p>
              Descrição: O gráfico de pizza mostra a proporção de roupas descartadas no Brasil, com 20% reciclados/reaproveitados e 80% não reciclados. Os dados, também oriundos da Abrelpe e da International Solid Waste Association (ISWA), destacam a ineficácia das práticas atuais de reciclagem, sublinhando a importância de ações para promover a reutilização e gestão adequada dos resíduos têxteis. Desenvolvido por nós, Grupo RepassEco.
            </p>
          </div>
        </div>
      </div>
    </StyledGraphicBox>
  );
};

export default GraphicBox;
