function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

function validation() {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;
  let terms = document.getElementById("terms").checked;

  if (
    name === "" ||
    surname === "" ||
    email === "" ||
    password1 === "" ||
    password2 === "" ||
    password1.length < 6 ||
    password2.length < 6 ||
    terms == false ||
    password1 !== password2
  ) {
    showAlertError();
  } else {
    showAlertSuccess();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("regBtn").addEventListener("click", () => {
    validation();
  });
});
