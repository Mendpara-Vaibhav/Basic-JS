const person = {
  name: "John",
  age: 36,
  city: "San Francisco",
};
let text = "";
for (let x in person) {
  text += person[x] + " ";
}
document.getElementById("display").innerHTML = text;

const myArr = Object.values(person);
document.getElementById("arr").innerHTML = myArr;

let myStr = JSON.stringify(person);
document.getElementById("str").innerHTML = myStr;

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let texts = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}

document.getElementById("demos").innerHTML = texts;
