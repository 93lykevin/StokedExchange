import * as ProdListUtil from '../util/product_listing_util';
export const RECEIVE_ALL_LISTINGS = 'RECEIVE_LIALL_STINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const DELETE_LISTING = 'DELETE_LISTING';

const receiveAllistings = (listings) => ({
    type: RECEIVE_LALL_ISTINGS,
    listings
})

const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
})

const removeListing = (listingId) => ({
    type: DELETE_LISTING,
    listingId
})

export const requestListings = () => dispatch => {
    ProdListUtil.requestListings().then((listings) => dispatch(receiveAllistings(listings)))
}

export const requestListing = (id) => dispatch => {
    ProdListUtil.requestListing(id).then(listing => dispatch(receiveListing(listing)))
}

export const createListing = (listing) =>  dispatch => {
    ProdListUtil.createListing(listing).then(listing => dispatch(receiveListing(listing)))
}

export const updateListing = (listing) => dispatch => {
    ProdListUtil.updateListing(listing).then(listing => dispatch(receiveListing(listing)))
}

export const deleteListing = (id) => dispatch => { 
    ProdListUtil.deleteListing(id).then(listingId => dispatch(removeListing(listingId)))
}
