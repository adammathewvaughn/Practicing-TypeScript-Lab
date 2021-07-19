"use strict";
///////////////////Buttons&Styling/////////////////////
var button1 = document.createElement("button"); ///
button1.innerText = "Generate a Die"; ///
button1.className = "btn"; ///
var button2 = document.createElement("button"); ///
button2.innerText = "Roll the Dice"; ///
button2.className = "btn"; ///
var button3 = document.createElement("button"); ///
button3.innerText = "Sum the Dice"; ///
button3.className = "btn"; ///
var buttondiv = document.createElement("div"); ///
var diedivcontainer = document.createElement("div"); ///
buttondiv.className = "btndiv"; ///
buttondiv.appendChild(button1); ///
buttondiv.appendChild(button2); ///
buttondiv.appendChild(button3); ///
document.body.appendChild(buttondiv); ///
document.body.appendChild(diedivcontainer); ///
diedivcontainer.className = "diedivcontainer"; ///
var colorSelection = [
    "red",
    "pink",
    "orange",
    "aqua",
    "cyan",
    "magenta",
    "yellow",
    "green",
    "blue",
    "purple",
    "maroon",
    "gold",
]; ///
////////////////////Buttons&Styling////////////////////
var diearray = [];
button3.addEventListener("click", function () {
    var dievalues = [];
    diearray.forEach(function (die) { return dievalues.push(die.value); });
    var sum = dievalues.reduce(function (a, b) { return a + b; });
    console.log(sum);
});
button1.addEventListener("click", function () {
    var warning = confirm("🔥🔥💀Will you jeopardize the sanctity of your mortal soul for the cheap, sinful thrill of gambling💀🔥🔥?"); // ( ͡° ͜ʖ ͡°)
    if (warning == true) {
        new Die();
        // console.log(diearray);
    }
    else
        alert("You made the right choice.");
});
button2.addEventListener("click", function () {
    //when using a forEach, have to pass in parameter for what to
    //call each individual item from specified array
    // below, die in the forEach would be the same as diearray[i] in
    // a regular for loop
    diearray.forEach(function (die) { return die.roll(); });
});
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.diediv = document.createElement("div");
        this.diediv.className = "diediv";
        this.roll();
        diedivcontainer.appendChild(this.diediv);
        this.diediv.addEventListener("click", function () { return _this.roll(); });
        diearray.push(this);
    }
    Die.prototype.roll = function () {
        this.randomNum = Math.floor(Math.random() * 6 + 1);
        this.value = this.randomNum;
        this.diediv.innerText = this.value;
    };
    return Die;
}());
