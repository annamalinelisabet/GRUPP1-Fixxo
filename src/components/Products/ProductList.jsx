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
        
        <section className="container-lg mt-5 d-flex flex-column justify-content-center align-items-center mb-4 flex-md-column flex-lg-row">
      
        <div className="product-wrapper mt-3 mt-md-3 mt-lg-4">
          <h4 className="text-center text-lg-start">Latest Product</h4>
          <div className="d-flex flex-column flex-sm-row d-md-flex flex-md-row flex-lg-column">
            <div className="product-card ">
            <ProductCard key={product.id} product={product}/> 
            </div>
          </div>
        </div>
       
        <div className="product-wrapper mt-3 mt-md-3 mt-lg-4">
          <h4 className="text-center text-lg-start">Best Selling Product</h4>
          <div className="d-flex flex-column d-sm-flex flex-sm-row d-md-flex flex-md-row flex-lg-column">
            <div className="product-card ">
            <ProductCard key={product.id} product={product}/> 
            </div>
          </div>
        </div>
       
        <div className="product-wrapper mt-3 mt-md-3 mt-lg-4">
          <h4 className=" text-center text-lg-start">Top Reacted Product</h4>
          <div className="d-flex flex-column  d-sm-flex flex-sm-row d-md-flex flex-md-row flex-lg-column">
          <div className="product-card ">
            <ProductCard key={product.id} product={product}/> 
            </div>
          </div>
        </div>
      </section>
      ))}  
    </div>







    // <section className="container-lg mt-5 d-flex flex-column justify-content-center align-items-center mb-4 flex-md-column flex-lg-row">
      
    //   <div className="product-wrapper mt-3 mt-md-3 mt-lg-4">
    //     <h4 className="text-center text-lg-start">Latest Product</h4>
    //     <div className="d-flex flex-column flex-sm-row d-md-flex flex-md-row flex-lg-column">
    //       <div className="product-card ">
    //       <ProductCard key={product.id} product={product}/> 
    //       </div>
    //       <div className="product-card">
    //       <ProductCard key={product.id} product={product}/> 
    //       </div>
    //       <div className="product-card">
    //       <ProductCard key={product.id} product={product}/> 
    //       </div>
    //     </div>
    //   </div>
     
    //   <div className="product-wrapper mt-3 mt-md-3 mt-lg-4">
    //     <h4 className="text-center text-lg-start">Best Selling Product</h4>
    //     <div className="d-flex flex-column d-sm-flex flex-sm-row d-md-flex flex-md-row flex-lg-column">
    //       <div className="product-card">
    //         <ProductCard />
    //       </div>
    //       <div className="product-card">
    //         <ProductCard />
    //       </div>
    //       <div className="product-card">
    //         <ProductCard />
    //       </div>
    //     </div>
    //   </div>
     
    //   <div className="product-wrapper mt-3 mt-md-3 mt-lg-4">
    //     <h4 className=" text-center text-lg-start">Top Reacted Product</h4>
    //     <div className="d-flex flex-column  d-sm-flex flex-sm-row d-md-flex flex-md-row flex-lg-column">
    //       <div className="product-card ">
    //         <ProductCard />
    //       </div>
    //       <div className="product-card">
    //         <ProductCard />
    //       </div>
    //       <div className="product-card">
    //         <ProductCard />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ProductList;
