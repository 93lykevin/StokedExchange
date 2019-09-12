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
            <div className="browse-grid">
                <div className="product-item">
                    <ul>
                        {products.map(product => (
                            <ProductIndexItem 
                            key={product.id}
                            product={product} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProductIndex;