const listOfProducts = [{

productName: "TV",

quantity: 10,

description: "television"
},

{

productName: "AC",

quantity: 5,

description: "air conditioner"

},

{

productName: "TV",

quantity: 10,

description: "television"
},

{

productName: "AC",

quantity: 5,

description: "air conditioner"

},

{
productName : "FAN",
quantity: 10,
description : "Ceiling Fan"

}
]  


function getUniqueProductCount(listOfProducts){
    let uniqueCount = {};
    
    for (let item of listOfProducts) {
        if(uniqueCount[item.productName] === undefined){
            uniqueCount[item.productName] = 1;
        } else {
            uniqueCount[item.productName]= uniqueCount[item.productName] +1;
        }
   
    }
    
   console.log(uniqueCount);
}

getUniqueProductCount(listOfProducts)

function getUniqueProducts (products){
    var obj = {};
    
    products.forEach((e) => {
    if (obj[e.productName] == undefined) {
      obj[e.productName] = e;
    } else {
      obj[e.productName].quantity += e.quantity;
    }
  });
  
  return Object.values(obj);
}

let unique = getUniqueProducts(listOfProducts);
console.log(unique);
