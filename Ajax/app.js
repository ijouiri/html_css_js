document.querySelector(".btn").addEventListener("click", loadData);

function loadData(e){
  e.preventDefault();

  let xhr = new XMLHttpRequest()

  xhr.open("GET","data.txt", true);

  xhr.onload = function (){
    if (this.status === 200) {
      console.log(this.responseText);
    }
  }

  xhr.send();
}
