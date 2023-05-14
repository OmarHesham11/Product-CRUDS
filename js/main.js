var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var error;
var products;

if(localStorage.getItem("myProducts")) {

    products = JSON.parse(localStorage.getItem("myProducts"));
    displayProducts();
}else {
    products = [];
}

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
        localStorage.setItem("myProducts", JSON.stringify(products));
        console.log(products);
        clearForm();
        displayProducts();
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

function displayProducts() {
    var productContainer = products.map((product) => {
        return (
            `<tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.category}</td>
                <td>${product.desc}</td>
                <td><button class="btn btn-outline-warning">Update</button></td>
                <td><button class="btn btn-outline-danger" onClick="deleteProduct();">Delete</button></td>
            <tr>`
        )
    })
    document.getElementById('tableBody').innerHTML = productContainer;
}

// function deleteProduct(id) {
//     products.splice()
// }