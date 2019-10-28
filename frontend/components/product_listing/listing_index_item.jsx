import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ListingItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const buyOrSell = this.props.listing.listing_type === "selling" ? "Buy" : "Sell"
    return(
      <React.Fragment>
        <tr className="listing-item">
          <td className="listing-details">
            <Link to={`/product/${this.props.listing.product_id}`}>
              <span className="title">{this.props.product.make}</span>
              <br/>
              <span className="color">{this.props.product.colorway}</span>
              <br/>
              <span className="size">{this.props.listing.size}</span>
            </Link>
          </td>
          <td className={ this.props.listing.price >= this.props.product.highest_bid ? "listing-bid-price" : "listing-bid-price-red"}>${this.props.listing.price}</td>
          <td className="listing-highest-bid">${this.props.product.highest_bid}</td>
          <td className="listing-lowest-ask">${this.props.product.lowest_ask}</td>
          <td className="listing-expires">30 Days</td>
          <td className="listing-options">
            <div className="options">
              <button className="buy-or-sell-button">
                <Link to={`/${buyOrSell.toLocaleLowerCase()}/${this.props.product.id}`}>{buyOrSell}</Link>
              </button>
              <br/>
              <button><Link to={{
                pathname: `/edit/${this.props.listing.id}`,
                state: {
                        productId: this.props.listing.product_id,
                        listingType: this.props.listing.listing_type,
                        listingId: this.props.listing.id,
                        size: this.props.listing.size,
                        price: this.props.listing.price,
                        id: this.props.listing.id
                      }
              }}>
                <i className="fas fa-pencil-alt"></i></Link></button>
              <br/>
              <button onClick={() => this.props.handleDelete(this.props.listing.id)}><i className="far fa-trash-alt"></i></button>
            </div>
          </td>
        </tr>
      </React.Fragment>
    )
  }
}

ListingItem.defaultProps = {
  user: {},
  listings: {},
  products: {}
}

export default withRouter(ListingItem);