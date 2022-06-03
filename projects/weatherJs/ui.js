class UI{
  constructor(){
    this.locationUI = document.querySelector("#w-location")
    this.description = document.querySelector("#w-desc")
    this.string = document.querySelector("#w-string")
    this.icon = document.querySelector("#w-icon")
  }

  display(info){
    this.locationUI.textContent = `${info.sys.country}, ${info.name}`;
    this.description.textContent = `${info.weather[0].description}`;
    this.string.textContent = `${info.main.feels_like}°F,    ${(parseFloat(info.main.feels_like)-273.15).toFixed(2)}°C`;
    this.icon.setAttribute("src", `https://openweathermap.org/img/w/${info.weather[0].icon}.png`)
  }
}
