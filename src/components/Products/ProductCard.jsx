import React from "react";
import "./products.css";




import bg from "./img/bg.svg";
import stars from "./img/stars.svg";

const ProductCard = () => {
  return (
   
    <div className="col">
      <div className="">
        <div className="row d-flex flex-row flex-md-column flex-lg-row justify-content-center align-items-center">
          <div className="col-6 col-sm-7 col-md-9 col-lg-6">
            <img src={bg} alt="img" className="card-img" />
          </div>
          <div className="col-6 col-sm-7 col-md-9 col-lg-6 text-center text-lg-start">
            <p className="category-text mb-lg-0">
              <small className="">Category</small>
            </p>
            <h5 className="title-text">Modern Black Blouse</h5>
            <img src={stars} alt="stars" className="stars" />
            <p className="price-text">
              <b>$35.00</b>
            </p>
            
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProductCard;
