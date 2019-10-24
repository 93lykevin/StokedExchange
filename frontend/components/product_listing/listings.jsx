import React from 'react';
import ListingItem from './listing_item';


//I made 
class Listings extends React.Component{
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    this.props.fetchUserProductListings(this.props.user.id);
  }

  handleDelete(id) {
    this.props.deleteProductListing(id);
  }

  render() {
    return(
      <div className="dashboard-container">
        <div className="dashboard-sidebar"></div>
        
        <div className="dashboard-grid">
          <div className="stats"></div>

          <div className="listing-tabs">
            <div className="tab-list">
              {/* <div>Current</div>
              <div>Pending</div>
              <div>History</div> */}
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
                          <th className="item">Item</th>
                          <th className="bid-price">Bid Price</th>
                          <th className="highest-bid">Highest Bid</th>
                          <th className="lowest-ask">Lowest Ask</th>
                          <th className="expires">Expires</th>
                          <th className="update-destroy">Buy/Edit/Remove</th>
                        </tr>
                      </thead>
                      {Object.values(this.props.listings).map(listing => (
                        <tbody className="portfolio-items" key={listing.id}>
                          <ListingItem 
                          listing={listing}
                          product={this.props.user.products[listing.product_id]}
                          handleDelete={this.handleDelete}/>
                        </tbody>
                      ))}
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
  user: {},
  listings: {},
  products: {}
}

export default Listings