import React from "react";
import "./products.css";
import { Link } from 'react-router-dom'

import stars from "./img/stars.svg";

const ProductCard = ({product}) => {


  


  return (
     
    <Link to={`/products/${product.id}`}>

      
    
    <div className="col">
      <div className="">
        <div className="row">
          <div className="col-6">
          
            <img src={product.image} alt="img" className="card-img" />
          </div>
          <div className="col-6">
            <p className="category-text">
              <small className="">Category</small>
            </p>
            <h5 className="title-text">{product.name}</h5>
            <img src={stars} alt="stars" className="stars" />
            <p className="price-text">
              <b>{product.name}</b>
            </p>
            
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
