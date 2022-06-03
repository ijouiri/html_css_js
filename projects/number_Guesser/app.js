let min = 1,
    max = 10,
    numberToguess = 1,
    span = document.createElement("span"),
    tries = 3;

const form = document.querySelector("form"),
      results = document.querySelector("#results"),
      UImin = document.querySelector(".UImin").textContent = min,
      UImax = document.querySelector(".UImax").textContent = max;
      
// let numberToguess = Math.floor(Math.random() * 10);


span.innerText = "The number that you enter is ";

(function(){
  form.addEventListener("submit", getValues);
})();


function getValues(e){
  e.preventDefault();
  const input = document.querySelector("input").value;
  let result = compareNumbers(parseInt(input));
  if (result === "correct"){
    console.log("ye");
    console.log(results);
    span.className = "correct";
    span.innerText = "The number that you enter is Correct";
    results.appendChild(span);
    results.style = "display: inline-block;";

  }else if (result === "incorrect"){
    span.className = "incorrect";
    span.innerText = "The number that you enter is Incorrect";
    results.appendChild(span);
    results.style = "display: inline-block;";
  }else{
    span.className = "correct";
    span.innerText += "Correct";
    results.appendChild(span);
    results.style = "display: inline-block;";


  }
}

function compareNumbers(number){
  console.log(numberToguess);
  if (tries>0){
    if (number === numberToguess){
      return "correct";
    }else{
      console.log("boo");
      tries -= 1;
      return "incorrect";
    }
  }else{
    return "timeout";
  }
}
