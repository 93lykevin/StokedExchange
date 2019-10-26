import React from 'react';
import SizeButton from './size_button';
import {withRouter, Redirect} from 'react-router-dom';

//BUY product listing can't specify which exact listing to buy. 
//It will place a bid and then will query the database and remove the listing with the lowest price 
//that matches the productID 
class ProductListingForm extends React.Component {
  constructor(props){
    super(props)

    this.apparelSizes = ['XS', 'S', 'M', 'L', 'XL'];
    this.sneakerSizes = ['4', '4.5', '5', '5.5', '6', 
                        '6.5', '7', '7.5', '8', '8.5', 
                        '9', '9.5', '10', '10.5', '11', 
                        '11.5', '12', '12.5', '13', '14', 
                        '15', '16', '17', '18'];

    if (this.props.match.path === "/edit/:listingId"){
      this.state = {
        size: this.props.location.state.size || "",
        product_id: this.props.location.state.productId || this.props.match.params.id || this.props.productId,
        price: this.props.location.state.price || 0,
        condition: "NEW",
        listing_type: this.props.location.state.listingType || this.props.listingType || "",
        id: this.props.location.state.id
      }
    } else {
      this.state = {
        size: "",
        product_id: this.props.match.params.id,
        price: 0,
        condition: "NEW",
        listing_type: this.props.listingType
      }
    }
    this.handleSelectSize = this.handleSelectSize.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.listingType === 'selling' || this.props.listingType === 'buying') {
      this.props.requestProduct(this.state.product_id);
    } else {
      this.props.requestProduct(this.props.productId)
    }
  }
  
  handleSelectSize(size) { 
    return(
      this.setState({ size: size })
    )
  }

  handleCancel() {
    this.props.history.push('/')
  }

  handleSubmit(e) {
    e.preventDefault();
    const productListing = Object.assign({}, this.state);
    this.props.processForm(productListing);
    if (this.props.listingType === 'selling') {
      this.props.history.push(`/selling`);
    } else if (this.props.listingType === "buying") {
      this.props.history.push('/buying')
    } else {
      this.props.history.push(`/product/${productListing.product_id}`);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  selectSize() {
    let product = this.props.product;
    let sizes = (product.product_category === 'sneakers') ? this.sneakerSizes : this.apparelSizes;
    return(
    <div className="select-size-grid">
      <div className="select-size-title">Select Size</div>
      <div className="select-size-subtitle">U.S {product.gender}'s Sizes | Highest Bids</div>
      <div className="grid-tiles">
        {sizes.map((size, i) => (
          <SizeButton
          key={i}
          size={size}
          handleSelectSize={this.handleSelectSize.bind(this)}/>
        ))}
      </div>
    </div>
  )}

  selectPay() {
    return(
      <form className="pay" onSubmit={this.handleSubmit}>
        <div className="back-to-sizes" onClick={() => this.setState({size: ""})}>
            Back To Sizes
          <div className="buy-sell-size">
            <div className="size-details">
              <img src="" alt=""/>
            </div>
          </div>
        </div>

        <div className="pay-container">
            <div className="ask-or-sell-switch-container">
                <div className="pay-or-sell-switches">
                    <div className="pay-switch"></div>
                    <div className="sell-switch"></div>
                </div>
            </div>

            <div className="price-input-container">
              <div className="price-input">
                <div className="price-input-decoration">$</div>
                <input type="text" className="enter-price" placeholder={"Enter Amount"} onChange={this.update('price')}/>
              </div>
            </div>

          <div className="multi-order-container">
            <div>
              <div className="item-row">
                <div>Discount Code</div>
                <div>
                  <input type="text" className="discount-code-input" placeholder="Add Discount +"/>
                </div>
              </div>
              <div className="item-row">
                <div>Total Payout</div>
                <div>
                  <span className="total-payout">--</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pay-settings">
          <div className="expiration-setting">Ask Expiration: 30Days</div>
          <div className="payout-method">Please Add Payout Method</div>
        </div>
        <div className="product-listing-buttons">
          <button className="product-listing-button cancel" onClick={this.handleCancel}>Cancel</button>
          <input className="product-listing-button submit" type="submit"/>
        </div>
      </form>
    )
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
              {this.state.size === "" ? this.selectSize() : this.selectPay()}
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