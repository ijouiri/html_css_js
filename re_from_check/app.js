document.getElementById("name").addEventListener("blur", checkName);
document.getElementById("zip").addEventListener("blur", checkZip);
document.getElementById("email").addEventListener("blur", checkEmail);
document.getElementById("phone").addEventListener("blur", checkPhone);
// check if name is valid
function checkName(e){
  const name = document.getElementById("name"),
        re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");
    
  }

}

// check if zip is valid
function checkZip(e){
  const zip = document.getElementById("zip"),
    re = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
    zip.classList.add("is-valid");
    
  }

}

// check if email is valid
function checkEmail(e){
  const email = document.getElementById("email"),
    re = /^[a-zA-Z]([a-zA-Z0-9_\-]+)@([a-zA-Z]+)\.[a-zA-Z]{2,5}$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    
  }

}
// check if phone is valid

function checkPhone(e){
  const phone = document.getElementById("phone"),
    re = /^\(?[0-9]{3}\)?[-_. ]?[0-9]{3}[-_. ]?[0-9]{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
    phone.classList.add("is-valid");
    
  }

}
