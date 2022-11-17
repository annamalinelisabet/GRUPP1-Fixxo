import React from "react";
import "./products.css";
import { Link } from 'react-router-dom'
import stars from "./img/stars.svg";


const ProductCardCentered = ({product}) => {
    
  return (
      <div className="text-center">
        <div>        
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt="Product" className="card-img" />
            <p className="category-text">
              <small className="">Category</small>
            </p>
            <h5 className="title-text">{product.name}</h5>
            <img src={stars} alt="stars" className="stars" />   
            <p className="price-text">
              <b>${product.price}</b>
            </p>
          </Link>
        </div>
      </div>
  );
};


export default ProductCardCentered;
