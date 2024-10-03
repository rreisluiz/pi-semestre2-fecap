import React from 'react';
import Navbar from "../Components/Navbar";
import Box from '../Components/textPrincipal'
import GraphicBox from '../Components/Grafico';
import DivsobreNos from '../Components/DivsobreNos';
import Footer from '../Components/Footer'

function Home (){
    return(
        <div>
            <Navbar/>
            <Box/>
            <GraphicBox />
            <DivsobreNos/>
            <Footer/>
        </div>

    )
}
export default Home