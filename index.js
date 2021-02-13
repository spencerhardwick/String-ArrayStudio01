const input = require('readline-sync');
let str = "LaunchCode";

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.substr(3)+str.substr(0, 3);
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`I replaced ${str} with ${newStr} using elite coding skills.`);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userNumInput = input.question("Pick a number between 0 and 9 ");
newStr = str.substr(userNumInput)+str.substr(0, userNumInput);

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userNumInput > 9) {
  newStr = str.substr(3)+str.substr(0, 3);
}
console.log(newStr);