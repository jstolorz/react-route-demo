import React from 'react';
import Product from "../components/Product"
import {Link} from "react-router-dom"

const ProductsPage = ({match}) => {
    return (
        <div>
         <h2>Strona produktu</h2>
            <Product name={match.params.name}/>
            <Link to="/products">Powrót do listy produktów</Link>
        </div>
    );
};


export default ProductsPage;