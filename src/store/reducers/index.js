import { combineReducers } from "redux";
import productDetailReducer from "./productDetailReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";


export default combineReducers({
    products: productsReducer,
    productDetail: productDetailReducer,
    cartReducer

})