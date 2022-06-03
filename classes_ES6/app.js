class Person {
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  getAge(){
    let diff = Date.now() - this.birthday.getTime();
    let diffInYears = new Date(diff);
    return Math.abs(diffInYears.getFullYear() - 1970);
  }

  greeting(){
    return `Hello ${this.firstName} ${this.lastName} welcome.`;

  }

  static addNumbers(x, y){
    return x + y;
  }
}


let person1 = new Person("abdo", "ijouiri", "06-15-1997");

console.log(person1.getAge());

console.log(Person.addNumbers(4,4));
