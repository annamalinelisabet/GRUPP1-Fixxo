import actiontypes from "../actiontypes";
import axios from 'axios'

export const getProductById = (id) => {
    return async dispatch => {
        dispatch(getProductDetail())

        try {
            const res = await axios.get('https://fixxobackend.azurewebsites.net/api/products/' + id)
            if(res.status === 200) {
                dispatch(getProductDetailSuccess(res.data))
            } else {
                throw new Error('Could not get the data')
            }
        } 
        catch (err) {
            dispatch(getProductDetailFailure(err.message))
        }
    }
} 

const getProductDetail = () => {
    return {
        type: actiontypes().productDetail.getProductDetail
    }
}

const getProductDetailSuccess = (productDetail) => {
    return {
        type: actiontypes().productDetail.getProductDetailSuccess,
        payload: productDetail
    }
}

const getProductDetailFailure = (err) => {
    return {
        type: actiontypes().productDetail.getProductDetailFailure,
        payload: err
    }
}