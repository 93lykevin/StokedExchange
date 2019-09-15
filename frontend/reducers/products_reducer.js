import { 
    RECEIVE_ALL_PRODUCTS,
    RECEIVE_PRODUCT,
    DELETE_PRODUCT 
}  from '../actions/product_actions'
import merge from 'lodash/merge';

    
const productsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            newState = action.products
            return newState
        case RECEIVE_PRODUCT:
            const newProduct = { [action.product.id]: action.product }
            newState = merge(newState, newProduct)
            return newState;
        case DELETE_PRODUCT:
            delete newState[action.product.id];
            return newState;
        default:
            return state;
    }
}

export default productsReducer