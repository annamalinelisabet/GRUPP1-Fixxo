import actiontypes from '../actiontypes'
import axios from 'axios'

export const getProducts = () => {
    return async dispatch => {
        dispatch({
            type: actiontypes().products.getProducts
        })

        try {
            const res = await axios.get('https://fixxobackend.azurewebsites.net/api/products')
            if(res.status === 200) {
                dispatch(getProductsSuccess(res.data))
            } else {
                throw new Error('Could not get the data')
            }
        } catch (err) {
            dispatch(getProductsFailure(err.message))
        }
    }
}

const getProductsSuccess = (products) => {
    return {
        type: actiontypes().products.getProductsSuccess,
        payload: products
    }
}

const getProductsFailure = (err) => {
    return {
        type: actiontypes().products.getProductsFailure,
        payload: err
    }
}