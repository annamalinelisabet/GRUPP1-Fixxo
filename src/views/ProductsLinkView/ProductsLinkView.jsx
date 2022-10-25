import React from 'react'
import ProductCardCentered from '../../components/Products/ProductCardCentered';
import './ProductsLinkView.css';


const ProductsLinkView = () => {
  return (
    <div className='mt-views container'>

    {/* navbar breadcrumbs (gör egen komponent, el hur lägga, 
        den här menyn ska oxå vara på productdetail? Hur strukturerar vi views?)*/}
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">
                            <span><i className="fas fa-home fa-lg"></i></span>
                            </a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Categories</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Product Page</a>
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
                        <li><a className='dropdown-item' href="#">Price Lowest </a></li>
                        <li><a className='dropdown-item' href="#">Price Highest</a></li>
                        <li><a className='dropdown-item' href="#">Alphabetical</a></li>
                        <li><a className='dropdown-item' href="#">Reviews</a></li>
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
                        <li><a className='dropdown-item' href="#">24 </a></li>
                        <li><a className='dropdown-item' href="#">50</a></li>
                        <li><a className='dropdown-item' href="#">100</a></li>
                    </ul>
                  </div>

                </div>

                {/*products grid, 3col 4row */}
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-2'>        
                    <ProductCardCentered />
                    <ProductCardCentered />
                    <ProductCardCentered />
                    <ProductCardCentered />
                    <ProductCardCentered />
                    <ProductCardCentered />
                    <ProductCardCentered />
                </div>
            </div>
            {/*End products grid */}
        </div>  

            {/* Pagination nav */}
            <nav aria-label="pagination more products" className='mt-3 d-flex justify-content-center'>
                <ul className="pagination pagination-circle">
                    <li className="page-item">
                        <a className="page-link"><i className="fa-solid fa-angle-left"></i></a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="#">01 <span className="visually-hidden">(current)</span></a>
                    </li>
                    <li className="page-item" aria-current="page">
                        <a className="page-link" href="#">02</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">03</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#"><i className="fa-solid fa-angle-right"></i></a>
                    </li>
                </ul>
            </nav>
            {/* End Pagination nav */}
    
    </div>
  )
}

export default ProductsLinkView