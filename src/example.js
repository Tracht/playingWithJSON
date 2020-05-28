// let contacts = {
//   name: "Timothy",
//   age: 35,
//   address: {
//     street: "1 Main St",
//     city: "Montreal"
//   },
//   interests: ["cooking", "biking"]
// }

// let request = new XMLHttpRequest();
// request.open('GET', 'users.json', true);
//   reqeust.onload = function () {
//   // Convert JSON data to an object
//   let users = JSON.parse(this.response);
//
//   let output = '';
//   for (var i = 0; i < users.length; i++) {
//     output += '<li>' + users[i].name +' is aged ' + users[i].age + ' years.'; '</li>'
//   }
//   document.getElementById('users').innerHTML = output;
// }
//
// request.send();

fetch('./users.json').then(response => {
  return response.json();
}).then(data => {
  //WORK WITH YOUR JSON DATA HERE
  console.log(data);
}).catch(err => {
  //WHAT TO DO WHEN REQUEST FAILS
  console.log('request failed');
});
