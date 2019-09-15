import React from 'react';
import { Link } from 'react-router-dom';
import { updateProduct } from '../../util/product_api_util';
import { getPicture } from '../../util/stockx_api_util';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }
    

    componentDidMount() {
        // updateItemStockx()
    }
    
    render() {
        return(
            <div className="product-item">
                <div className="product-item-layer">
                <Link to={`product/${this.props.product.id}`}>
                    <div className="product-image-div">
                        <img src={this.props.product.image_url} className="product-image"/>
                    </div>
                    <div className="product-body-div">
                        <div className="product-title">{this.props.product.title}</div>
                        <p>Lowest Ask</p>
                        <div className="product-price">${this.props.product.lowest_ask}</div>
                    </div>
                </Link>
                </div>
            </div>
        )
    }
}
export default ProductIndexItem