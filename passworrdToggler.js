getCheck.addEventListener("click", see);

function see() {
  console.log(getPassword.type);

  if (getPassword.type === "password") {
    getPassword.type = "text";
    getCheck.innerHTML = "Hide";
  } else {
    getPassword.type = "password";
    getCheck.innerHTML = "Show";
  }
}
