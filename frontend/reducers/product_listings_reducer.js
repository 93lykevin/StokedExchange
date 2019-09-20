import {
    RECEIVE_ALL_LISTINGS,
    RECEIVE_LISTING,
    RECEIVE_BUY_LISTING,
    DELETE_LISTING
} from '../actions/product_listing_actions'
import merge from 'lodash/merge';


const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_LISTINGS:
            newState = Object.assign({}, newState, action.listings)
            return newState
        case RECEIVE_LISTING:
            const newListing = { [action.listing.id]: action.listing }
            newState = merge(newState, newListing)
            return newState;
        case DELETE_LISTING:
            delete newState[action.listing.id];
            return newState;
        default:
            return state;
    }
}

export default listingsReducer