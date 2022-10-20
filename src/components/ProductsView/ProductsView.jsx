import React from 'react'
import { Link } from 'react-router-dom'
import './ProductsView.css'



const ProductsView = () => {
  return (
     

     
      <div className="container mt-5">


    
    <section className="dark-grey-text text-center">
      
      
      <h3 className="font-weight-bold mb-4 pb-2">Our bestsellers</h3>
      
      <p className="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit fugit, error amet numquam iure provident voluptate esse quasi nostrum quisquam eum porro a pariatur veniam.</p>

      
      <div className="row">

        
        <div className="col-lg-3 col-md-6 mb-4">
          
          <div className="card collection-card z-depth-1-half">
            
            <div className="view zoom">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg" className="img-fluid"
                alt=""></img>
              <div className="stripe dark">
                <Link>
                  <p>Trousers
                    <i className="fas fa-angle-right"></i>
                  </p>
                </Link>
              </div>
              
            </div>
            
          </div>
          
        </div>
        

        
        <div className="col-lg-3 col-md-6 mb-4">
          
          <div className="card collection-card z-depth-1-half">
            
            <div className="view zoom">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" className="img-fluid"
                alt=""></img>
              <div className="stripe light">
                <Link>
                  <p>Sweatshirt
                    <i className="fas fa-angle-right"></i>
                  </p>
                </Link>
              </div>
              
            </div>
            
          </div>
          
        </div>
        

        
        <div className="col-lg-3 col-md-6 mb-4">
          
          <div className="card collection-card z-depth-1-half">
            
            <div className="view zoom">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg" className="img-fluid"
                alt=""></img>
              <div className="stripe dark">
                <Link>
                  <p>Black hat
                    <i className="fas fa-angle-right"></i>
                  </p>
                </Link>
              </div>
              
            </div>
            
          </div>
          
        </div>
        

        
        <div className="col-lg-3 col-md-6 mb-4">
          
          <div className="card collection-card z-depth-1-half">
            
            <div className="view zoom">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg" className="img-fluid"
                alt=""></img>
              <div className="stripe light">
                <Link>
                  <p>Sweatshirt
                    <i className="fas fa-angle-right"></i>
                  </p>
                </Link>
              </div>
              
            </div>
            
          </div>
        
        </div>
        

      </div>
      

    </section>
    


  </div>
  
  )
}



export default ProductsView