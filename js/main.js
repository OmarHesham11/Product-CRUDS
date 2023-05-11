var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var error;
var products = [];

function addProduct() {
    if(productName.value && productPrice.value && productCategory.value && productDesc.value) {
        error = null;
        document.getElementById('error').innerHTML = error;
        var product = {
            name: productName.value.trim(),
            price: productPrice.value.trim(),
            category: productCategory.value.trim(),
            desc: productDesc.value.trim()
        }
        products.unshift(product);
        console.log(products);
        clearForm();
    } else {
        error = "Missing Input!";
        document.getElementById('error').innerHTML = error;
    }
}

function clearForm() {
    productName.value = null;
    productPrice.value = null;
    productCategory.value = null;
    productDesc.value = null;
}