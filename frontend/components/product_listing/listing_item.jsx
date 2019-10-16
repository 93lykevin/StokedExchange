import React from 'react';
import { Link } from 'react-router-dom';

class ListingItem extends React.Component{
  constructor(props){
    super(props)
  }

    render(){
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
            <td className="listing-expires">N/A</td>
            <td className="listing-options">
              <div className="options">
                <Link to={`/buy/${this.props.product.id}`}>
                  <i className="fas fa-credit-card"></i>
                </Link>
                <br/>
                <button>
                  <i className="far fa-edit"></i>
                </button>
                <br/>
                <button onClick={() => this.props.handleDelete(this.props.listing.id)}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
        </React.Fragment>
      )
    }
}

export default ListingItem;