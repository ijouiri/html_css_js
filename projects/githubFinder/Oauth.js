// secred_id = f8fdde24196927d89a6cc08ddc910df6d72de6f2
// client_id = b41cf2c96932fac1c502
// token = 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
class Github {
  constructor(){
    this.client_secret = "f8fdde24196927d89a6cc08ddc910df6d72de6f2";
    this.client_id = "b41cf2c96932fac1c502";
    this.token = "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"
  
  }

  async getUser(user){
      //const data = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const data = await fetch(`https://api.github.com/users/${user}`, {
        method: "GET",
        headers: {
          "Authorization": `token ${this.token}`
          // "client_id": this.client_id,
          // "client_secret": this.client_secret
        }
      });
      const reposRes = await fetch(`https://api.github.com/users/${user}/repos`,{
        method: "GET",
        headers: {
          "Authorization": `token ${this.token}`
          // "client_id": this.client_id,
          // "client_secret": this.client_secret
        }

      })


      const repos = await reposRes.json();
      const userData = await data.json();
      return {
        userData,
        repos
      }
    }
  }
