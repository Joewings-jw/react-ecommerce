import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {productListReducer, productDetailsReducer} from '../reducers/productReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})



const middleware = [thunk]

const store = createStore(reducer,applyMiddleware(...middleware))

export default store