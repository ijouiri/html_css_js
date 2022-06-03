class Weather{
  constructor(city, country){
    this.city = city;
    this.country = country;
  }

  async getData(){
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=5717f173e9e0b01d3b966cdd82600845`)
    
    const weatherData = await res.json();
    return weatherData;

  }

  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }
}
