class Storage{
  // save the country and city to the Storage
  save(city, country){
    localStorage.setItem("city", city);
    localStorage.setItem("country", country);

  }

  // Get the country and city from the Storage
  getItems(){
    return [localStorage.getItem("city"), localStorage.getItem("country")];
  }

}
