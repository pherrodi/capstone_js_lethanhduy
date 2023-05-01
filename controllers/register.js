let mala = document.getElementsByName("type");
function getInfo(mala) {
  let gender = "";
  for (let index = 0; index < mala.length; index++) {
    if (mala[index].checked == true) {
      gender = mala[index].value;
    }
  }
  return gender;
}

var check = new Validation();
document.querySelector("#btn-register").onclick = function (e) {
  e.preventDefault();
  let register = new UserRegister();
  register.name = document.querySelector("#name").value;
  register.email = document.querySelector("#email").value;
  register.password = document.querySelector("#password").value;
  register.passwordConFirm = document.querySelector("#password-confirm").value;

  register.phone = document.querySelector("#phone").value;
  register.gender = getInfo(mala);

  let valid = true;
  valid =
    check.checkEmty(register.name, "e1") &
    check.checkEmty(register.email, "e2") &
    check.checkEmty(register.password, "e3") &
    check.checkEmty(register.passwordConFirm, "e4") &
    check.checkEmty(register.phone, "e5");

  if (register.passwordConFirm != register.password) {
    document.querySelector(
      "#error-password"
    ).innerHTML = `Password ConFirm incorrect!`;
    return;
  } else {
    document.querySelector("#error-password").innerHTML = " ";

    valid = check.checkLetter(register.name, "error-letter");
    valid = check.checkemail(register.email, "error-email");
    valid = check.checkPassword(register.password, "error-password");
    valid = check.checkNumber(register.phone, "error-phone");
    if (!valid) {
      return;
    }
    getRegister(register);
    console.log(register);
  }
};

function getRegister(post) {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: post,
  });
  promise.then(function (data) {
    console.log(data);
    alert('Succeed')
  });
  promise.catch(function (err) {
    console.log(err);
    alert('Failed')
  });
}
