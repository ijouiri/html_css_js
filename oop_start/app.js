function Person (name, dob){
  this.name = name;

  this.birthDay = new Date(dob);
  this.calcuateAge = function(){
    let diff = Date.now() - this.birthDay.getTime();
    let ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}


let john = new Person("john", "06/15/1997");

console.log(john.calcuateAge());

console.log(Date.now());
