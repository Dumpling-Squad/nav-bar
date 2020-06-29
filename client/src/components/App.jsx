import React from 'react';
import axios from 'axios';
import LowerNav from './LowerNav.jsx';
import BestSellers from './BestSellers.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
      bestSellers: false,
      shopAll: false,
      skinCare: false,
      makeUp: false,
      body: false,
      fragrance: false,
      shopOurSets: false,
      search: false,
      products: [],
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onAllProducts = this.onAllProducts.bind(this);
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
    this.untoggleSearchBar = this.untoggleSearchBar.bind(this);
  }

  onMouseOver(e) {
    e.persist()
    axios
    .get(`/nav/${e.target.id}`)
    .then((results) => {
      this.setState({
        products: results.data,
        onHover: true,
        [e.target.id] : true,
      });
    })
    .catch((err) => {
      console.error('error getting product info from db', err);
    })
  }

  onAllProducts(e) {
    e.persist()
    axios
    .get(`/nav`)
    .then((results) => {
      this.setState({
        products: results.data,
        onHover: true,
        [e.target.id] : true,
      });
    })
    .catch((err) => {
      console.error('error getting product info from db', err);
    })
  }



  onMouseLeave(e) {
    console.log(e.target)
    this.setState({
      onHover: false,
      [e.target.id] : false,
      products: []
    });
  };

  toggleSearchBar(){
    this.setState({
      search: true,
    })
 };

  untoggleSearchBar(){
    console.log("clicked")
    this.setState({
      search: false
    })
  };


  render () {
    return (
      <header class="navBar">
        <div class="upper-nav">
          <div class="upper-left-nav">
              <li class="tableOfContents" id="icon">
                <img src={"https://navbar-svg-icons.s3-us-west-1.amazonaws.com/menu.svg"}/>
              </li>
              <li class="search" id="icon" onClick={this.toggleSearchBar}>
                <img src={"https://navbar-svg-icons.s3-us-west-1.amazonaws.com/search.svg"} />
                {this.state.search ? <SearchBar untoggleSearchBar={this.untoggleSearchBar}/> : null}
              </li>
          </div>
            <div class="title">
              Glossier.
            </div>
            <div class="upper-right-nav">
              <li class="profile" id="icon">
                <img src={"https://navbar-svg-icons.s3-us-west-1.amazonaws.com/profile.svg"}/>
              </li>
              <li class="nav-shopping-cart" id="icon">
                <img src={"https://navbar-svg-icons.s3-us-west-1.amazonaws.com/bag.svg"}/>
              </li>
            </div>
        </div>
        <LowerNav appState={this.state} products={this.state.products} onAllProducts={this.onAllProducts} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}/>
      </header>
    );
  }
}

export default App;