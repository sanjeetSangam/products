// data
const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

// 1.make unique count of products ---------------------------------
function getUniqueProductCount(listOfProducts) {
  // empty object for storing unique value
  let productsCount = {};

  // loop for inserting in productsCount
  for (let item of listOfProducts) {
    if (productsCount[item.productName] === undefined) {
      productsCount[item.productName] = 1;
    } else {
      productsCount[item.productName] = productsCount[item.productName] + 1;
    }
  }

  return productsCount;
}

//printing value of unique count
let counts = getUniqueProductCount(listOfProducts);
console.log(counts);

// 2. function for making sum of same prodcuts at one place ---------------------------------------------------
function getUniquePrducts(listOfProducts) {
  // empty array for storing values
  let productTotalQuantity = [];

  for (let item of listOfProducts) {
    if (search(productTotalQuantity, item) === true) {
      listOfProducts.find((prod) => {
        if (prod.productName === item.productName) {
          prod.quantity += item.quantity;
        }
      });
    } else {
      productTotalQuantity.push(item);
    }
  }
  return productTotalQuantity;
}

// for finding the value is present or not
function search(arr, item) {
  let r = false;

  let res = arr.find((o) => {
    if (o.productName === item.productName) {
      r = true;
      return;
    }
  });

  return r;
}

let result = getUniquePrducts(listOfProducts);
console.log(result);
