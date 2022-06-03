const loading = document.querySelector(".loading")
const bg = document.querySelector(".bg")

let load = 0;

let int = setInterval(blurring, 30)

function blurring(){
  load++
  if (load == 100){
    clearInterval(int)
  }

  loading.innerText = `${load}%`
  bg.style = `filter: blur(${scale(load, 0, 100, 30, 0)}px);`;
  loading.style.opacity = `${scale(load, 0, 100, 100, 0)}%`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min)*(out_max-out_min)) / (in_max
 -in_min)+out_min;
}
