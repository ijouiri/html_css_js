// Init the Github Oauth
const github = new Github;
const ui = new UI;

document.querySelector(".input-form").addEventListener("keyup",e => {
  e.preventDefault();
  const input = e.target.value;

  if (!input == ""){
    github.getUser(input)
      .then(user => {
      if (user.userData.message == "Not Found"){
        // show alert
        ui.showAlert("red");

      }else{
        //show the profile info and the repos
        ui.showAlert("#66FF00");
        ui.showProfile(user.userData);
        ui.showRepos(user.repos);
        console.log(user);
      }
    })
  }else{
    // when the imput is empty clear the profile
    ui.clearProfile();

  }
});
