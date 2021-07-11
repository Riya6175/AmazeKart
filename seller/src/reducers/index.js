import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import productReducer from "./product.reducer";
import categoryReducer from "./category.reducers";


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    category: categoryReducer

})

export default  rootReducer;