const weather = new Weather(),
      ui = new UI,
      storage = new Storage;

weather.city = storage.getItems()[0];
weather.country = storage.getItems()[1]

console.log(weather.city, weather.country);

document.addEventListener("DOMContentLoaded", getData);

document.getElementById("w-change-btn").addEventListener("click", (e)=>{
  e.preventDefault();
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);

  getData();
  storage.save(city, country);

  //Close the modal by Jquery i dont know how it works 

  $("#locModal").modal("hide");
});

function getData(){
  weather.getData()
    .then(weatherData => {
    ui.display(weatherData)
    })
    .catch(error => console.log(error))

}
