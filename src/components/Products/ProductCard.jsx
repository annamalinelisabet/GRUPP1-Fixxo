import React from "react";
import "./products.css";
import { Link } from 'react-router-dom'

import stars from "./img/stars.svg";

const ProductCard = ({product}) => {


  


  return (
     
    <Link to={`/products/${product.id}`}>
        <div className="row d-flex flex-row flex-md-column flex-lg-row justify-content-center align-items-center mb-3">
          <div className="col-6 col-sm-7 col-md-9 col-lg-6">
            <img src={product.image} alt="img" className="card-img" />
          </div>
          <div className="col-6 col-sm-7 col-md-9 col-lg-6 text-center text-lg-start">
            <p className="category-text mb-lg-0">
              <small className="">Category</small>
            </p>
            <h5 className="title-text">{product.name}</h5>
            <img src={stars} alt="stars" className="stars" />
            <p className="price-text">
              <b>{product.name}</b>
            </p>
            
          </div>
        </div>
    </Link>
  );
};

export default ProductCard;
