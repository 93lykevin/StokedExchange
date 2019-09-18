import * as ProdListUtil from '../util/product_listing_util';
export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const DELETE_LISTING = 'DELETE_LISTING';

const receiveAllListings = (listings) => ({
    type: RECEIVE_ALL_ISTINGS,
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

export const fetchProductListings = () => dispatch => {
    ProdListUtil.fetchProductListings().then((listings) => dispatch(receiveAllListings(listings)))
}

export const fetchProductListing = (id) => dispatch => {
    ProdListUtil.fetchProductListing(id).then(listing => dispatch(receiveListing(listing)))
}

export const createProductListing = (listing) =>  dispatch => {
    ProdListUtil.createProductListing(listing).then(listing => dispatch(receiveListing(listing)))
}

export const updateProductListing = (listing) => dispatch => {
    ProdListUtil.updateProductListing(listing).then(listing => dispatch(receiveListing(listing)))
}

export const deleteProductListing = (id) => dispatch => { 
    ProdListUtil.deleteProductListing(id).then(listingId => dispatch(removeListing(listingId)))
}
