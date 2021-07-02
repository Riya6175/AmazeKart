import { combineReducers } from "redux";
import { productConstants } from "../actions/constants";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";



const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer
})

export default  rootReducer;