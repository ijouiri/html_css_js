const boxes = document.querySelectorAll(".box");

let windowsHeight = window.innerHeight ; 
document.addEventListener("scroll", showBoxes);

showBoxes();

function showBoxes(){
  boxes.forEach(box => {
    if (box.getBoundingClientRect().bottom < windowsHeight){
      box.classList.add("show");
    }else{
      box.classList.remove("show")
    }
  })
}


