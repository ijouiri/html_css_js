
// Create a itrator
// function itertorNames(names){
//   let nexIndex = 0;
//
//   return {
//     next: function() {
//       return nexIndex < names.length ? { value: names[nexIndex++], done: false } :
//         { done: true }
//     }
//
//     //,
//     // before: () => {
//     //   return  !(nexIndex > names.length + 1 || nexIndex == 0 ) ?
//     //     { value: names[nexIndex-=2], done: false } :
//     //     { done: true}
//     // }
//   }
// }
//
// // Create array of names
//
// const namesArray = ["abdo", "riyad", "nahid", "moha"];
// const names = itertorNames(namesArray);




// Create a Generator

// function* sayNames(){
//   yield "abdo";
//   yield "riyad";
//   yield "nahid";
// }
//
// let name = sayNames();
//
// console.log(name.next());
// console.log(name.next());

// Create an id Generator
function* idGen(){
  let id = 0;

  while(true){
    yield id++;
  }
}

const gen = idGen();

console.log(gen.next());
