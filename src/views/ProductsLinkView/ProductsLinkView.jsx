import React from 'react'
import ProductCardCentered from '../../components/Products/ProductCardCentered';
import './ProductsLinkView.css';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productsActions';


const ProductsLinkView = () => {

    const dispatch = useDispatch()

    const {data: products, loading} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

  return (
    <div className='mt-views container'>
    {/* navbar breadcrumbs (gör egen komponent, el hur lägga, 
        den här menyn ska oxå vara på productdetail? Hur strukturerar vi views?)*/}
        <nav className="navbar navbar-expand-lg navbar-light shadow-none">
            <div className="">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">
                            <span><i className="fas fa-home fa-lg"></i></span>
                            </a>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="#">Categories</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="#">Product Page</Link>
                        </li>
                    </ol>
                </nav>
            </div>
        </nav>
    {/* end navbar breadcrumbs */}

    {/* två kolumner, cat menu tv, products grid th */}
        <div className='pt-3 d-flex'> 
            {/*cat menu */}
            <div className='col-3'>
                <ul className="list-group list-group-light list-group-small">
                    <li className="list-group-item">All Categories</li>
                        <ul className='sublist'>
                            <li className='sublist-item'>T-shirts</li>
                            <li className='sublist-item'>Pants</li>
                            <li className='sublist-item'>Jackets</li>
                        </ul>
                    <li className="list-group-item">Price</li>

                    <li className="list-group-item">Size</li>
                        <ul className='sublist'>
                            <li className='sublist-item'>Small</li>
                            <li className='sublist-item'>Medium</li>
                            <li className='sublist-item'>Large</li>
                        </ul>
                    <li className="list-group-item disabled">Color</li>
                    <li className="list-group-item disabled">Brands</li>
                    
                </ul>
            </div>
            {/*End cat menu */}


            {/* products grid */}
            <div className='col-9'>
                {/* filter functions */}
                <div className='d-flex justify-content-between'>
                  {/*Sort by function  */}
                  <div className=''>
                    <button type="button" className="btn-list btn-left">Most Popular</button>
                    <button
                        type="button"
                        className="btn-list btn-right dropdown-toggle dropdown-toggle-split"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className='dropdown-menu dropdown-menu-end'>
                        <li><Link className='dropdown-item' to="#">Price Lowest </Link></li>
                        <li><Link className='dropdown-item' to="#">Price Highest</Link></li>
                        <li><Link className='dropdown-item' to="#">Alphabetical</Link></li>
                        <li><Link className='dropdown-item' to="#">Reviews</Link></li>
                    </ul>
                  </div>

                    {/* Show # of products function */}
                  <div className=''>
                    <small>Show: </small>
                    <button type="button" className="btn-list btn-left btn-small">12</button>

                    <button
                        type="button"
                        className="btn-list btn-right dropdown-toggle dropdown-toggle-split"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className='dropdown-menu dropdown-menu-end text-end'>
                        <li><Link className='dropdown-item' to="#">24 </Link></li>
                        <li><Link className='dropdown-item' to="#">50</Link></li>
                        <li><Link className='dropdown-item' to="#">100</Link></li>
                    </ul>
                  </div>

                </div>

                {/*products grid, 3col 4row */}
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-2'>   
                    { loading && <p>Loading...</p> }
                    { products.map(product => (
                        <ProductCardCentered key={product.id} product={product}/>                        
                    ))}  
                </div>
            </div>
            {/*End products grid */}
        </div>  

            {/* Pagination nav */}
            <nav aria-label="pagination more products" className='mt-3 d-flex justify-content-center'>
                <ul className="pagination pagination-circle">
                    <li className="page-item">
                        <Link className="page-link"><i className="fa-solid fa-angle-left"></i></Link>
                    </li>
                    <li className="page-item active">
                        <Link className="page-link" to="#">01 <span className="visually-hidden">(current)</span></Link>
                    </li>
                    <li className="page-item" aria-current="page">
                        <Link className="page-link" to="#">02</Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="#">03</Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="#"><i className="fa-solid fa-angle-right"></i></Link>
                    </li>
                </ul>
            </nav>
            {/* End Pagination nav */}
    
    </div>
  )
}

export default ProductsLinkView

