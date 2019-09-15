import React from 'react';

class ProductShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestProduct(this.props.match.params.id)
    }

    render() {
        let {title, condition, last_sale, lowest_ask, highest_bid, image_url, ticker_symbol, colorway, retail_price, release_date, description} = this.props.product;
        // let product = this.props.product;
        console.log('hello', this.props)
        return(
        <div className="product-view"> 
            <div className="product-details-container">product content
                
                <div className="product-title-block">
                    <div className="product-title">{title}</div>
                    <div className="product-condition">{condition}</div>
                    <div className="product-ticker">{ticker_symbol}</div>
                </div>

                <div className="market-summary">
                    <div className="options"></div>
                    <div className="last-sale-block">{last_sale}</div>
                    <div className="lowest-ask">{lowest_ask}</div>
                    <div className="higest-bid">{highest_bid}</div>
                </div>

                <div className="product-image-solo"><img src={image_url}/>
                
                </div>

                <div className="product-info">
                    <div className="product-details-column"></div> 
                    <div className="product-description"><p>{description}</p></div>
                </div>

            </div>

                <div className="product-market-summary"></div>
                <div className="related-products"></div>
                <div className="market-history"></div>

        </div>
        )
    }
}

ProductShow.defaultProps = {
    product: {},
}

export default ProductShow;