import React from 'react';
import { connect } from 'react-redux';
import { fetchProductListings } from '../../actions/product_listing_actions';
import Listings from './listings';

const mapStateToProps = state => ({
    listings: state.entities.users[state.session.id].product_listings
})

const mapDispatchToProps = dispatch => ({
    fetchProductListings: () => dispatch(fetchProductListings())
})

export default connect(mapStateToProps, mapDispatchToProps)(Listings);