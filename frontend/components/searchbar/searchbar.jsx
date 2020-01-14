import React from "react";
import * as ProductAPIUtil from "../../util/product_api_util";
import SearchProduct from "./search_product";
import InfiniteScroll from "react-infinite-scroller";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = {
      search_val: "",
      products: []
      // hasMoreItems: true,
      // nextHref: null
    };

    this.handleInput = this.handleInput.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInput(e) {
    if (e.currentTarget.value === "") {
      this.setState({ products: [] });
      return;
    }
    this.setState({ search_val: e.currentTarget.value });

    ProductAPIUtil.searchProducts(e.currentTarget.value).then(searchResults => {
      return this.setState({ products: Object.values(searchResults) });
    });
  }

  clearSearch(e) {
    e.currentTarget.value = "";
    this.setState({ products: [] });
  }

  handleBlur(e) {
    e.target.value = "";
    setTimeout(() => {
      this.setState({ products: [] });
    }, 150);
  }

  render() {
    let products = this.state.products;
    return (
      <div className="search-container">
        <div className="product-search">
          <form className="search-form">
            <i className="fas fa-search"></i>
            <input
              className="nav-search"
              onChange={this.handleInput}
              onBlur={this.handleBlur}
              type="text"
              name="product"
              autoComplete="off"
              placeholder="Search for brand, color, etc."
            />
            <ul className="search-result-ul">
              <li className="list-item" onClick={this.clearSearch}>
                {products.map(product => (
                  <SearchProduct key={product.id} product={product} />
                ))}
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
