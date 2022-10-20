import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import "./HomeView.css";
import News from "../../components/News/News";
import Inspiration from "../../components/Inspiration/Inspiration";
import SupportInfo from "../../components/Support&Info/SupportInfo";
import ProductList from "../../components/Products/ProductList";

const Home = () => {
  return (
    <div className="Home">
      <div>
        <Hero />
        <News />
        <Inspiration />
      </div>
      <div>
        <ProductList />
        <SupportInfo />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
