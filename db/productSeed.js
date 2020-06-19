const db = require('./index.js');
const productImages = require('./productSeed.json');
const faker = require('faker');

function products () {
  var products = [];
  for ( var i = 0; i < productImages.length; i++) {
    products.push({
      "name" : `${faker.commerce.productName()}`,
      "description" : `${faker.commerce.productName().toLowerCase()}`,
      "image" : productImages[i]
    })
  }
  return products;
}

function productSeed() {
  products().map((product) => {
    var queryString = `INSERT INTO products (name, description, image) VALUES ('${product.name}', '${product.description}', '${product.image}');`
    db.query(queryString, (err) => {
      if(err) {
        console.log(err)
        console.log("failed seeding product");
      } else {
        console.log("successful seeding product");
      }
    })
  })
}

productSeed();