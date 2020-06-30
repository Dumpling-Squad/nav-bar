import React from 'react';

function TableOfContents(props) {
  return (
    <div class="tableOfContents">

      <button className="contentsClose" onClick={props.toggleTableOfContents}><img src="https://navbar-svg-icons.s3-us-west-1.amazonaws.com/close.svg"/></button>

      <div class="contentsBox">
        <div class="contents" id="contentCategories">
            <a>Shop All</a>
            <a>Skincare</a>
            <a>Makeup</a>
            <a>Body</a>
            <a>Fragrance</a>
            <a>Shop our Sets</a>
            <a>GlossiWEAR</a>
            <a>Digital Gift Card</a>
        </div>

        <div class="contents" id="contentCompany">
            <a>Looks IRL</a>
            <a>Into The Gloss</a>
            <a>About Glossier</a>
        </div>
      </div>

      <div class="shipToBox">

      </div>

    </div>
  )
};

export default TableOfContents;