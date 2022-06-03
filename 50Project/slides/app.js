document.querySelector(".container").addEventListener("click", function(e){
  e.preventDefault();
  const allPanels = document.querySelectorAll(".panel")
  allPanels.forEach(panel => {
    panel.classList.remove("active") ? panel.classList.contains("active") : "nothing"
    // if (panel.classList.contains("active"))
    //   console.log("ye")
  })

  if (e.target.className.includes("panel")){
    e.target.classList.add("active")
  }
})
