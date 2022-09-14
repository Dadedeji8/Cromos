// function cookies() {
//     // // set a cookie
//     // Cookies.set('cookie_name', 'cookie_value', { expires: 365 });
//     // // get a cookie
//     // Cookies.get('cookie_name'); // => 'value'
//     // // delete a cookies
//     // Cookies.remove('cookie_name');
// }

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

async function loginFunction(e) {
  e.preventDefault();

  const formInput = e.target;
  // console.log(e);

  if (formInput[0].value === "") {
    toastNotification("Email is Empty");

    return;
  }
  if (formInput[1].value === "") {
    return toastNotification("Password is Empty");
  }
  console.dir(formInput);
  const formData = {
    email: formInput[0].value,
    password: formInput[1].value,
  };
  try {
    const rawResponse = await fetch(
      "https://cromos-token.herokuapp.com/api/user/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const content = await rawResponse.json();

    console.log(content);
    if (content.ok === false) {
      return toastNotification(content.message);
    }
    Cookies.set(
      "cromos_user",
      JSON.stringify({
        token: content.token,
      })
      // , { expires: 365 }
    );
    toastNotification("Welcome Back");

    setTimeout(function () {
      window.location.replace("/dashboard.html");
    }, 1000);
  } catch (error) {
    console.log(error);
  }
}

// assign the function to listen to the submission of the login form
document
  .getElementById("loginForm")
  .addEventListener("submit", (e) => loginFunction(e));

// =================================================== register function ==========================================
async function registerFunction(e) {
  e.preventDefault();

  const formInput = e.target;

  if (formInput[0].value === "") {
    return console.log("FullName is Empty");
  }
  if (formInput[1].value === "") {
    return console.log("Email is Empty");
  }
  if (formInput[2].value === "") {
    return console.log("Contact is Empty");
  }
  if (formInput[3].value === "") {
    return console.log("Password is Empty");
  }
  if (formInput[3].value !== formInput[4].value) {
    return console.log("Password not match");
  }
  // console.dir(formInput)
  const formData = {
    email: "admin@gmail.com",
    fullName: "User Account",
    userName: "User test1",
    phoneNumber: "07533913243",
    password: "1234",
    // na only admin you go add this privilege for
    // "privilege": "2"
  };

  try {
    const rawResponse = await fetch(
      "https://cromos-token.herokuapp.com/api/user/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const content = await rawResponse.json();

    window.location.replace("/dashboard.html");
  } catch (error) {
    console.log(error);
  }
}

// assign the function to listen to the submission of the register form

document
  .getElementById("registerForm")
  .addEventListener("submit", (e) => registerFunction(e));

// document.getElementById("logoutButton").addEventListener("click", () => {
//   // const ans = confirm("you will be loged out");
//   // if (!ans) {
//   //   return;
//   // }
// });

function logoutFunction() {
  const ans = confirm("you will be loged out");
  if (!ans) {
    return;
  }
  console.log("logout now");
  Cookies.remove("cromos_user");
  // window.location.replace("./login.html");
}
