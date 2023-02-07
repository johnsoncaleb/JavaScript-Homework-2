// JavaScript Homework 2
// Question 1

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function displayFavorites(person) {
    for (let dish in person) {
      if (Array.isArray(person[dish])) {
        console.log(dish + ": " + person[dish].join(", "));
      } else if (typeof person[dish] === "object") {
        let subDishValues = [];
        for (let subDish in person[dish][0]) {
          subDishValues.push(person[dish][0][subDish]);
        }
        console.log(dish + ": " + subDishValues.join(", "));
      } else {
        console.log(dish + ": " + person[dish]);
      }
    }
  }
  
displayFavorites(person3);
  
  


// Question 2

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };

  birthday = () => {
    this.age++;
  };
}

const person1 = new Person("John Doe", 27);
const person2 = new Person("Jane Doe", 27);

person1.birthday()
person1.birthday()
person1.birthday()
person1.printInfo()
person2.printInfo();


// Question 3

function checkStrLngth(str) {
  return new Promise((resolve) =>{
    if (str.length < 10) {
      resolve("Small Number");
    } else {
      resolve("Big Word")
    }
  })
}

checkStrLngth("this is a test string").then((value) => {
  console.log(value);
})