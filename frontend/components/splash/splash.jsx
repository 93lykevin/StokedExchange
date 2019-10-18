import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndexItem from '../product/product_index_item';
import Ticker from '../ticker/ticker';

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.requestProducts();
    }

    fiveProducts() {
        let five = [];
        if(Object.keys(this.props.products).length !== 0) {
            five.push(this.props.products[1])
            five.push(this.props.products[13])
            five.push(this.props.products[23])
            five.push(this.props.products[33])
            five.push(this.props.products[43])
        }
        return five;
    }

    fiveProductsTwo() {
        let five = [];
        if (Object.keys(this.props.products).length !== 0) {
            five.push(this.props.products[53])
            five.push(this.props.products[63])
            five.push(this.props.products[73])
            five.push(this.props.products[83])
            five.push(this.props.products[93])
        }
        return five;
    }

    fiveProductsThree() {
        let five = [];
        if (Object.keys(this.props.products).length !== 0) {
            five.push(this.props.products[14])
            five.push(this.props.products[25])
            five.push(this.props.products[36])
            five.push(this.props.products[47])
            five.push(this.props.products[57])
        }
        return five;
    }

    render() {
        let five = this.fiveProducts();
        let fiveTwo = this.fiveProductsTwo();
        let fiveThree = this.fiveProductsThree();
        return(
            <div className="splash">
                <div className="splash-header">
                    <div className="splash-jumbo">
                        <div className="splash-little">THE STOCK MARKET OF THINGS</div>
                        <div className="splash-big">BUY AND SELL AUTHENTIC STREETWEAR</div>
                        <div className="splash-search-container">
                            <div className="splash-search-wrapper">
                                <div className="splash-search-control">
                                    <div className="splash-row">
                                        <div className="splash-searchbar"></div>
                                        {/* <div className="splash-search-browseall"></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="splash-categories">
                            <div>SNEAKERS</div>
                            <div>STREETWEAR</div>
                            <div>HANDBAGS</div>
                            <div>WATCHES</div>
                        </div>
                    </div>
                </div>

                <div className="splash-banner"><img src={window.banner} className="img-banner" /></div>

                <div className="splash-center">
                    <div className="popular-brands-header">Popular Brands</div>

                    <div className="popular-brands-row">
                        <div className="popular-brands-image"><img src={window.supreme} className="img-cover"/></div>
                        <div className="popular-brands-image"><img src={window.offWhite} className="img-cover"/></div>
                        <div className="popular-brands-image"><img src={window.bape} className="img-cover"/></div>
                        <div className="popular-brands-image"><img src={window.balenciaga} className="img-cover"/></div>
                    </div>

                    <div className="popular-brands-header">Most Popular</div>

                    <div className="popular-items">
                        <div className="popular-items-row">
                            {five.map(product => (
                                <ProductIndexItem
                                key={product.id}
                                product={product} />
                            ))}
                        </div>
                    </div>

                    <div className="popular-brands-header">New Lowest Ask</div>

                    <div className="popular-items">
                        <div className="popular-items-row">
                            {fiveTwo.map(product => (
                                <ProductIndexItem
                                    key={product.id}
                                    product={product} />
                            ))}
                        </div>
                    </div>

                    <div className="popular-brands-header">New Highest Bid</div>
                    
                    <div className="popular-items">
                        <div className="popular-items-row">
                            {fiveThree.map(product => (
                                <ProductIndexItem
                                    key={product.id}
                                    product={product} />
                            ))}
                        </div>
                    </div>
                                
                    <div className="browse-button-div">
                        <Link to="/index" className="browse-button">Browse Thousands of Streetwear Items on our Live Marketplace</Link>
                    </div>
                    
                    <div className="new-releases-container">
                        <div className="new-releases-column"></div>
                        <div className="new-releases-items"></div>
                    </div>
                </div>

                <Ticker/>
            </div>
        )
    }
}

Splash.defaultProps={
    products: {}
};

export default Splash;