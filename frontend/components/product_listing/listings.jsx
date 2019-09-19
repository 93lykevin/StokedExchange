import React from 'react';
import ListingItem from './listing_item';

class Listings extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProductListings();
    }

    render() {
        return(
            <div className="dashboard-container">
                <div className="dashboard-sidebar"></div>
                
                <div className="dashboard-grid">
                    <div className="stats"></div>

                    <div className="listing-tabs">
                        <div className="tab-list">
                            <div>Current</div>
                            <div>Pending</div>
                            <div>History</div>
                        </div>

                        <div className="tab-content">
                            <div className="current-tab">
                                <div className="current-bids">
                                    <div className="current-bids-header">
                                        <div></div>
                                        <div></div>
                                    </div>

                                    <div className="portfolio-table">
                                        <table className="table">
                                            <thead>
                                                <tr className="portfolio-header">
                                                    <th className="item"></th>
                                                    <th className="bid-price"></th>
                                                    <th className="highest-bid"></th>
                                                    <th className="lowest-ask"></th>
                                                    <th className="expires"></th>
                                                    <th className="update-destroy"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="portfolio-items">
                                                {Object.values(this.props.listings).map(listing => (
                                                    <ListingItem 
                                                    key={listing.id}
                                                    listing={listing}/>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Listings.defaultProps = {
    listings: {}
}

export default Listings