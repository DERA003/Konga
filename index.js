  //  let product = 
  //  [{
  //   image: "E-Commerce/summer.webp",
  //   id: 1,
  //   product_name: "Egg Patty Fried",
  //   price: "$372.58"
  // }, {
  //   "id": 2,
  //   "product_name": "Fish - Artic Char, Cold Smoked",
  //   "price": "$286.87"
  // }, {
  //   "id": 3,
  //   "product_name": "Chicken - Diced, Cooked",
  //   "price": "$782.56"
  // }, {
  //   "id": 4,
  //   "product_name": "Cloves - Ground",
  //   "price": "$792.34"
  // }, {
  //   "id": 5,
  //   "product_name": "Wine - Rosso Toscano Igt",
  //   "price": "$941.77"
  // }, {
  //   "id": 6,
  //   "product_name": "Garlic - Primerba, Paste",
  //   "price": "$783.11"
  // }, {
  //   "id": 7,
  //   "product_name": "Gatorade - Xfactor Berry",
  //   "price": "$63.65"
  // }, {
  //   "id": 8,
  //   "product_name": "Sausage - Meat",
  //   "price": "$353.25"
  // }, {
  //   "id": 9,
  //   "product_name": "Watercress",
  //   "price": "$461.90"
  // }, {
  //   "id": 10,
  //   "product_name": "Steampan - Foil",
  //   "price": "$766.04"
  // }, {
  //   "id": 11,
  //   "product_name": "Urban Zen Drinks",
  //   "price": "$201.43"
  // }, {
  //   "id": 12,
  //   "product_name": "Spinach - Spinach Leaf",
  //   "price": "$511.72"
  // }, {
  //   "id": 13,
  //   "product_name": "Sauce - Rosee",
  //   "price": "$661.23"
  // }, {
  //   "id": 14,
  //   "product_name": "Lemon Pepper",
  //   "price": "$433.05"
  // }, {
  //   "id": 15,
  //   "product_name": "Danishes - Mini Raspberry",
  //   "price": "$684.71"
  // }, {
  //   "id": 16,
  //   "product_name": "Apricots - Dried",
  //   "price": "$447.41"
  // }, {
  //   "id": 17,
  //   "product_name": "Beans - Green",
  //   "price": "$770.32"
  // }, {
  //   "id": 18,
  //   "product_name": "Veal - Inside, Choice",
  //   "price": "$896.14"
  // }, {
  //   "id": 19,
  //   "product_name": "Wine - Cotes Du Rhone",
  //   "price": "$787.60"
  // }, {
  //   "id": 20,
  //   "product_name": "Longos - Lasagna Veg",
  //   "price": "$716.19"
  // }]

  let shop = document.getElementById('shop')

  let shopItemsData = [{
      image: "v1.jpeg",
      id: 15,
      product_name: "Egg Patty Fried",
      price: "$372.58"
    }, {
      image: "v2.jpg",
      "id": 20,
      "product_name": "Fish - Artic Char, Cold Smoked",
      "price": "$286.87"
    }, {
      image:"pump.jpeg",
      "id": 30,
      "product_name": "Chicken - Diced, Cooked",
      "price": "$782.56"
    }, {
      image:"onion.jpeg",
      "id": 44,
      "product_name": "Cloves - Ground",
      "price": "$792.34"
    }, {
      image: "cucu.jpeg",
      "id": 54,
      "product_name": "Wine - Rosso Toscano Igt",
      "price": "$941.77"
    }, {
      image: "beet.jpeg",
      "id": 62,
      "product_name": "Garlic - Primerba, Paste",
      "price": "$783.11"
    }, {
      image: "yam.jpeg",
      "id": 7,
      "product_name": "Gatorade - Xfactor Berry",
      "price": "$63.65"
    }, {
      image: "v1.jpeg",
      "id": 82,
      "product_name": "Sausage - Meat",
      "price": "$353.25"
    }, {
      image: "carrot.jpeg",
      "id": 19,
      "product_name": "Watercress",
      "price": "$461.90"
    }, {
      image:"sugar.jpeg",
      "id": 10,
      "product_name": "Steampan - Foil",
      "price": "$766.04"
    }, ]

  console.log(shop);
  
  let generateShop =()=> {
     return (shop.innerHTML = shopItemsData.map((x) => {
      return ` <div class="product">
        <img src="${x.image}" alt="">
      <div class="description">
          <span></span>
          <h5>${x.product_name}</h5>
          <h4>${x.price}</h4>
          <p>you save $${x.id}</p>
          <div class="star">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
          </div>
      </div>
      <div class="cart">
          <a href="#"><i class="bi bi-cart-dash"></i></a>
      </div>
  </div>` 
     }).join(""))
      
 }
 generateShop()


 let bar = document.getElementById('bar')
 let head1 = document.getElementById('head1')
 if (bar) {
  bar.addEventListener('click', () => {
    head1.classList.add('first')
  })
 }