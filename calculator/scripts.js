function calc() {
  let number1 = parseInt(document.querySelector("#value1").value);
  let number2 = parseInt(document.querySelector("#value2").value);
  let opp = document.querySelector("#opp").value;
  let resutl;
  
  if (opp == "+") {
    resutl = number1 + number2;
  }else if (opp == "-"){
    resutl = number1 - number2;
  }else if (opp == "/"){
    resutl = number1 / number2;
  }else {
    resutl = number1 * number2;
  }
  document.querySelector("#result").innerHTML = resutl;
}
