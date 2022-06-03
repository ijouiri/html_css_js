const http = new easyHttp;

let url = "https://jsonplaceholder.typicode.com/users/1"

// Get request with fetch and Promise
// http.get(url)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


// Create User
const user = {
  name: "abdellah ijouiri",
  username: "mr-bugs",
  email: "abdellahij@gmail.com"
};

// Post request with fetch and Promise

// http.post(url,user)
//   .then(user => console.log(user))
//   .catch(err => console.log(err))

// Put request with fetch and Promise
http.put(url, user)
  .then(user => console.log(user))
  .catch(err => console.log(err))
