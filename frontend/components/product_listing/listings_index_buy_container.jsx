import React from 'react';
import { connect } from 'react-redux';
import { fetchUserProductListings, deleteProductListing } from '../../actions/product_listing_actions';
import { requestProducts } from '../../actions/product_actions'; 
import Listings from './listings';

const mapStateToProps = state => {
  return({
    user: state.entities.users[state.session.id],
    listings: state.entities.productListings, //this is my current user's listings
    listingType: "buying"
  }
)}

const mapDispatchToProps = dispatch => ({
  fetchUserProductListings: (id) => dispatch(fetchUserProductListings(id)),
  requestProducts: () => dispatch(requestProducts()),
  deleteProductListing: (id) => dispatch(deleteProductListing(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Listings);