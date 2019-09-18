import React from 'react';
import { conenct } from 'react-router-dom';
import { createProductListing } from '../../util/product_listing_util';
import ProductListingForm from './product_listing_form';
// import { clearErrors } from '../../actions/product_listing_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: errors.product_listings,
        product: state.entities.products[ownProps.match.params.id],
        formType: 'sell'
    })
}

const mapDispatchToProps = dispatch => ({
    processForm: product_listing => dispatch(createProductListing(product_listing))  //change for BUY
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingForm);