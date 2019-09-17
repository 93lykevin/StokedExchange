import React from 'react';
import * as ProductAPIUtil from '../../util/product_api_util';
import SearchProduct from './search_product'

class SearchBar extends React.Component{
    constructor(props){
        super(props)

        //initial state
        this.state = { search_val: "", 
                        products: [] };

        this.handleInput = this.handleInput.bind(this);
        // this.renderResults = this.renderResults.bind(this)
    }

    handleInput(e) {
        if (e.currentTarget.value === '') {
            this.setState({products: []});
            return;
        }
        this.setState({ search_val: e.currentTarget.value });

        console.log(this.state.search_val);

        ProductAPIUtil.searchProducts(e.currentTarget.value)
            .then(searchResults => {
                // debugger
                return(
                this.setState({products: Object.values(searchResults)}));
            })
            //products => this.renderResults(products)
    }

    // renderResults(products) {
    //     return(
    //     Object.values(products).map(product => {
    //             <SearchProduct 
    //             product={product}/>
    //         }
    //     ))
    // }

    render() {
        let products = this.state.products
        return(
            <div className="search-container">
                <div className='product-search'>
                    <form className="simple-form">
                        <input className='nav-search'
                            onChange={this.handleInput}
                            type="text"
                            name="product"
                            placeholder='Search for brand, color, etc.'/>
                        <ul className="search-result-ul">
                            <li className="list-item">
                                {products.map(product => (
                                    <SearchProduct
                                        key={product.id}
                                        product={product}/>
                                ))}
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;