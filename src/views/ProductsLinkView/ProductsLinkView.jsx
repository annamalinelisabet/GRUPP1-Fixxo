import React from 'react'
import ProductCardCentered from '../../components/Products/ProductCardCentered';
import "./ProductsLinkView.css";


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
                <ul class="list-group list-group-light list-group-small">
                    <li class="list-group-item">All Categories</li>
                    <li class="list-group-item">Price</li>
                    <li class="list-group-item">Size</li>
                    <li class="list-group-item disabled">Color</li>
                    <li class="list-group-item disabled">Brands</li>
                </ul>
            </div>
            {/*End cat menu */}


            {/* products grid */}
            <div className='col-9'>
                {/* filter functions */}
                <div className='d-flex justify-content-between'>
                    <p className='border'>Filter list selections</p>
                    <p className='border'>Show # selection</p>
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

                {/* Pagination nav */}
                <nav aria-label="...">
                    <ul className="pagination pagination-circle">
                        <li className="page-item">
                            <a className="page-link"><i className="fa-solid fa-angle-left"></i></a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">2 <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#"><i className="fa-solid fa-angle-right"></i></a>
                        </li>
                    </ul>
                </nav>
                {/* End Pagination nav */}

            </div>
            {/*End products grid */}


        </div>  
    
    </div>
  )
}

export default ProductsLinkView