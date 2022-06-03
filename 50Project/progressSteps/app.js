document.querySelector(".container").addEventListener("click", nextPrv);

const steps = document.querySelectorAll(".circle");

let i = 0,
    width = 10;

function nextPrv(e){
  e.preventDefault();
  let next = e.target.classList.contains("next"),
      prev = e.target.classList.contains("prev"),
      progress = document.querySelector(".progress");


  if (next){
    width += 30;
    progress.style = `width: ${width}%;`
    document.querySelector(".prev").disabled = false;
    if (i !== 3){
      i++;
      steps[i].classList.add("active")
    }
    if (i == 3){
      document.querySelector(".next").disabled = true;

    }
  }

  else if (prev){
    width -= 30;
    progress.style = `width: ${width}%;`
    document.querySelector(".next").disabled = false;
    steps[i].classList.remove("active")
    if (i == 1){
      document.querySelector(".prev").disabled = true;
    }
    i--;
  }

}
