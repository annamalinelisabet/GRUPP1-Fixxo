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
        }, 
        cart: {
            add: 'ADD_TO_CART',
            decrement: 'DECREMENT',
            removeOne: 'REMOVE_ONE',
            clearCart: 'CLEAR_CART'
        }
    }
}

export default actiontypes