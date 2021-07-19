"use strict";
var myName = "Adam";
console.log(myName); //Expected output = "Adam";
var STATES = 50;
var computation = (5 + 4);
function lionelRichie() {
    alert("Hello.... Is it me you're looking for... I can see it in your eyes... I can see it in your smile");
}
lionelRichie();
var people = [
    {
        name: "Charles",
        age: 21
    },
    {
        name: "Abby",
        age: 27
    },
    {
        name: "James",
        age: 18
    },
    {
        name: "John",
        age: 17
    }
];
//output: "Charles"
// console.log(people[0].name)
function checkAge(name, age) {
    //not old enough
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
        //are old enough
    }
    else {
        alert(name + " may enter");
    }
}
checkAge("Charles", 27);
checkAge("Abby", 55);
checkAge("James", 20);
checkAge("John", 19);
/*for (let i = 0; i < people.length; i++) {

  checkAge(people[i].name, people[i].age)
}*/
var myFavoriteVegetables = ["Tomatoes", "Corn", "Okra", "Squash"];
for (var i = 0; i < myFavoriteVegetables.length; i++) {
    console.log(myFavoriteVegetables[i]);
} //Expected output = "Tomatoes", "Corn", "Okra", "Squash"
var myPet = {
    name: "Smalls",
    breed: "Squirrel"
};
console.log(myPet.breed, myPet.name);
var folks = [
    {
        name: "Bill",
        age: 18
    },
    {
        name: "Billy",
        age: 19
    },
    {
        name: "Brian",
        age: 20
    },
    {
        name: "Bob",
        age: 21
    },
    {
        name: "Bobby",
        age: 22
    },
    {
        name: "Brad",
        age: 23
    }
];
for (var i = 0; i < folks.length; i++) {
    checkAge(folks[i].name, folks[i].age);
}
function getLength(string) {
    return string.length;
}
var stringLength = getLength("hello world");
if (stringLength % 2 === 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
