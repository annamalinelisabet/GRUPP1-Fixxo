import { combineReducers } from "redux";
import productDetailReducer from "./productDetailReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
    products: productsReducer,
    productDetail: productDetailReducer
})