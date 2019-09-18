//BUY LISTING SHALL BE EXTRA
import React from 'react';
import { conenct } from 'react-router-dom';
import { createProductListing } from '../../util/product_listing_util';
import ProductListingForm from './product_listing_form';

const mapStateToProps = (state, ownProps) => {
    return({
        errors: errors.product_listings,
        product: state.entities.products[ownProps.match.params.id],
        formType: 'buy'
    })
}

const mapDispatchToProps = dispatch => ({
    processForm: listing => dispatch(createProductListing(listing)) //change for BUY
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingForm);