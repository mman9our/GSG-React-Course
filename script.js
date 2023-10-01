// function getUsers() {
//     return new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => {
//                 if (response.ok) {
//                     return response.json()
//                 } else {
//                     reject("error with fetch users api")
//                 }
//             })
//             .then((users) => {
//                 let div = document.getElementById("left-column")
//                 for (let user of users) {
//                     let content =
//                         `<div class="user" onclick="userClicked(${user.id})">
//                 <h3>${user.name}</h3>
//                 <h4>${user.email}</h4>
//             </div>`
//                     div.innerHTML += content
//                 }
//                 resolve();
//             });
//     })
// }

// function getPosts(userId) {
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         .then((response) => {
//             return response.json()
//         })
//         .then((posts) => {
//             let div = document.getElementById("right-column")
//             div.innerHTML = ""
//             for (let post of posts) {
//                 let content =
//                     `<div class="user">
//                 <h3>${post.title}</h3>
//                 <h4>${post.body}</h4>
//             </div>`
//                 div.innerHTML += content
//             }
//         });
// }

// getUsers().then(() => {
//     getPosts(1)
// }).catch((error) => {
//     console.log("Error:", error)

// })

// function userClicked(userId) {
//     getPosts(userId)
// }

function getUsersUsingAxios() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      let users = response.data;
      let div = document.getElementById("left-column");
      for (let user of users) {
        let content = `<div class="user" onclick="userClicked(${user.id})">
            <h3>${user.name}</h3>
            <h4>${user.email}</h4>
      </div>`;
        div.innerHTML += content;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getPostsUsingAxios(userId) {
  let url = "https://jsonplaceholder.typicode.com/posts?userId=" + userId;

  axios.get(url).then((response) => {
    console.log(response);
    let div = document.getElementById("right-column");
    div.innerHTML = "";
    let posts = response.data;
    for (let post of posts) {
      let content = `<div class="user">
                    <h3>${post.title}</h3>
                    <h4>${post.body}</h4>
                </div>`;
      div.innerHTML += content;
    }
  });
}

function userClicked(userId) {
  getPostsUsingAxios(userId);
}

getUsersUsingAxios();
getPostsUsingAxios(1);
