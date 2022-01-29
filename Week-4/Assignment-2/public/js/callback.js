function ajax(src, callback) {
    // your code here
    
    }
function render(data) {
    // your code here
    // document.createElement() and appendChild() methods are preferred.
    document.createElement('block');
   
    }
ajax(
'https://appworks-school.github.io/Remote-Aassigiment-Data/products'
,
function (response) {
render(response);
}
); // you should get product information in JSON format and render data in the page

