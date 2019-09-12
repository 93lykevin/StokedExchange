import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="product-item">
                <div className="product-item-layer">
                <Link to={`product/${this.props.product.id}`}>
                    <div className="product-image-div">
                        <img src={window.supremeURL} className="product-image"/>
                    </div>
                    <div className="product-body-div">
                        <div className="product-title">{this.props.product.title}</div>
                        <div className="product-price">{this.props.product.retail_price}</div>
                    </div>
                </Link>
                </div>
            </div>
        )
    }
}
export default ProductIndexItem