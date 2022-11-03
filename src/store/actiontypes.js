const actiontypes = () => {
    return {
        products: {
            getProducts: 'GET_PRODUCTS',
            getProductsSuccess: 'GET_PRODUCTS_SUCCESS',
            getProductsFailure: 'GET_PRODUCTS_FAILURE'
        },
        productDetail: {
            getProductDetail: 'GET_PRODUCT_DETAIL',
            getProductDetailSuccess: 'GET_PRODUCT_DETAIL_SUCCESS',
            getProductDetailFailure: 'GET_PRODUCT_DETAIL_FAILURE',
        }
    }
}

export default actiontypes