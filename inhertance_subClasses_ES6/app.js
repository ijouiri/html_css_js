class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `hello ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person{
  constructor(firstName, lastName, addr, memberShip){
    super(firstName, lastName)
    this.addr = addr;
    this.memberShip = memberShip;
  }
};

const abdo = new Person("abdo", "ijouiri");
const customer = new Customer("nahid", "bouziade", "hay mohammdi", "Standard");

console.log(abdo.greeting());
console.log(customer.greeting());
