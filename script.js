function changeImage(el) {
    document.getElementById('main-image').src = el.src;
  }
  function changeImage(el) {
    document.getElementById('main-image').src = el.src;
  }
  
  function saveProduct() {
    const color = document.getElementById("color").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;
  
    const productData = {
      color,
      size,
      quantity,
      price: 19.99
    };
  
    localStorage.setItem("product", JSON.stringify(productData));
  }
    