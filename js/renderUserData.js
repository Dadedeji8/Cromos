if (document.cookie.indexOf("cromos_user") < 0) {
  alert("Account not Logged in, redirecting you.");
  location.href = "./login.html";
}
async function getUserProfile() {
  const cromos_user = JSON.parse(Cookies.get("cromos_user"));
  const tokenArray = cromos_user.token.split(".");
  const decode = JSON.parse(atob(tokenArray[1]));

  console.log("token", decode);
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: cromos_user.token,
  };
  // let apiUrl=` http://localhost:5000/api/userInfo/${decode.uId}`;
  let apiUrl = ` https://cromos-token.herokuapp.com/api/userInfo/${decode.uId}`;

  fetch(apiUrl, { headers })
    .then((response) => response.json())
    .then((data) => {
      // console.log("Success:", );
      renderResults(data.data);
      if (data.ok) {
        Cookies.set(
          "cromos_user",
          JSON.stringify({ token: cromos_user.token, profile: data.data })
        );
        console.log("check", JSON.parse(Cookies.get("cromos_user")));
      }
    });
}
function renderResults(result) {
  const { fullName } = result.userProfile;
  const { amount } = result.userAccount;
  document.getElementById("userName").innerHTML = fullName;
  document.getElementById("profileAmount").innerHTML = amount;
}
getUserProfile();
