///////////////////Buttons&Styling/////////////////////
let button1 = document.createElement("button"); ///
button1.innerText = "Generate a Die"; ///
button1.className = "btn"; ///
let button2 = document.createElement("button"); ///
button2.innerText = "Roll the Dice"; ///
button2.className = "btn"; ///
let button3 = document.createElement("button"); ///
button3.innerText = "Sum the Dice"; ///
button3.className = "btn"; ///
let buttondiv = document.createElement("div"); ///
let diedivcontainer = document.createElement("div"); ///
buttondiv.className = "btndiv"; ///
buttondiv.appendChild(button1); ///
buttondiv.appendChild(button2); ///
buttondiv.appendChild(button3); ///
document.body.appendChild(buttondiv); ///
document.body.appendChild(diedivcontainer); ///
diedivcontainer.className = "diedivcontainer"; ///
let colorSelection = [
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
let diearray: any[] = [];
button3.addEventListener("click", () => {
  let dievalues: any[] = [];
  diearray.forEach((die) => dievalues.push(die.value));
  let sum = dievalues.reduce((a, b) => a + b);

  console.log(sum);
});
button1.addEventListener("click", function () {
  let warning = confirm(
    "🔥🔥💀Will you jeopardize the sanctity of your mortal soul for the cheap, sinful thrill of gambling💀🔥🔥?"
  ); // ( ͡° ͜ʖ ͡°)
  if (warning == true) {
    new Die();

    // console.log(diearray);
  } else alert("You made the right choice.");
});

button2.addEventListener("click", function () {
  //when using a forEach, have to pass in parameter for what to
  //call each individual item from specified array
  // below, die in the forEach would be the same as diearray[i] in
  // a regular for loop
  diearray.forEach((die) => die.roll());
});

class Die {
  diediv: HTMLDivElement;
  randomNum!: number;
  value: any;
  constructor() {
    this.diediv = document.createElement("div");
    this.diediv.className = "diediv";
    this.roll();
    diedivcontainer.appendChild(this.diediv);
    this.diediv.addEventListener("click", () => this.roll());
    diearray.push(this);
  }

  roll() {
    this.randomNum = Math.floor(Math.random() * 6 + 1);
    this.value = this.randomNum;
    this.diediv.innerText = this.value;
  }
}
