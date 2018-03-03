const users = [
  {
    name: "youssef",
    yearofbirth: 1994
  }, {
    name: "hassan",
    yearofbirth: 1996
  }, {
    name: "karim",
    yearofbirth: 1999
  }, {
    name: "hmida",
    yearofbirth: 1993
  }, {
    name: "hmaar",
    yearofbirth: 2000
  }
]

const isAdult = users.some(user => (new Date().getFullYear() - user.yearofbirth >= 19))
//console.log(isAdult);


const allAdults = users.every(user => (new Date().getFullYear() - user.yearofbirth >= 19))
//console.log(allAdults);

const user = users.find(user => user.name.includes('h'));

const userIndex = users.findIndex(user => user.name.includes('hm'));

console.log(userIndex);

//users.splice(userIndex,1);

const newUsers = [
  ...users.slice(0,userIndex),
  ...users.slice(userIndex+1)
]
console.log("hado users");
console.log(users);

console.log("hado new users");
console.log(newUsers);
//console.log(users);
