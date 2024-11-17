import React from "react";
import styled from "styled-components";
import Navbar from '../Components/Navbar'
import Integrantes from "../Components/Integrantes";
import Footer from "../Components/Footer";

function Siganos(){
    return(
        <div>
            <Navbar />
            <Integrantes />
            <Footer />
        </div>
    )
}
export default Siganos;