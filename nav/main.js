let toggleNavStatus = false;

let toggleNav = function (){
  let sideNav = document.querySelector(".side-nav");
  let sideNavUl= document.querySelector(".side-nav ul");
  let sideNavLi = document.querySelector(".side-nav li");
  let sideNavSpan = document.querySelector(".side-nav span");
  let sideNavLinks = document.querySelectorAll(".side-nav a");
  console.log(1);

  if ( toggleNavStatus === false ) {

    sideNavUl.style.visibility = "visible";
    sideNav.style.width = "200px";
    sideNav.style.transation = "ease";
    sideNavSpan.style.opacity = "0.5";
  

    for (let i = 0 ; i<sideNavLinks.length; i++) {
      sideNavLinks[i].style.paddingLeft = "30px";
    } 
    toggleNavStatus = true;
  }


  // after another click 
  else if ( toggleNavStatus === true ) {
    sideNavUl.style.visibility = "";
    sideNav.style.width = "";
    sideNavSpan.style.opacity = "";
  

    for (let i = 0 ; i<sideNavLinks.length; i++) {
      sideNavLinks[i].style.paddingLeft = "";
    }
    toggleNavStatus = false;
  }
}



