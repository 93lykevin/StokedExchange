import React from 'react';
import { connect } from 'react-redux';
import { fetchProductListings } from '../../actions/product_listing_actions';
import { requestProducts } from '../../actions/product_actions'; 
import Listings from './listings';

const mapStateToProps = state => {
    return({
        user: state.entities.users[state.session.id],
        listings: state.entities.users[state.session.id].productListings,
        products: state.entities.users[state.session.id].products
    }
)}

const mapDispatchToProps = dispatch => ({
    fetchProductListings: () => dispatch(fetchProductListings()),
    requestProducts: () => dispatch(requestProducts()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Listings);