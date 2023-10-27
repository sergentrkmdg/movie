import {combineReducers,createStore,applyMiddleware } from "redux"
import {composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { drawerReducer } from "./reducers/drawer";
import {productReducer} from "./reducers/product";

let initialState={

}
const reducers = combineReducers({
    drawer:drawerReducer,
    products: productReducer
})

const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)));

export default store;