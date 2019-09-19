import React from 'react';
import { connect } from 'react-redux';
import { deleteProductListing } from '../../util/product_listing_util';
import ProductListingForm from './product_listing_form';
import { requestProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        product: state.entities.products[ownProps.match.params.id],
        productListings: state.entities.productListings,
        errors: state.errors.product_listings,
        userId: state.session.id,
        formType: 'buy'
    })
}

const mapDispatchToProps = dispatch => ({
    requestProduct: (id) => dispatch(requestProduct(id)),
    processForm: productListing => dispatch(deleteProductListing(productListing))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingForm);