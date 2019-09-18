import React from 'react';
import { Link } from 'react-router-dom';
import SplashRow from "./product_index_item";

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestProducts();
    }

    render() {
        return(
            <div></div>
        )
    }
}