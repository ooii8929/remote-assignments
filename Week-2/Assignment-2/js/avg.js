function avg(data) {
    // your code here
    let total = 0;
    for(let i =  0 ; i < data.size; i++){
        total += data.products[i].price;
        
    }
    return total/data.size;
}

let products = {
    size: 3,
    products: [{
                name: 'Product 1',
                price: 100,
                },
                {
                name: 'Product 2',
                price: 700,
                },
                {
                name: 'Product 3',
                price: 250,
                },
                ],
}
console.log(avg(products)); // should print the average price of all products

