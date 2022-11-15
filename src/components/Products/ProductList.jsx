import React from "react";
import ProductCard from "./ProductCard";
import "./products.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productsActions';



const ProductList = () => {
    
  const dispatch = useDispatch()

    const {data: products, loading} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

  return (
    <div>

    
                      
                    { loading && <p>Loading...</p> }
                      { products.slice(0,3).map(product => (

        <section className="product-container mt-5">
                      
          <div className="product-wrapper">
            <h4>Latest Product</h4>
            <div className="product-card mt-4">
            <ProductCard key={product.id} product={product}/> 
            </div>
          </div>

          <div className="product-wrapper">
            <h4>Best Selling Product</h4>
            <div className="product-card mt-4">
            <ProductCard key={product.id} product={product}/> 
            </div>
          </div>
          <div className="product-wrapper">
            <h4>Top Reacted Product</h4>
            <div className="product-card mt-4">
            <ProductCard key={product.id} product={product}/> 
            </div>
          </div>
        </section>
        
      ))}  
    </div>
  );
};

export default ProductList;
