import React from 'react';
import { connect } from 'react-redux';
import { fetchProductListings } from '../../actions/product_listing_actions';
import Listings from './listings';

const mapStateToProps = state => {
    // debugger
    return({
        user: state.entities.users[state.session.id],
        listings: state.entities.users[state.session.id].product_listings,
        products: state.entities.users[state.session.id].products
    }
)}

const mapDispatchToProps = dispatch => ({
    fetchProductListings: () => dispatch(fetchProductListings())
})

export default connect(mapStateToProps, mapDispatchToProps)(Listings);