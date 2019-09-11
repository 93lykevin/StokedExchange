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
        return(
            <div className="browse-grid">
                <ul>
                    <div>
                        {this.props.products.map(product => {
                            <ProductIndexItem 
                            key={product.id}
                            product={product} />
                        })}
                    </div>
                </ul>
            </div>
        )
    }
}

export default ProductIndex;