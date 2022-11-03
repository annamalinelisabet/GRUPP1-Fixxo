import React from "react";
import "./products.css";
import { Link } from 'react-router-dom'


import bg from "./img/bg.svg";
import stars from "./img/stars.svg";



// import { Link } from "react-router-dom";

const ProductCardCentered = ({product}) => {
// const ProductCardCentered = () => {
  

    
  return (
      <div className="text-center">

        <div className="">

          {/* <img src={bg} alt="img" className="card-img" />
            <p className="category-text">
              <small className="">Category</small>
            </p>
            <h5 className="title-text">Modern Black Blouse</h5>
            <img src={stars} alt="stars" className="stars" />
            <p className="price-text">
              <b>$35.00</b>
              
            </p> */}
            
           

    {/* gör länk till prod.details på hela "kortet" */}
        <Link to={`/products/${product.id}`}>
        {/* <Link to={'/Details'}> */}
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
