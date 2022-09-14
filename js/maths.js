const addCromos = document.getElementById("addCromos");
const purchaseCromos = document.getElementById("purchaseCromos");
const resetCromos = document.getElementById("resetCromos");
let dollarValue = document.getElementById("dollarValue");
let cromsoValue = document.getElementById("cromosValue");
let notice = document.getElementById("notice");
let wallet = document.querySelector("#wallet");

notice.style.display = "none";

let dollar = 0;
let cromos = 0;
let virtualWalletAddress = "141071434139";

//conversion for cromos using  addCromos
addCromos.addEventListener("click", function () {
  console.log("i", cromos);
  const roundedNumber = Math.round((dollar + Number.EPSILON) * 100) / 100;
  cromos += 1;
  dollar = cromos * 0.78;
  dollarValue.textContent = `$ ${roundedNumber}`;
  cromsoValue.textContent = `${cromos} Cromos`;
});

//purchase to generate wallet address
purchaseCromos.addEventListener("click", function () {
  wallet.style.display = "";
  wallet.textContent = `virtual wallet : ${virtualWalletAddress}`; //not really the wallet sha

  notice.style.display = "block";
  if (cromos == 0) {
    alert("cannot generate wallet for empty value");
    notice.style.display = "none";
    wallet.style.display = "none";
  } else {
    alert(
      "copy address generated and pay using your crypto app then return to dashboard"
    );
  }
});

//reset button
resetCromos.addEventListener("click", function () {
  cromos = 0;
  dollar = 0;
  dollarValue.textContent = `$ ${dollar}`;
  cromsoValue.textContent = `${cromos} Cromos`;
  notice.style.display = "none";
  wallet.style.display = "none";
});

function ValidateTransactionFunction() {
  document.querySelector("#modalCount").innerHTML = cromos;
  document.querySelector("#modalAmount").innerHTML = `$${dollar}`;

  //   fill form
  const formInput = document.querySelector("#requestConfirmation");
  //   console.dir(formInput);

  //   get name from cookies
  const accountName = JSON.parse(Cookies.get("cromos_user")).profile.userProfile
    .fullName;

  // auto fill form
  formInput[0].value = accountName;
  formInput[1].value = virtualWalletAddress;
}
document
  .querySelector("#requestConfirmation")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    const formInput = e.target;
    //   get name from cookies
    const accountId = JSON.parse(Cookies.get("cromos_user")).profile.userProfile
      ._id;
    const data = {
      userId: accountId,
      userName: formInput[0].value,
      price: dollar,
      quantity: cromos,
      walletAddress: formInput[2].value,
    };

    // console.log(data);

    document.querySelector("#closeValidateModal").click();
    alert("request sent");

    // if(cromos === 0)
    // {
    //     return alert('')
    // }
  });
