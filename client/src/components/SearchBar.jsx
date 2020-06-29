import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchQuery: '',
      searchProducts: [],
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    e.persist();
    this.setState({
      searchQuery: e.target.value
    })
    axios
    .get(`/nav/search/${e.target.value}`)
    .then((results) => {
      console.log("SEARCHING")
      console.log("requested", results.data)
      this.setState({
        // searchQuery: e.target.value,
        searchProducts: results.data
      })
    })
    .catch((err) => {
      console.log(err);
      // might render 0 searches
    })
  }


  render() {
    return (
      <div className="searchBar">
        <button onClick={this.props.untoggleSearchBar}>X</button>

        <input onChange={this.changeHandler} value={this.state.searchQuery} />
        {/* if searchQuery is not empty, change the content in this component */}
        {this.state.searchQuery ?
        <div>
          <div className="searchProductsCount">{this.state.searchProducts.length} results</div>
          <div className="searchProducts">
            {this.state.searchProducts.map((product, index) => {
              {console.log("render", product)}
              return(
                <div key={index}className="searchProduct">
                  <img className="searchImage" src={product.image} />
                  <a className="searchName">{product.name}</a>
                  <a className="searchDescription" >{product.description}</a>
                </div>
              )
            })}
          </div>
          </div>

        :
        <div>
          <p>Search for products, categories, content</p>
          <div>most popular searches</div>
            {/* render some key words from the database */}
        </div>
        }
      </div>
    )
  }
}

export default SearchBar;