// Responzivan meni
let button = document.getElementById("burger");
button.addEventListener("click", function myFunction(e) {
  e.preventDefault();
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});

// Galerija
let gallery = document.getElementsByClassName("gallery-img");
for (let i = 0; i < gallery.length; i++) {
  gallery[i].addEventListener("click", function () {
    let fullSizeImageUrl = this.src;
    window.open(fullSizeImageUrl, "_blank");
  });
}

// Kontakt forma
let firstname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let email = document.getElementById("email");
let message = document.getElementById("subject");
let submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    firstname.value === "" ||
    lastname.value === "" ||
    email.value === "" ||
    message.value === ""
  )
    alert("You must fill in all the fields");
  else {
    alert(
      ` ${firstname.value} \n ${lastname.value} \n ${email.value}\n ${message.value}\n`
    );
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    message.value = "";
  }
});
