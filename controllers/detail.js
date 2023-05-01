window.onload = async function () {
  const param = new URLSearchParams(window.location.search);
  const myParam = param.get("id");
  console.log("param", myParam);
  try {
    let res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
      method: "GET",
      responseType: "json",
    });
    let newArr = [];
    newArr.push(res.data.content);
    console.log(res.data.content);
    renderProductDetail([res.data.content]);
  } catch (err) {
    console.log(err);
  }
};
function renderProductDetail(arrProductDetail) {
  var htmlString = "";
  for (var index = 0; index < arrProductDetail.length; index++) {
    var prodD = arrProductDetail[index];
    htmlString += `
    <div class="col-5 avable ${prodD.id}">
    <div class="detail-img">
    <img src="${prodD.image}" alt=""></div>

</div>
<div class="col-7">
    <h3>
        ${prodD.name}
    </h3>
    <p>
        ${prodD.description}
    </p>
    <h4>Avalable size</h4>
    <div class="btn-size">
        <button>${prodD.size[0]}</button>
        <button>${prodD.size[1]}</button>
        <button>${prodD.size[2]}</button>
        <button>${prodD.size[3]}</button>
        <button>${prodD.size[4]}</button>
        <button>${prodD.size[5]}</button>
    </div>
    <h1>$ ${prodD.price}</h1>
    <p class="detail-quantity">Số lượng ${prodD.quantity} </p>
    <div class="btn-increase">
        <button class="btn increase" onclick="increase()">+</button>
        <input type="text" value="1" id="number">
        <button class="btn reduce" onclick="reduce()">-</button>
    </div>
    <button class="btn btn-add">Add to cart</button>
</div>
    `;
  }
  document.querySelector("#proDetail").innerHTML = htmlString;
  return htmlString;
}

let numberElement = document.getElementById("number");
let number = parseInt(numberElement.value);
console.log("number",number);
let render = (number) => {
  numberElement.value = number;
};
let increase = () => {
  number++;
  render(number);
};
let reduce = () => {
  number--;
  render(number);
};