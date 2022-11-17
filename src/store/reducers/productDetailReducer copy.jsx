import actiontypes from "../actiontypes"

const initState = {
    loading: false,
    error: null,
    data: []
}

const productDetailReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().productDetail.getProductDetail:
            return {
                data: null,
                loading: true,
                error: null
            }
        
        case actiontypes().productDetail.getProductDetailSuccess:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }

        case actiontypes().productDetail.getProductDetailFailure:
            return {
                ...state,
                data: null,
                loading: false,
                error: action.payload

            }

        default:
            return state
    }
}

export default productDetailReducer