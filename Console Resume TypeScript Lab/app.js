"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var bodyMaker = function () { return jquery_1.default('body').html('<div><h2>TypeScript Console Resume</h2></div>'); };
bodyMaker();
console.log("Adam Vaughn".toUpperCase());
console.log("Career: Full Stack Developer");
console.log("Description: A man in over his head");
console.log("");
console.log("Interests");
console.log("* coding");
console.log("* television");
console.log("* hiking");
console.log("* music");
console.log("");
console.log("Previous experience:");
displayPosition("Brick Crew", "Cheap labor", "Toted some  heavy things");
displayPosition("Steel Mill", "Not so cheap labor", "Burned myself for money");
displayPosition("Cable Company", "Cheap labor", "Signal-slinger");
console.log("");
console.log("My skills:");
displaySkill("*coding*", true);
displaySkill("hang-gliding", true);
displaySkill("guitar", false);
displaySkill("nose-picking", true);
displaySkill("square-dancing", false);
displaySkill("yoga", false);
function displayPosition(company, job, description) {
    console.log("* " + job + " at " + company + " : " + description);
}
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("* BAM: " + skill);
    }
    else {
        console.log("* " + skill);
    }
}
