/*
Assignment: Client-Side JavaScript Basics
Student Name: Tonglin Yang
Program: IT Web Programming
Course: ABC Course
Date: Jan 2026

Description:
This project demonstrates basic JavaScript concepts including:
variables, conditionals, loops, functions, and console output.
*/

let studentName = "Tonglin Yang";
let age = 19;
const program = "IT Web Programming";
let completedAssignments = 3;
let isLoggedIn = true;

if (age < 18) {
  console.log("Access denied: Student must be 18 or older");
} else {
  console.log("Access granted");
}

if (!isLoggedIn) {
  console.log("Please log in to continue");
}

switch (program) {
  case "IT Web Programming":
    console.log("Welcome to the IT Web Programming program");
    break;
  case "Networking":
    console.log("Welcome to the Networking program");
    break;
  case "Cybersecurity":
    console.log("Welcome to the Cybersecurity program");
    break;
  default:
    console.log("Program not recognized");
}

for (let i = 1; i <= completedAssignments; i++) {
  console.log("Assignment " + i + " completed");
}

let remaining = 5 - completedAssignments;
while (remaining > 0) {
  console.log("Remaining assignments: " + remaining);
  remaining--;
}

function displaySummary(name, program) {
  console.log("Student Name: " + name);
  console.log("Program: " + program);
}

displaySummary(studentName, program);

function calculateProgress(completed, total) {
  return (completed / total) * 100;
}

let progress = calculateProgress(completedAssignments, 5);
console.log("Progress: " + progress + "%");

const hasPassed = completed => completed >= 3;

if (hasPassed(completedAssignments)) {
  console.log("Status: Passed");
} else {
  console.log("Status: Not Passed");
}

if (studentName === "") {
  console.log("Student name cannot be empty");
}

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof isLoggedIn);
