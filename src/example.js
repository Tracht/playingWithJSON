let contacts = {
  name: "Timothy",
  age: 35,
  address: {
    street: "1 Main St",
    city: "Montreal"
  },
  interests: ["cooking", "biking"]
}

// let s = JSON.stringify(contacts);
// let t = JSON.parse(contacts);

let users = [
  {
    name: "Timothy",
    age: 35
  },
  {
    name: "Georgette",
    age: 29
  },
  {
    name: "Craig",
    age: 54
  }
];

let output = '';

for (var i = 0; i < users.length; i++) {
  // console.log(users[i].name);
  output += '<li>'+users[i].name+'</li>';
}

document.getElementById('users').innerHTML = output;
