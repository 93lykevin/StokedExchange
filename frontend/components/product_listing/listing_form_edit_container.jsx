import React from 'react';
import { connect } from 'react-redux';
import ListingForm from './listing_form';
import {updateProductListing} from '../../actions/product_listing_actions';
import { requestProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    userId: state.session.id,
    listing: state.entities.productListings[ownProps.match.params.listingId],
    product: state.entities.products[ownProps.location.state.productId], 
    productListings: state.entities.productListings,
    productId: ownProps.location.state.productId,
    errors: state.errors.product_listings,
    listingType: ownProps.location.state.listingType
  }) 
}

const mapDispatchToProps = dispatch => ({
  requestProduct: (id) => dispatch(requestProduct(id)),
  processForm: (productListing) => dispatch(updateProductListing(productListing))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);