// Json Object
// Javascript Object

var userJson = { "id": "1", "name": "Wasim" };

var userJsObject = {
  id: "1",
  name: "Wasim",
  showName: function () {
    return this.name;
  },
};

console.log(JSON.stringify(userJsObject));

// Promise -> ASYNC
// Pending
// Fulfilled -> resolve
// reject Error

console.log("1");
setTimeout(() => {
  console.log("2");
}, 3000);
console.log("3");
setTimeout(() => {
  console.log("4");
}, 5000);
