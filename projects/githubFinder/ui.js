class UI{
  constructor(){
    this.profile = document.querySelector(".profile");
    this.repos = document.querySelector(".showRepos");
  }
  showAlert(color){
    const alertMsg = document.querySelector(".input-form");
    alertMsg.style.borderColor = color;
    
  }

  showRepos(repos){
    
    repos.forEach(userRepos => {
      this.repos.innerHTML += `
        <div class="col ">
          <a href="${userRepos.html_url}" target="_blank"><span>${userRepos.name}</span></a>
          <div class="repo-info">
            <button class="forks btn">Forks: ${userRepos.forks_count}</button>
            <button class="stars btn">Stars: ${userRepos.stargazers_count}</button>
            <button class="watching btn">Watching: ${userRepos.watchers}</button>
          </div>
        </div>
        <hr>
      `
    });
  }

  showProfile(user){
    this.profile.innerHTML= `
        <div class="img-profile">
          <img src="${user.avatar_url}"> 
          <a href="${user.html_url}" target="_blank"><button type="submit">Show Profile</button></a>
        </div>
        <div class="profile-info">
          <div class="generalInfo">
            <span class="btn followers">Followers: ${user.followers}</span>
            <span class="btn following">Following: ${user.following}</span>

            <span class="btn repos">Public repos: ${user.public_repos}</span>
            <span class="btn gists">Public Gists: ${user.public_gists}</span>
          </div>
          <div class="info">
            <ul>
              <li>Company: ${user.company}</li>
              <li>Website/blog: <a href="${user.blog}" target="_blank"> ${user.blog} </a> </li>
              <li>Location: ${user.location}</li>
              <li>Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
    `
  }

  clearProfile(){
    this.profile.innerHTML = "";
    this.repos.innerHTML = "";
  }
}
