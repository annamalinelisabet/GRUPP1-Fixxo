import React from "react";
import ProductCard from "./ProductCard";
import "./products.css";

const ProductList = () => {
  return (
    <section className="product-container mt-5">
      <div className="product-wrapper">
        <h4>Latest Product</h4>
        <div className="product-card mt-4">
          <ProductCard />
        </div>
        <div className="product-card">
          <ProductCard />
        </div>
        <div className="product-card">
          <ProductCard />
        </div>
      </div>
      <div className="product-wrapper">
        <h4>Best Selling Product</h4>
        <div className="product-card mt-4">
          <ProductCard />
        </div>
        <div className="product-card">
          <ProductCard />
        </div>
        <div className="product-card">
          <ProductCard />
        </div>
      </div>
      <div className="product-wrapper">
        <h4>Top Reacted Product</h4>
        <div className="product-card mt-4">
          <ProductCard />
        </div>
        <div className="product-card">
          <ProductCard />
        </div>
        <div className="product-card">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
