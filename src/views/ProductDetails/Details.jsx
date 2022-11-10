import React from 'react'
import NavDetails from '../../components/ProductDetails/NavDetails';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../store/actions/productDetailActions';
import { useParams } from 'react-router-dom'


const Details = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch, id])

  const productDetail = useSelector(state => state.productDetail.data)

  return (
    
    <div className="container my-5 py-5 z-depth-1">
    { productDetail && 
    <section className="text-center">
      <h3 className="font-weight-bold mb-5">Product Details</h3>
  
      <div className="row">
  
        <div className="col-lg-6">
  
          <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
  
            <div className="carousel-inner text-center text-md-left" role="listbox">
              <div className="carousel-item active">
                <img src={productDetail.image}
                  alt="First slide" className="img-fluid"/>
              </div>
              <div className="carousel-item">
                <img src={productDetail.image}
                  alt="Second slide" className="img-fluid"/>
              </div>
              <div className="carousel-item">
                <img src={productDetail.image}
                  alt="Third slide" className="img-fluid"/>
              </div>
            </div>
  
            <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
  
          </div>
  
        </div>
  
        <div className="col-lg-5 text-center text-md-left">
  
          <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
            <strong>{productDetail.name}</strong>
          </h2>
          <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
          <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
            <span className="red-text font-weight-bold">
              <strong>${productDetail.price}</strong>
            </span>
            {/* <span className="grey-text">
              <small>
                <s>300 kr</s>
              </small>
            </span> */}
          </h3>
          
  
          
  
          <section className="color">
            <div className="mt-5">
              <p className="grey-text">Choose your size</p>
              <div className="row text-center text-md-left">
  
                <div className="col-md-4 col-12">
                  <div className="form-group">
                    <input className="form-check-input" name="group100" type="radio" id="radio100" checked="checked"/>
                    <label for="radio100" className="form-check-label dark-grey-text">Small</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input className="form-check-input" name="group100" type="radio" id="radio101"/>
                    <label for="radio101" className="form-check-label dark-grey-text">Medium</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input className="form-check-input" name="group100" type="radio" id="radio102"/>
                    <label for="radio102" className="form-check-label dark-grey-text">Larg</label>
                  </div>
                </div>
              </div>
  
              <div className="row mt-3">
                <div className="col-md-12 text-center text-md-left text-md-right">
                  <button className="btn btn-news btn-rounded">Shoop New</button>
                </div>
              </div>
            </div>
          </section>
  
        </div>
  
      </div>
  
    <NavDetails />
    </section>

    }
  
  
  </div>
    
  )
}

export default Details