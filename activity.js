/* Beginner Challenge */

const bookList = [
   { title: "Don Quixote", author: "Miguel de Cervantes" },
   { title: "Ulysses", author: "James Joyce" },
   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
   { title: "Moby Dick", author: "Herman Melville" },
];

/* Do all of these using proper ES6 syntax
Using the following array of objects,
*/
// (1) Write an arrow function that adds a new entry to bookList
const addBook = (book) => bookList.push(book);

addBook({ title: "Title1", author: "Author1" });
console.log(bookList);

// (2) Write an arrow function that removes a specific book from the bookList
const removeBook = (title) => {
   const index = bookList.findIndex((book) => book.title === title);
   if (index !== -1) {
      bookList.splice(index, 1);
   }
};

removeBook("Don Quixote");
console.log(bookList);

// (3) Write an arrow function that lists out all the books or all the authors in the book list */

// List all book titles:
const listBooks = () => bookList.map((book) => book.title);
console.log(listBooks());

// List all authors:
const listAuthors = () => bookList.map((book) => book.author);
console.log(listAuthors());

/*
/* Intermediate Challenge */

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const checkNumber = (num) => (num > 0 ? "Positive" : "Negative");

console.log(checkNumber(5));
console.log(checkNumber(-3));

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

const day = "Wednesday";

switch (day) {
   case "Monday":
      console.log("good luck");
      break;
   case "Tuesday":
      console.log("doing good");
      break;
   case "Wednesday":
      console.log("hump day");
      break;
   case "Thursday":
      console.log("almost there");
      break;
   case "Friday":
      console.log("party");
      break;
   case "Saturday":
      console.log("have fun");
      break;
   case "Sunday":
      console.log("enjoy your weekend");
      break;
   default:
      console.log("Not a valid day");
}

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

const sumUp = (num) => {
   let sum = 0;
   for (let i = 1; i <= num; i++) {
      sum += i;
   }
   return sum;
};
console.log(sumUp(4));

/* Harder Challenge */

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
    me what I should wear accordingly */

const convertTemperature = (celsius) => {
   const fahrenheit = (celsius * 9) / 5 + 32;
   if (fahrenheit < 32) {
      return "Wear a coat";
   } else if (fahrenheit >= 32 && fahrenheit < 60) {
      return "Wear a sweater";
   } else {
      return "Wear a t-shirt";
   }
};
console.log(convertTemperature(30)); // 86°F, Wear a t-shirt
console.log(convertTemperature(0)); // 32°F, Wear a sweater
console.log(convertTemperature(-10)); // 14°F, Wear a coat

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
  and an averageGrade field representing the letter grade that corresponds to their GPA */

const attendance = [
   { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
   { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
   { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
   { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
   { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
   { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
   { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

/* Hardest Challenge (Don't do this without completing harder challenges) */

/* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

// assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
// does not support leading zeros
