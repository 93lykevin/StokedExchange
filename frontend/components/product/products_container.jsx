import React from './react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    products: asArray(state.entities.products)
}
const mapDispatchToProps = dispatch => {
    
}