const peopleList = document.getElementById('name');
const btn = document.querySelector('button');

function ajax(src, callback) {
    // your code here
    fetch(src)
    .then((response) => {
        return response.json();
    }).then((jsonData) => {
        return callback(jsonData);
    }).catch((err) => {
        console.log('錯誤:', err);
    });
}
function render(data) {
    // your code here
    // document.createElement() and appendChild() methods are preferred.
    const section = document.createElement('section');
    data.map(product=>{
        var productDiv = document.getElementById('product');
        var newSection = document.createElement('section');
        newSection.innerHTML = `
        <div class="product">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <p>${product.description}</p>
        </div>`;
        productDiv.appendChild(newSection);
    });
        
    
}

ajax('https://appworks-school.github.io/Remote-Aassigiment-Data/products',function (response) {
    
    render(response);
}); // you should get product information in JSON format and render data in the page

