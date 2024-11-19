import React from "react";
import ProductList from './ProductList'

function ProdutosCadastrados({user}) {
    return (
      <div>
        <ProductList user={user}/>
      </div>
    );
  }
  
  export default ProdutosCadastrados;