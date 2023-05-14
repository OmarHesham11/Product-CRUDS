var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var error;
var products;

if(localStorage.getItem("myProducts")) {

    products = JSON.parse(localStorage.getItem("myProducts"));
    displayProducts(products);
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
        displayProducts(products);
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

function displayProducts(myProducts) {
    var counter = 0;
    var productContainer = myProducts.map((product) => {
        var cartoona = (
            `<tr>
                <td>${counter+1}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.category}</td>
                <td>${product.desc}</td>
                <td><button class="btn btn-outline-warning">Update</button></td>
                <td><button class="btn btn-outline-danger" onClick="deleteProduct(${counter});">Delete</button></td>
            <tr>`
        )
        counter++;
        return cartoona;
    })
    document.getElementById('tableBody').innerHTML = productContainer;
}

function deleteProduct(id) {
    products.splice(id, 1);
    localStorage.setItem("myProducts", JSON.stringify(products));
    displayProducts(products);
}

function searchProduct(searchTerm) {
    const searchProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    displayProducts(searchProducts);
  }