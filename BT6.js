let product = [
    {
        id: 1,
        name: "Áo",
        price: 200,
    },
    {
        id: 2,
        name: "Quần",
        price: 400,
    },
    {
        id: 3,
        name: "Mũ",
        price: 300,
    },
]

let LN =product[0].price;
for (let i = 0; i < product.length; i++) {
    for (let j = 1; j < product.length; j++) {
        if (product[i].price > LN) {
            LN = product[i].price;
            product[i].price = product[i-1].price;
            product[i-1].price = LN;
        }
        
    }
    
}

console.log(product);