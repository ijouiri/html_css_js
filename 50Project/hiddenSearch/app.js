// Method 1
// document.querySelector("body").addEventListener("click", (e)=>{
//   const search = document.querySelector(".search")
//   if (e.target.className == "btn" || e.target.classList.contains("fa")){
//     if (search.classList.contains("active"))
//       search.classList.remove("active");
//     else
//       search.classList.add("active");
//   }
// }) 

//Method 2

const search = document.querySelector(".search"),
      input = document.querySelector("input"),
      btn = document.querySelector(".btn");

btn.addEventListener("click",() => {
  search.classList.toggle("active");
  input.focus();

})
