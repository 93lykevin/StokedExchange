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
                    <div className="title-left">
                        <div className="title-left-text">
                            <h1>STREETWARE</h1>
                            <h4>Supreme, BAPE, Kith, Palace, Fear of God, KAWS, OFF-WHITE, & more. No lines, no bots, and always authentic. 
                                Shop all the best streetwear right here on StockX.</h4>
                        </div>
                    </div>
                    <div className="title-right"></div>
                </div>
                <div className="products-index-container">

                    <div className="side-nav-container">
                        <div className="side-nav">
                            
                            <a href="">SUPREME</a>
                            <a href="">BAPE</a>
                            <a href="">KITH</a>
                            <a href="">PALACE</a>
                            <a href="">FEAR OF GOD</a>
                            <a href="">OFF-WHITE</a>
                            <a href="">NIKE</a>
                        </div>

                    </div>
                    <div className="browse-grid">
                        {products.map(product => (
                            <ProductIndexItem 
                            key={product.id}
                            product={product} />
                        ))}
                    </div>
                </div>
                <div className="ticker">
                    <h3>Kevin & Mary & Mohit</h3>
                </div>
            </div>
        )
    }
}

export default ProductIndex;