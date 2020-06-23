import React from 'react';
// import searchLogo from "./search.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render () {
    return (
      <header class="navBar">
        <div class="upper-nav">
          <div class="upper-left-nav">
              <li class="tableOfContents" id="icon">
                <img src={"https://navbar-svg-icons.s3-us-west-1.amazonaws.com/menu.svg"}/>
              </li>
              <li class="search" id="icon">
                <img src={"https://navbar-svg-icons.s3-us-west-1.amazonaws.com/search.svg"}/>
              </li>
          </div>
            <div class="title">
              Glossier
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

        <div class="lower-nav">
          <div class="nav-bar-cat">
            Shop All
          </div>
          <div class="nav-bar-cat">
            Skincare
          </div>
          <div class="nav-bar-cat">
            Makeup
          </div>
          <div class="nav-bar-cat">
            Body
          </div>
          <div class="nav-bar-cat">
            Fragrance
          </div>
          <div class="nav-bar-cat">
            Shop our Sets
          </div>
          <div class="nav-bar-cat">
            GlossiWEAR
          </div>
          <div class="nav-bar-cat">
            Team Picks
          </div>
          <div class="nav-bar-cat">
            Take our Skincare Quiz
          </div>
        </div>
      </header>
    );
  }
}

export default App;