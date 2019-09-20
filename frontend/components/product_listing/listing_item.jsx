import React from 'react';
import { Link } from 'react-router-dom';

class ListingItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <tr className="listing-item">
            
            <td className="listing-details">
                <Link to={`/product/${this.props.listing.product.id}`}>
                    <span>{this.props.listing.product.title}</span>
                    <span>{this.props.listing.product.size}</span>
                </Link>
            </td>

            <td className="listing-bid-price">{this.props.listing.price}</td>

            <td className="listing-highest-bid">{this.props.product.highest_bid}</td>

            <td className="listing-lowest-ask">{this.props.product.lowest_ask}</td>

            <td className="listing-expires">{this.props.product}</td>

            <td className="listing-options">
                <div className="options">
                    <Link to={`/buy/${this.props.listing.product.id}`}>Buy</Link>
                </div>
            </td>
        </tr>
        )
    }
}

export default ListingItem;