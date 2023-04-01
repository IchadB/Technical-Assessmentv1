console.log("connected");

//ACTIVITY #1

// Assign a variable for first name, last name, age, and hobbies using the proper naming convention.
// Create a constant variable for a city, house number, state, and street.
// Create a function for User Information, Hobbies, and Relationship Status.

// let firstName = "Richard";
// let lastName = "Betalmos";
// let age = 30;
// let hobbies = ["ML", "Basketball", "Coding", "Anime"];
// let isMarried = false;

// const city = "Buenavista";
// const houseNumber = "0110";
// const state = "Bohol";
// const street = "Lapacan Sur"

// function myInfo(firstName, lastName, age, hobbies, isMarried, city, houseNumber, state, street){
// console.log(`First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nHobbies: ${hobbies}`);
// console.log("Work Address:");
// console.log(`City: ${city}\nHouse Number: ${houseNumber}\nState: ${state}\nStreet: ${street}`);
// console.log(`I am ${lastName}, ${firstName}. ${age} years of age`);
// console.log(`My hobbies are ${hobbies}`);
// console.log("I live in: ");
// console.log(`City: ${city}\nHouse Number: ${houseNumber}\nState: ${state}\nStreet: ${street}`);
// console.log(`Married?: ${isMarried}`)
// }

// myInfo(firstName, lastName, age, hobbies, isMarried, city, houseNumber, state, street);




//ACTIVITY #2

// let a = 5;
// let b = 7;

// a+=1;
// console.log(a);
// console.log(a !== b);






//ACTIVITY #3

// let userColorInput = prompt("Enter a color between Black, Violet, Pink: ");

// function userColor(userColorInput) {
//     switch (userColorInput.toLowerCase()) {
//         case 'black':
//             console.log(`You enter color ${userColorInput}`);
//             break;
//         case 'violet':
//             console.log(`You enter color ${userColorInput}`);
//             break;
//         case 'pink':
//             console.log(`You enter color ${userColorInput}`);
//             break;
//         default:
//             console.log("Invalid input");
//     }
// }

// userColor(userColorInput);








//ACTIVITY #4

// function oddOrEven(num){
//     if(num % 2 == 1){
//         console.log(`${num} is odd number`)
//     }
//     else if(num % 2 == 0){
//         console.log(`${num} is even number`)
//     }
//     else if(isNaN(num)){
//         console.log(`Unexpected Input`)
//     }
// }

// let userInput = prompt("Enter a number: ");
// oddOrEven(userInput);






//ACTIVITY #5

// let userInput = prompt("Enter a number from 0 to 20: ");

// function displayEvenNumber(userInput){
// for(let i=userInput; i>=0; i--){
//     if(i % 2 == 0)
//         console.log(i);
// }
// }
// displayEvenNumber(userInput);






// ACTIVITY #6

// let userInput = prompt("Enter a number less than 50: ");
// for (let j = 0; j < 50; j++) {

//     if ((j % 10 == 0) && (j>1)) {
//         console.log(`The number ${j} is divisible by 10. Skipping the number`);
//         continue;
//     }
//     if ((j % 5 == 0) && (j>1)) {
//         console.log(j);
//     }
//     if (j == userInput) {
//         console.log(`Currently at number ${j}. Terminating the loop`);
//         break;
//     }
// }





// ACTIVITY #7

// let username = "student@mail.com";
// let password = "discovery";
// let logInCount = 3;

// while (logInCount != 0) {

//     let username2 = prompt("Enter username or email(student@mail.com): ");
//     let password2 = prompt("Enter password(discovery): ");

//     if (logInCount > 0) {

//         if ((username2 !== username) && (password2 !== password)) {
//             logInCount--;
//             alert(`Log-in failed. You now have only ${logInCount} login attempts `);
//             console.log(`Log-in failed. You now have only ${logInCount} login attempts `);
//         }

//         else if ((username2 === username) && (password2 === password)) {
//             alert(`Log-in succesful! `);
//             console.log(`Log-in succesful! `);
//             break;
//         }

//     }
// }