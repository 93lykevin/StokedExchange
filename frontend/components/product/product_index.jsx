// todo: 1. separate out side and header. they should be their own thing...
//       2. Add pagination into the browse grid. then the page should be good
import React from 'react';
import { Link } from 'react-router-dom'
import ProductIndexItem from "./product_index_item";
import ProductSideNav from './product_side_nav';
import Ticker from '../ticker/ticker';
import {seedDb}  from '../../util/stockx_api_util';
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");

class ProductIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  componentDidMount() {
    // seedDb();   //REMOVE THIS LATER. THIS IS JUST FOR TESTING. MOVE THIS TO INDIVIDUAL PRODUCT
    this.props.requestProducts(); 
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber})
  }

  render() {
    let products = this.props.products;
    return(
      <div className="product-index-container-div">
          <div className="title-container">
            <div className="title-left">
              <div className="title-left-text">
                <h1>STREETWEAR</h1>
                <h4>
                  Supreme, BAPE, Kith, Palace, Fear of God, KAWS, OFF-WHITE, & more. No lines, no bots, and always authentic. <br/>
                  Shop all the best streetwear right here on StreetX.
                </h4>
              </div>
          </div>
          <div className="title-right"></div>
        </div>
        <div className="products-index-container">
          <ProductSideNav/>
          {/* not sure where to put this. I think I need to separate out side nav */}
          <div className="browse-grid">
            {products.map(product => (
              <ProductIndexItem 
              key={product.id}
              product={product} />
            ))}
          </div>
        </div>

        {/* <div className="pagination">
            <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={10}
                totalItemsCount={20}
                onChange={this.handlePageChange}
            />
        </div> */}
        <Pagination 
          activePage={this.state.activePage}
          itemsCountPerPage={50}
          totalItemsCount={products.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />

        <Ticker/>
      </div>  
    )
  }
}

export default ProductIndex;