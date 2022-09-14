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
// this will be updated with the current value on the chart
let currentCromosValue = 0.78;

//conversion for cromos using  addCromos
addCromos.addEventListener("click", function () {
  // get input value
  let figure = document.querySelector("#cromosFinanceFigure").value;

  if (figure === "") {
    return alert("Enter a figure");
  }
  // update cromos value
  cromos = figure;
  // calculate
  dollar = cromos * currentCromosValue;
  // round up
  const roundedNumber = Math.round((dollar + Number.EPSILON) * 100) / 100;
  // render values
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
function toastNotification(message) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // add message
  x.innerHTML = message;

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
document
  .querySelector("#requestConfirmation")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const formInput = e.target;

    const data = {
      userName: formInput[0].value,
      price: dollar,
      quantity: cromos,
      walletAddress: formInput[1].value,
    };

    console.log(data);

    document.querySelector("#closeValidateModal").click();
    // alert("request sent");
    const token = JSON.parse(Cookies.get("cromos_user")).token;
    try {
      const rawResponse = await fetch(
        "https://cromos-token.herokuapp.com/api/request-confirmation",
        // "http://localhost:5000/api/request-confirmation",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization:
            //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1SWQiOiI2MzFkZmNlNjE4M2QyZDA5ZGEzNjk5ZTkiLCJwcml2aWxlZ2UiOjQsImlhdCI6MTY2MzE1Nzg3OH0.VB4hQ6L9EKjro25a8LedToKSV3P6ayqdSqEIHG47gtA",
            Authorization: token,
          },
          body: JSON.stringify(data),
        }
      );
      const content = await rawResponse.json();

      console.log(content);
      if (content.ok === false) {
        return toastNotification(content.message);
      }

      toastNotification("Request Sent");
    } catch (error) {
      console.log(error);
    }
  });
