import React from 'react';

class Listings extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProductListings;
    }

    render(){

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
                                        <div className="portfolio-header"></div>
                                        <div className="portfolio-items">
                                            INSERT LISTING_ITEMS HERE
                                        </div>
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

export default Listings