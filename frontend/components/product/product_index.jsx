import React from 'react';
import { Link } from 'react-router-dom'
import ProductIndexItem from "./product_index_item";

class ProductIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestProducts();
    }

    render() {
        let products = this.props.products;
        return(
            <div className="product-index-container-div">
                <div className="title-container">
                </div>

                <div className="browse-grid">
                    {products.map(product => (
                        <ProductIndexItem 
                        key={product.id}
                        product={product} />
                    ))}
                </div>
                <div className="ticker">
                    <h3>Kevin & Mary & Mohit</h3>
                </div>
            </div>
        )
    }
}

export default ProductIndex;