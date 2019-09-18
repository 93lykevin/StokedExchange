import React from 'react';
import { connect } from 'react-redux';
import { createProductListing } from '../../util/product_listing_util';
import ProductListingForm from './product_listing_form';
// import { clearErrors } from '../../actions/product_listing_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: errors.product_listings,
        userId: state.session.currentUser.id,
        product: state.entities.products[ownProps.match.params.id],
        formType: 'buy'
    })
}

const mapDispatchToProps = dispatch => ({
    // processForm: productListing => dispatch(createProductListing(productListing)) //change for BUY
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingForm);