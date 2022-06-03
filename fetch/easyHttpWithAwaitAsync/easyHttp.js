class easyHttp{
  async get(url) {
    // return new Promise((resolve, reject) => {
    //   fetch(url)
    //     .then(res => res.json())
    //     .then(users => resolve(users))
    //     .catch(err => reject(err))

    const response = await fetch(url);
    const Data = await response.json();
    return Data;
  }

  async post(url, data){
    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "POST",
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   })
    //     .then(res => res.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err))
    // });

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        "Content-type": "application/json"
      }
    })

    const resData = await response.json();
    return resData;
  }

  async put(url, data){
    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "PUT",
    //     headers:{
    //       "Content-type":"application/json"
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then(res => res.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err))
    // });

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    });

    const resData = await response.json();
    return resData;
  }


  async delete(url, data){
    const response = await fetch(url, {
      method: "DELETE",
      headers:{
        "Content-type": "application/json",
      },
      body:JSON.stringify(data)
    })

    const result = await "User has been deleted";
    return result;

  }
}
