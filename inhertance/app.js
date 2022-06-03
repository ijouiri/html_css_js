// Create Person constructor

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}


Person.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName}`;
}

let person1 = new Person("abdellah", "ijouiri");

function Customers(firstName, lastName, addr, plan){
  Person.call(this, firstName, lastName);
  this.addr = addr;
  this.plan = plan;
}

Customers.prototype = Object.create(Person.prototype);

Customers.prototype.constructor = Customers;

let customer1 = new Customers("abdo", "ijouiri", "derb mouley", "premium");

console.log(customer1.greeting());

document.querySelector("boo")
