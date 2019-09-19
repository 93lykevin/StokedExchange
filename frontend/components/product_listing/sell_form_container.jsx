import React from 'react';
import { connect } from 'react-redux';
import { createProductListing } from '../../actions/product_listing_actions';
import ProductListingForm from './product_listing_form';
import { requestProduct } from '../../actions/product_actions';
// import { clearErrors } from '../../actions/product_listing_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        product: state.entities.products[ownProps.match.params.id],
        productListings: state.entities.productListings,
        errors: state.errors.product_listings,
        userId: state.session.id,
        formType: 'sell'
    })
}

const mapDispatchToProps = dispatch => ({
    requestProduct: (id) => dispatch(requestProduct(id)),
    processForm: productListing => dispatch(createProductListing(productListing))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingForm);