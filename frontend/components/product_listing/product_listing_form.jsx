import React from 'react';

class ProductListingForm extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestProduct(this.props.match.params.id);
    }
    
    render() {
        let product = this.props.product;
        return(
            <div className="ask-page">
                <div className="split-pane">
                    <div className="split">
                        <div className="sixty-from-product pane">
                            <div className="buy-sell-header">
                                <div className="pane-header">
                                    <h1>{product.title}</h1>
                                    <div className="market-summary">
                                        <div className="highest-bid"><span className="gray">Highest Bid</span><span className="bold">${product.highest_bid}</span></div>
                                        <div className="lowest-ask"><span className="gray">Lowest Ask</span><span className="bold">${product.lowest_ask}</span></div>
                                    </div>
                                    <div className="buy-sell-image-container">
                                        <img src={product.image_url} className="buy-sell-image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fourty-create-listing-form pane">
                            <div className="select-size-grid">
                                <div className="select-size-title">Select Size</div>
                                <div className="select-size-subtitle">U.S {product.gender}'s Sizes | Highest Bids</div>
                                <div className="grid-tiles"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ProductListingForm.defaultProps = {
    product: {}
}

export default ProductListingForm