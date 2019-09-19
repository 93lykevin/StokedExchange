import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';
import { throws } from 'assert';

class ProductShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // this.props.requestProduct(this.props.match.params.id);
        this.props.requestProducts();
    }

    relatedProducts(category) {
        let related = [];
        let i = 0;
        if (Object.keys(this.props.products).length !== 0) {
            while (related.length < 5) {
                let product_values = Object.values(this.props.products);
                if (product_values[i].product_category === category) {
                    related.push(product_values[i])
                }
                i++;
            }
        }
        return related;
    }

    render() {
        let {title, model,condition, last_sale, lowest_ask, highest_bid, image_url, ticker_symbol, colorway, retail_price, release_date, description, product_category} = this.props.product;
        let related = this.relatedProducts(product_category);
        return(
            <div className="product-view"> 
                <div className="">
                    <div className="hidden-xs"></div>
                    <div className="product-details-container">
                        <div className="product-content">
                            <div className="product-header-block">
                                <div className="product-row">
                                    <div className="product-title">
                                        <h1 className="title-name">{title}</h1>
                                        <div className="title-small">
                                            <div className="product-condition">Condition: <span>New</span></div>
                                            <span className="divider-pipe">|</span>
                                            <div className="product-ticker">Ticker: <span>{ticker_symbol}</span></div>
                                            <span className="divider-pipe">|</span>
                                            <div className="product-auth">100% Authentic</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </div>
                        <div className="market-summary">

                            <div className="options">
                                <div className="dropdown">
                                    <label>Size
                                        <div className="dropdown-content">
                                            <div>6</div>
                                            <div>7</div>
                                            <div>8</div>
                                            <div>9</div>
                                            <div>10</div>
                                            <div>11</div>
                                            <div>12</div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="last-sale-block">
                                <div>
                                    <div className="last-sale">
                                        <h3>Last Sale</h3>
                                        <div className="sale-value">${last_sale}</div>
                                        <div className="last-sale-value">{last_sale - lowest_ask} ({Math.floor((retail_price / last_sale))}%)</div>
                                    </div>
                                    <div className="sale-size">View All Sales</div>
                                </div>
                            </div>

                            <div className="bid-button">
                                <div className="inner">
                                    <Link to={`/buy/${this.props.product.id}`}className="button-container">
                                        <div className="stats">
                                            <div className="stat-value">${lowest_ask}</div>
                                            <h3>Lowest Ask</h3>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="title-buy">
                                            <h2>Buy</h2>
                                            <div className="or-bid">or Bid</div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="sale-size">
                                    <div className="all-asks">
                                        <a href="">View All Asks</a>
                                    </div>
                                </div>
                            </div>

                            <div className="bid-button">
                                <div className="inner">
                                    <Link to={`/sell/${this.props.product.id}`} className="button-container" id="button-container-sell">
                                        <div className="stats">
                                            <div className="stat-value">${highest_bid}</div>
                                            <h3 id="sell">Highest Bid</h3>
                                        </div>
                                        <div className="divider" id="divider-sell"></div>
                                        <div className="title-buy">
                                            <h2>Sell</h2>
                                            <div className="or-bid" id="sell">or Ask</div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="sale-size">
                                    <div className="all-asks">
                                        <a href="">View All Bids</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-image-solo"><img src={image_url} className="image-solo"/></div>

                        <div className="slider">
                            <div className="slider-rail"></div>
                        </div>
                    
                        <div className="product-info">
                            <div className="product-details-column">
                                <div className="detail"><span className="span-title">STYLE</span><span>{model}</span></div>
                                <div className="detail"><span className="span-title">COLORWAY</span><span>{colorway}</span></div>
                                <div className="detail"><span className="span-title">RETAIL PRICE</span><span>${retail_price}</span></div>
                                <div className="detail"><span className="span-title">RELEASE DATE</span><span>{release_date}</span></div>
                            </div> 
                            <div className="product-description"><p>{description}</p></div>
                        </div>
                    </div>
                </div>

                <div className="product-market-summary-wrap">
                    <div className="container">
                        <div className="product-market-summary">
                            <ul>
                                <li>52 WEEK HIGH ${lowest_ask + Math.floor(Math.random() * 20)} | LOW ${highest_bid + Math.floor(Math.random() * -20)}</li>
                                <li>TRADE RANGE (12 MOS.) ${highest_bid + Math.floor(Math.random() * -20)} - ${lowest_ask + Math. floor((Math.random() * 20))}</li>
                                <li>VOLATILITY {(Math.random() *100).toFixed(1)}%</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="related-products-wrap">
                    <div className="container">
                        <div className="related-products">
                           
                            <div className="related-products-banner-container">
                                <div className="related-products-banner">
                                    RELATED PRODUCTS
                                </div>
                            </div>

                            <div className="related-products-tile">
                                {related.map(product => (
                                    <ProductIndexItem 
                                    key={product.id}
                                    product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="market-history-wrap">
                    insert market history graphs and data here
                </div>
                
                <div className="ticker">
                    <h3>Kevin & Mary & Mohit</h3>
                </div>
            </div>
        )
    }
}

ProductShow.defaultProps = {
    product: {},
    products: {}
}

export default ProductShow;