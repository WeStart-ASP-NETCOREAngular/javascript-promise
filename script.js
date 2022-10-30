// Json Object
// Javascript Object

// var userJson = { "id": "1", "name": "Wasim" };

// var userJsObject = {
//   id: "1",
//   name: "Wasim",
//   showName: function () {
//     return this.name;
//   },
// };

// console.log(JSON.stringify(userJsObject));

// Promise -> ASYNC
// Pending
// Fulfilled -> resolve
// reject Error

// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 3000);
// console.log("3");
// setTimeout(() => {
//   console.log("4");
// }, 5000);

const promise1 = new Promise((resolve, reject) => {
  resolve("1");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2");
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  resolve("3");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("4");
  }, 5000);
});



promise1
  .then((result) => {
    console.log(result);
    return promise2;
  })
  .then((result) => {
    console.log(result);
    return promise3;
  })
  .then((result) => {
    console.log(result);
    return promise4;
  })
  .then(function (result) {
    console.log(result);
  });
