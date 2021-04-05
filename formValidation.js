// On Submit
getForm.addEventListener("submit", (e) => {
  if (getEmail.value !== user.email) {
    err();
    errSms.innerHTML = "User does not exist";

    e.preventDefault();
  } else if (getPassword.value != user.password) {
    err();

    e.preventDefault();
  } else {
    alert("welcome on board");
  }
});

function err() {
  getForm.addEventListener("submit", (e) => {
    showErr();
    setTimeout(() => {
      existErr();
    }, 2000);
  });
}

// To close the error modall
closeModal.addEventListener("click", (e) => {
  getModal.style.opacity = 0;
});

function showErr() {
  getModal.style.opacity = 100;
  getModal.style.top = "10rem";
  getLine.style.width = "100%";
}
function existErr() {
  getModal.style.opacity = 0;
  getModal.style.top = "3rem";
  getLine.style.width = "0%";
}
