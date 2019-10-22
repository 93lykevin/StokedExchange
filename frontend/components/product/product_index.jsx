// todo: 1. separate out side and header. they should be their own thing...
//       2. Add pagination into the browse grid. then the page should be good
//       3. Refactor so it can handle specific categories
import React from 'react';
import { Link } from 'react-router-dom'
import ProductIndexItem from "./product_index_item";
import ProductSideNav from './product_side_nav';
import Ticker from '../ticker/ticker';
import Footer from '../footer/footer';
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
    this.productsMap = this.productsMap.bind(this);
  }

  componentDidMount() {
    // seedDb();   //REMOVE THIS LATER. THIS IS JUST FOR TESTING. MOVE THIS TO INDIVIDUAL PRODUCT
    this.props.requestProducts(); 
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber})
  }

  productsMap(products) {
    if (this.props.match.url.slice(1) === 'index') {
      return(
        products.map(product => (
          <ProductIndexItem 
            key={product.id}
            product={product} />
          ))
      )
    } else {
      const brand = this.props.match.url.slice(1)
      let selected = products.filter(product =>  product.brand.toLowerCase() === brand.toLowerCase() )
      return(
        selected.map(product => (
          <ProductIndexItem
          key={product.id}
          product={product} />
        ))
      )
    }
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
                  Supreme, BAPE, Kith, Palace, Fear of God, KAWS, OFF-WHITE, & more. No lines, no bots, always authentic. <br/>
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
            {this.productsMap(products)}
            {/* {products.map(product => (
              <ProductIndexItem 
              key={product.id}
              product={product} />
            ))} */}
          </div>
        </div>

        <Pagination 
          activePage={this.state.activePage}
          itemsCountPerPage={50}
          totalItemsCount={products.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>  
    )
  }
}

export default ProductIndex;