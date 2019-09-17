import React from 'react';
import { Link } from 'react-router-dom';
class SearchProduct extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link to={`/product/${this.props.product.id}`}className="search-result">
                <img className="search-result-image" src={this.props.product.image_url}/>
                <div className="search-result-detail">
                    <div className="search-product-title">{this.props.product.title}</div>
                    <div className="search-product-coloway">{this.props.product.colorway}</div>
                </div>
            </Link>
        )
    }
}

export default SearchProduct;