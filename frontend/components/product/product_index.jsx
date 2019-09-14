import React from 'react';
import { Link } from 'react-router-dom'
import ProductIndexItem from "./product_index_item";
import {seedDb}  from '../../util/stockx_api_util';

class ProductIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        seedDb();
        this.props.requestProducts();
    }

    render() {
        let products = this.props.products;
        let brand = this.props.match.path.slice(1);
        return(
            <div className="product-index-container-div">
                <div className="title-container">
                    <div className="title-left">
                        <div className="title-left-text">
                            <h1>STREETWEAR</h1>
                            <h4>Supreme, BAPE, Kith, Palace, Fear of God, KAWS, OFF-WHITE, & more. No lines, no bots, and always authentic. 
                                Shop all the best streetwear right here on StockX.</h4>
                        </div>
                    </div>
                    <div className="title-right"></div>
                </div>
                <div className="products-index-container">

                    <div className="side-nav-container">
                        <div className="side-nav">
                            <ul>
                            <li><Link to="/supreme" onClick={seedDb}>SUPREME</Link></li>
                            <li><Link to="/bape">BAPE</Link></li>
                            <li><Link to="/kith">KITH</Link></li>
                            <li><Link to="/palace">PALACE</Link></li>
                            <li><Link to="/fearofgod">FEAR OF GOD</Link></li>
                            <li><Link to="offwhite">OFF-WHITE</Link></li>
                            <li><Link to="nike">NIKE</Link></li>
                            </ul>
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