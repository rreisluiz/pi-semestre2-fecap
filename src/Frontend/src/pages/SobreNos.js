import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
import Causa from '../Components/Causa'
import Missao from '../Components/Missao'
import Funcionamento from '../Components/Funcionamento'
import Impacto from '../Components/Impacto'
import Valores from '../Components/Valores'
import Juntese from '../Components/Juntese'

function SobreNos(){
    return(
      <div>
      <Navbar/>
      <Missao />
      <Causa/>
      <Funcionamento />
      <Impacto />
      <Valores />
      <Juntese />
      <Footer/>
      </div>
    )
}
export default SobreNos
