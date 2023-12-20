import {combineReducers,createStore,applyMiddleware } from "redux"
import {composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { drawerReducer } from "./reducers/drawer";
import {productReducer} from "./reducers/product";
import { productDetailReducer } from "./reducers/productDetail";
import { cardReducer } from "./reducers/card";
import { salonReducer } from "./reducers/salon";

let initialState={

}
const reducers = combineReducers({
    drawer:drawerReducer,
    products: productReducer,
    product:productDetailReducer,
    cardItems: cardReducer,
    salon:salonReducer,
    
})

const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)));

export default store;
