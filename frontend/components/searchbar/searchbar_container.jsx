import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { searchProducts } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        products: Object.keys(state.entities.products).map(
            id => state.entities.products[id]
        )
    })
};

const mapDispatchToProps = (dispatch) => ({
    searchProducts: () => dispatch(searchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);