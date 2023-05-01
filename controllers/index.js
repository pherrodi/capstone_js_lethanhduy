function renderProduct(arrProduct) {
  var htmlString = "";
  for (var index = 0; index < arrProduct.length; index++) {
    var prod = arrProduct[index];
    htmlString += `
    <li class="cards-item">
          <div class="card">
            <div class="card-image">
              <img src="${prod.image}" alt="">
            </div>
            <div class="card-content">
              <div class="card-title">${prod.name}</div>
              <p class="card-text">${prod.description}</p>
            </div>
            <div class="cards-footer d-flex justify-content-around align-items-center">
              <a href="./detail.html?id=${prod.id}" class="btn">Buy now</a>
              <span class="text-center">$${prod.price}</span>
            </div>
          </div>
        </li>
        `;
  }
  document.querySelector("#products .cards").innerHTML = htmlString;
  return htmlString;
}

function getProductIndex() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  promise.then(function (res) {
    console.log(res.data);
    renderProduct(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}
getProductIndex();
