const left = document.querySelector(".left"),
  right = document.querySelector(".right"),
  container = document.querySelector(".container");

// ------ method 1 --------
left.addEventListener("mouseenter", () => { container.classList.add("hover-left") })
left.addEventListener("mouseleave", () => { container.classList.remove("hover-left") })

right.addEventListener("mouseenter", () => { container.classList.add("hover-right") })
right.addEventListener("mouseleave", () => { container.classList.remove("hover-right") })

// ------ method 2 --------
// document.addEventListener("mouseover", (e) => {
//   let target = e.target;

//   if (target.classList.contains("right")) {
//     console.log("ye")
//     container.classList.add("hover-right")
//     container.classList.remove("hover-left")
//   } else {
//     container.classList.add("hover-left")
//     container.classList.remove("hover-right")
//   }

// })

