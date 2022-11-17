import { useState } from 'react'
import ProductCardCentered from '../../components/Products/ProductCardCentered';
import './ProductsLinkView.css';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productsActions';


const ProductsLinkView = () => {

    const dispatch = useDispatch()

    const {data: products, loading} = useSelector(state => state.products)
    const [filter, setFilter] = useState(0)

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
                        {/* <li className="breadcrumb-item">
                            <Link to="#">Categories</Link>
                        </li> */}
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
                    <li className="list-group-item">Filter</li>
                        <ul className='sublist'>
                            <li className='sublist-item' onClick={() => {setFilter(2)}}>T-shirts</li>
                            <li className='sublist-item' onClick={() => {setFilter(1)}}>Pants</li>
                            <li className='sublist-item' onClick={() => {setFilter(3)}}>Jackets</li>
                            <li className='sublist-item' onClick={() => {setFilter(0)}}>Show all</li>
                        </ul>
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
                </div>

                {/*products grid, 3col 4row */}
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-2'>   
                    { loading && <p>Loading...</p> }
                    {           
                        filter === 0    ? products.map(product => (<ProductCardCentered key={product.id} product={product}/> )) 
                                        : products.filter(filteredProduct => filteredProduct.categoryId === filter).map(filteredProduct => (<ProductCardCentered key={filteredProduct.id} product={filteredProduct}/> )) 
                    }                      
                </div>
            </div>
            {/*End products grid */}
        </div>      
    </div>
  )
}

export default ProductsLinkView

