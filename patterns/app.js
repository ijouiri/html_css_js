// Standard Module Pattern

// const dom = (function(){
//   let name =  "Hello World";
//
//   function putText(){
//     document.querySelector("h1").textContent = name;
//   }
//
//   return{
//     sayHello: putText()
//   }
// })();
//
//
// dom.sayHello();


// Revealing Module Pattern

// const personDB = (function (){
//   let persons = [];
//
//   function addPerson(person){
//     persons.push(person);
//     console.log("Person is been added to DB ...")
//   }
//
//   function getPersons(id) {
//     return persons.find(person => {
//       return person.id === id;
//     });
//   }
//
//   return {
//     addPerson: addPerson,
//     getPersons: getPersons
//   }
//
// })();
//
//
// personDB.addPerson({id: 1, name:"abdo"});
//
// console.log(personDB.getPersons(1));

//Singleton Pattern

// const Singleton = (function (){
//   let instance;
//
//   function addInstance(){
//     const item = new Object({name: "abdo"});
//     return item;
//   }
//
//   return {
//     getInstance: function(){
//       if(!instance){
//         instance = addInstance();
//       }
//       return instance;
//     }
//   }
// })();
//
//
// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();
//
// console.log(instanceA, instanceB, instanceA === instanceB);

//Factory Pattern

// function MemeberFactory(){
//   this.addMemeber = function (name, type){
//     let member;
//     if (type == "simple"){
//       member = new SimpleMemeberShip(name);
//     }else if(type == "standard"){
//       member = new StandardMemeberShip(name);
//     }else if (type == "super"){
//       member = new SuperMemeberShip(name);
//     }
//
//     member.type = type;
//
//     member.showInfo = function(){
//       console.log(`${this.name} => (${this.type}) it cost: ${this.cost}`)
//     }
//
//     return member;
//   }
// }
//
// function SimpleMemeberShip(name){
//   this.name = name;
//   this.cost = "5$";
// }
//
// function StandardMemeberShip(name){
//   this.name = name;
//   this.cost = "25$";
// }
//
// function SuperMemeberShip(name){
//   this.name = name;
//   this.cost = "55$";
// }
//
//
// const memebers = [],
//       factory = new MemeberFactory();
//
// memebers.push(factory.addMemeber("abdo", "simple"))
// memebers.push(factory.addMemeber("riyad", "super"))
// memebers.push(factory.addMemeber("nahid", "simple"))
// memebers.push(factory.addMemeber("john doe", "super"))
// memebers.push(factory.addMemeber("john smith", "standard"))
//
// memebers.forEach(member =>{
//   member.showInfo();
// })


// //Observer Pattern
//
// function EventObserver(){
//   this.observer = [];
// }
//
// EventObserver.prototype = {
//   subscribe: function(fn){
//     this.observer.push(fn)
//     console.log("You are Subscribed");
//   },
//
//   unsubscribe: function(fn){
//     this.observer = this.observer.filter((item) =>{
//       if(item !== fn){
//         return item;
//       }
//     })
//     console.log("You are UnSubscribed");
//   },
//
//   fire: function(){
//     this.observer.forEach(function(item){
//       item.call();
//     })
//   }
// }
//
//
// const click = new EventObserver;
//
// document.querySelector(".sub").addEventListener("click", ()=>{
//   click.subscribe(getCurrentMilliSeconds)
// })
//
//
// document.querySelector(".unsub").addEventListener("click", ()=>{
//   click.unsubscribe(getCurrentMilliSeconds)
// })
//
// document.querySelector(".fire").addEventListener("click", ()=>{
//   click.fire();
// })
//
// const getCurrentMilliSeconds = function(){
//   console.log(`Current Milliseconds : ${new Date().getMilliseconds()}`)
// }

// Mediator Pattern

// function Users(name){
//   this.name = name;
//   this.chatroom = null;
// }
//
// Users.prototype = {
//   send: function(message, to){
//     this.chatroom.send(message, this, to);
//   },
//
//   receive: function(message, from){
//     console.log(`${from.name} to ${this.name}: ${message}`);
//   }
//
// }
//
// function Chatroom(){
//   let users = {}; //list of users
//
//   return {
//     send: function (message, from, to){
//       if (!to){
//         for (key in users){
//           if (users[key] !== from){
//             users[key].receive(message, from);
//           }
//         }
//
//       }else{
//         to.receive(message, from)
//       }
//
//     },
//     register: function(user){
//       users[user.name] = user;
//       user.chatroom = this;
//     }
//   }
//
// }
//
// const abdo = new Users("abdo");
// const nahid = new Users("nahid");
// const riyad = new Users("riyad");
//
// const chat = new Chatroom();
// chat.register(abdo)
// chat.register(nahid);
// chat.register(riyad);
//
// abdo.send("hello", nahid)
// riyad.send("hello", abdo)
// abdo.send("YO everyone")


// State Pattern

const PageState = function (){
  let currentState = new homeState(this);

  this.init = function(){
    this.change(new homeState);
  }

  this.change = function(state){
    currentState = state;
  }

}

const homeState = function(page){
  document.getElementById("heading").textContent = null;
  document.getElementById("content").innerHTML = `
      <main role="main" class="inner cover">
        <h1 class="cover-heading">Cover your page.</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </main>
  `;
}


const aboutState = function(page){
  document.getElementById("heading").textContent = "About-Us";
  document.getElementById("content").innerHTML = `
  <div class="aboutus-section">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus">
                        <h2 class="aboutus-title">About Us</h2>
                        <p class="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                        <p class="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                        <a class="aboutus-more" href="#">read more</a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus-banner">
                        <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt="">
                    </div>
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Work with heart</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Reliable services</h4>
                                    <p>Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Great support</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
}



const contactState = function(page){
  document.getElementById("heading").textContent = "Contact-Us";
  document.getElementById("content").innerHTML = `
          <div class="container contact-form">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style="width: 100%; height: 150px;"></textarea>
                        </div>
                    </div>
                </div>
            </form>
          </div>
  `;
}

// init Page State

const page = new PageState();
page.init();


// UI vars

const home = document.getElementById("home"),
      about = document.getElementById("about"),
      contact = document.getElementById("contact");

home.addEventListener("click", (e) =>{
  e.preventDefault();
  page.change(new homeState());
})

about.addEventListener("click", (e) =>{
  page.change(new aboutState());
  e.preventDefault();
})

contact.addEventListener("click", (e) =>{
  e.preventDefault();
  page.change(new contactState);
})
