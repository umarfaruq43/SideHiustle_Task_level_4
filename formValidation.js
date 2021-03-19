getButton.addEventListener("click", (e) => {
  if (getUsername.value == "" || getUsername.value == null) {
    getSms[0].style.display = "block";
    e.preventDefault();
  } else if (getemail.value == "" || getemail.value == null) {
    getSms[1].style.display = "block";
    e.preventDefault();
  } else if (getPassword.value == "" || getPassword.value == null) {
    getSms[2].style.display = "block";
    e.preventDefault();
  } else if (getPassword.value !== cPassword.value) {
    getSms[3].style.display = "block";
    e.preventDefault();
  } else {
    console.log(done);
  }
});
