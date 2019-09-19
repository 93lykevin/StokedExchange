import React from 'react';
import { Link } from 'react-router-dom';

export default ListingItem = () => {
    <div className="listing-item">
        
        <div className="listing-details">
            <Link to={`/product/${this.props.product.id}`}>
                <span>{this.props.product.title}</span>
                <span>{this.props.product.size}</span>
            </Link>
        </div>

        <div className="listing-bid-price"></div>

        <div className="listing-highest-bid"></div>

        <div className="listing-lowest-ask"></div>

        <div className="listing-expires"></div>

        <div className="listing-options"></div>

    </div>
}

