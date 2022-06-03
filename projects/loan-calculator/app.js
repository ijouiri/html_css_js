const form = document.querySelector("form");


loadEvents();


function loadEvents(){
  form.addEventListener("submit", getValues);
  hideLoading();
}


function getValues(e){
  let amount = document.querySelector("#amount").value;
  let interest = document.querySelector("#interest").value;
  let years = document.querySelector("#years").value;
  
  amount = parseInt(amount);
  interest = parseFloat(interest);
  years = parseInt(years);

  total = calculateTotal(amount, interest, years);
  totalInterest = (total - amount).toFixed(2);
  monthlyPayment = (total / (years * 12)).toFixed(2);


  hideError();
  if (isFinite(monthlyPayment)){
    showLoading();
    hideResults();
    setTimeout(displayResults, 2000);
    insertResults(total, totalInterest, monthlyPayment);
  }else{
    showError();
  }
  e.preventDefault();
}

// calculate the total amount + interest
function calculateTotal(amount, interest, years){
  return amount * (1 + (interest/100)*years);
}




// display the results to the DOM
function insertResults(total, totalInterest, monthlyPayment){
  const monthDOM = document.querySelector("#monthly-payment");
  const totalDOM = document.querySelector("#total-payment");
  const interestDOM = document.querySelector("#total-interest");
  monthDOM.value = monthlyPayment;
  totalDOM.value = total;
  interestDOM.value = totalInterest;
}

// display && hide error event

function showError(){
  const alertError = document.querySelector("#error");
  alertError.style = "display: inline-block;";
}

function hideError(){
  const alertError = document.querySelector("#error");
  alertError.style = "display: none;";
}


// show loading && hide loading

function showLoading(){
  const loader = document.querySelector("#loader");
  loader.style = "display: inline-block";
  setTimeout(function() {loader.style = "display: none;"}, 2000);
}

function hideLoading(){
  const loader = document.querySelector("#loader");
  loader.style = "display: none";
}

// display results && hide results

function displayResults(){
  const results = document.querySelector(".results");
  results.style = "display: inline-block;";
}

function hideResults(){
  document.querySelector(".results").style= 'display : none';
}
