// const productName = 'Droid';

// console.log(productName);

// const pricePerItem = 2000;

// console.log(pricePerItem);

///////////////////////////////////////

// let productName = "Droid";

// productName = "Repair droid";

// console.log(productName);

// let pricePerItem = 2000;

// pricePerItem = 3500;

// console.log(pricePerItem);

/////////////////////////////////////////

// const topSpeed = 160;

// console.log(topSpeed);

// const distance = 617.54;

// console.log(distance);

// const login = "mango935";

// console.log(login);

// const isOnline = true;

// console.log(isOnline);

// const isAdmin = false;

// console.log(isAdmin);

/////////////////////////////////////

// const pricePerItem = 3500;

// const orderedQuantity = 4;

// const totalPrice = (pricePerItem * orderedQuantity);

// console.log(totalPrice);

/////////////////////////////
// const productName = "Droid";

// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message);

////////////////////////////
// const pricePerDroid = 800;

// const orderedQuantity = 6;

// const deliveryFee = 50;

// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// console.log(message);

////////////////////////////////

// function sayHi() {
//     console.log('Hello, this is my first function!');
// }
// sayHi();

//////////////////////

// function add(a, b, c) {
//     console.log(`Addition result equals ${a+b+c}`);
// }

// const result1 = add(15, 27, 10);
// console.log(`Addition result equals ${result1}`);

// const result2 = add(10, 20, 30);
// console.log(`Addition result equals ${result2}`);

// const result3 = add(5, 10, 15);
// console.log(`Addition result equals ${result3}`);

///////////////////////////////////////////
// function add(a, b, c) {

//     return(a+b+c);
//   }

//   add(2, 5, 8); // 15

//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

/////////////////////////////////////////
// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//      console.log(message);
//     // Change code above this line
//     return message;
//   };

/////////////////////////////////
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerItem;

//     // Change code above this line
//     return totalPrice;
//   };

//////////////////////////////////////////////

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//     // Change code above this line
//     return message;
//   }

/////////////////////////////////
// function isAdult(age) {
//     // Change code below this line
//     const passed = (age>=18);

//     // Change code above this line
//     return passed;
//   }

//   console.log(isAdult(20))
// console.log(isAdult(14))
// console.log(isAdult(8))
// console.log(isAdult(37))
/////////////////////////////////////

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = password === `jqueryismyjam`;

//     // Change code above this line
//     return isMatch;
//   }

///////////////////////////////////

// let message;

// if (age>=18) { // Change this line
//   message = 'You are an adult';
// } else {
//   message = 'You are a minor';
// }

// return message;
// }

/////////////////////////////////////////

// function checkStorage(available, ordered) {
//     let message;

//     if(ordered > available) {
//         message = "Not enough goods in stock!" }
//         else {
//         message = "Order is processed, our manager will contact you."
//       }

//     return message;
//   }

//   checkStorage(100, 50);
// checkStorage(100, 30);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

////////////////////////////

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

//////////////////////////18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }

//   return message;
// }

////////////////////////////////////////////////////19
//   function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

//     if (password === null) {
//       message =  'Canceled by user!';
//     } else if (password === `jqueryismyjam`) {
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }

//     return message;
//   }
/////////////////////////////////////////////////20

// function checkStorage(available, ordered) {
//     let message;
//     if (ordered === 0) {
//         message = `There are no products in the order!`;}
//         else if (available < ordered) {
//             message =  `Your order is too large, there are not enough items in stock!`
//         } else {
//             message = `The order is accepted, our manager will contact you`
//         }

//     return message;
//   }

///////////////////////////////////////////////21

// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end; // Change this line

//     return isInRange;
//   }

////////////////////////////////////22

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = (subType == 'pro' || subType == 'vip'); // Change this line

//     return canAccessContent;
//   }

////////////////////////////////23

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange;

//     return isNotInRange;
//   }

/////////////////////////////////////////24

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT;
//       } else if (totalSpent >= 5000 && totalSpent < 20000 ) {
//         discount = BRONZE_DISCOUNT;
//       } else if (totalSpent >= 20000  && totalSpent < 50000 ) {
//         discount = SILVER_DISCOUNT;
//       } else {
//         discount = GOLD_DISCOUNT;
//       }

//       return discount;
//     }
///////////////////////////////////////////////   25

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line

//     if (ordered > available) {
//       message = "Not enough goods in stock!";
//     } else {
//       message = "The order is accepted, our manager will contact you";
//     }
//     // Change code above this line
//     return message;
//   }
// //// перетворення за тернарним методом
// function checkStorage(available, ordered) {
//     let message;
//   message = ordered > available ?  "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   return message;
// }

//////////////////////////////////////////////26

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;

//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//     return message;
//   }
/////////////////////////////////////////////////////////////////////////////////// 27

//   function getSubscriptionPrice(type) {
//     let price;

//    switch (type) {
//       case "starter":
//         price = 0;
//         break;

//       case "professional":
//         price = 20;
//         break;

//       case "organization":
//         price = 50;
//         break;
//     }

//     return price;
//   }

////////////////////////////////////////////////////////////////// 28

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;

//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;

//             case ADMIN_PASSWORD:
//                 message = "Welcome!";
//                 break;
//         default:
//             message = "Access denied, wrong password!";
//     }

//     return message;
//   }

/////////////////////////////////////////////// 29
// function getShippingCost(country) {
//     let message;

//     let price = 0;

//     switch (country) {
//         case `China`:
//             price = 100;
//             break;

//             case `Jamaica`:
//                 price = 120;
//                 break;

//             case `Australia`:
//                 price = 170;
//                 break;

//             case `Chile`:
//                 price = 250;
//                 break;
//         default:
//             return "Sorry, there is no delivery to your country";
//     }

//     message = `Shipping to ${country} will cost ${price} credits`;

//     return message;
//   }

// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів

////////////////////////////////////////////////30

// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line

//     return message;
//   }

////////////////////////////////////////31

//   const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic [0];
// const lastElement = courseTopic [courseTopic.length - 1];

//////////////////////////////32

// function getSubstring(string, length) {
//     const substring = string.slice (0, length);

//     return substring;
//   }

////////////////////////////////////////33

//   function formatMessage(message, maxLength) {
//     let result;

//     if (message.length > maxLength) {result = message.slice(0, maxLength) + '...';
//       }
//       else {
//         result = message;
//       }
//     return result;
//   }
/////////////////////////////////////////////////34

//   function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase();

//     return normalizedInput;
//   }

////////////////////////////////35
//   function checkForName(fullName, name) {
//     const result = fullName.includes (name);
//      return result;
//    }

//////////////////////////////36

// function checkForSpam(message) {
//     let result;

//     result = message.toLowerCase().includes(`spam`) || message.toLowerCase().includes(`sale`);
//     return result;
//   }

///////////////////////
/////////// HOME WORK 2

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log(checkAge);

//////////////////////////////////// 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//     return "Access denied, wrong password!";

//   // Change code above this line
// }

////////////////////////////////// 3 /////////////

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }  if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }

////////////////////// 4 ////////////

// const fruits = ["apple", "plum", "pear", "orange"]

////////////////////// 5 /////////////

// const fruits = ["apple", "plum", "pear", "orange"]
// const firstElement = fruits[0]
// const secondElement = fruits[1]
// const lastElement = fruits[fruits.length - 1]

///////////////// 6 //////////////////////

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana"
// console.log(fruits);

//////////////// 7 //////////////////

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length

/////////////// 8 ////////////////

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

//////////////// 9 //////////////
// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length - 1]];

// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// getExtremeElements([1, 2, 3, 4, 5])
// getExtremeElements(["Earth", "Mars", "Venus"])
// getExtremeElements(["apple", "peach", "pear", "banana"])

/////////////////// 10 //////////////////////////

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// splitMessage(message, delimiter)
// splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

//////////////////// 11 /////////////////////

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(` `).length * pricePerWord;
// }

////////////////// 12 ///////////////
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

////////////////////// 13 ///////////

// function slugify(title) {

//   return title.toLowerCase().split(` `).join(`-`);
// }
// console.log(slugify("Arrays for begginers"));
// slugify("English for developer")
// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

////////////////////// 14 ///////////////////

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice (0, 2);
// const nonExtremeEls = fruits.slice (1, fruits.length - 1);
// const lastThreeEls = fruits.slice (-3);

///////////////////// 15 ///////////////////
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

/////////////////////// 16 ///////////////

// function makeArray(firstArray, secondArray, maxLength) {

//   return firstArray.concat(secondArray).slice(0, maxLength);
// }

///////////////// 17 ///////////////////

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

////////////////// 18 ////////////////

// function calculateTotal(number) {

//   let result = 0;

//   for (let i = 0; i <= number; i ++) {
//     result += i;
//   }

//   return result;

//  }

////////////////// 19 //////////////

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

//////////////////// 20 ///////////////

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let number of order) {
//     total += number;
//   }
//   return total;
// }

/////////////////// 21 /////////////////

// function findLongestWord(string) {
//   let longestWord = '';

//   for (let word of (string.split(' '))) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

/////////////////////// 22 /////////////

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);

//   }
//   return numbers;
// }

/////////////////// 23 ///////////

// function filterArray(numbers, value) {

//   const result = [];

//   for (let number of numbers) {
//     if (number > value) {
//       result.push(number);
//     }
//   }

//   return result;

// }

//////////////////////// 24 //////////////

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }

////////////////////// 25 ///////////////

// function getCommonElements(array1, array2) {
// const commonArray = array1.concat(array2);
// const resultArray = [];

// for (let number of commonArray) {
//   if (array1.includes(number) && array2.includes(number) && !resultArray.includes(number)) {
//     resultArray.push(number);
//   }
// }

// return resultArray;

// }

////////////////////// 26 /////////////////

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const number of order) {
//     total += number;
//   }

//   return total;
// }

////////////////////// 27 ////////////////

// function filterArray(numbers, value) {

//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;

// }

/////////////////////////// 28 ////////////////

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

////////////////////////// 29 //////////////////

// function getEvenNumbers(start, end) {
//   const totalArray = [];
//   for (let i = start; i <= end; i ++) {
//     if (i % 2 === 0) {
//       totalArray.push(i);
//     }
//   }
//   return totalArray
//  }

//////////////// 30 //////////////////

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

//////////////// 31 ///////////////

// function findNumber(start, end, divisor) {

//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return number = i;

//     }
//   }

// }

//////////////// 32 ////////////////

// function includes(array, value) {

//   for (let element of array) {
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;
// }

////////////////////////////////////////////////////////
/////////// HOME WORK 3 ////////////////////////////////
///////////////////////////////////////////////////////

//////////////// 1 ////////////////

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

//////////////// 2 ////////////////

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

//////////////////3////////////////

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// Change code above this line

//////////////////// 4 ///////////////

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Change code above this line

/////////////////////////////// 5

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// Change code above this line

/////////////////6/////////////////

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push ('trusted');

//////////////////// 7 //////////

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

///////////////////////////// 8 //////////////////

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
//   // Change code below this line
//   // Change code above this line
// };

//////////////////////// 9 ////////////////

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line

// [emailInputName] : "henry.carter@aptmail.com",
// [passwordInputName] : "jqueryismyjam"

//   // Change code above this line
// };

///////////////////// 10 //////////

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
// values.push(apartment[key]);
// }
// Change code below this line

///////////////////// 11 /////////////////
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

// }

////////////////////// 12 ////////////////

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   for (const prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       propCount++;
//     }
//   }

//   // Change code above this line
//   return propCount;
// }

/////////////////////// 13 /////////////

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
//
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key])
// }

////////////////////// 14 //////////////
// function countProps(object) {

//   return Object.keys(object).length;

// }

/////////////////////// 15 ///////////

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

///////////////////// 16 /////////

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//  for (const salary of Object.values(salaries)) {
//   totalSalary += salary
//  }
//   return totalSalary;
// }

/////////////////  17 ///////////////

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)

// }

// //////////////////////// 18 //////

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
// for (const product of products) {
//   if (product.name === productName) {
//     return product.price
//   }
// }
// return null
// }

///////////////// 19 ////////////////

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const result = [];

//   for (let product of products) {
//     if (product[propName] !== undefined) {
//       result.push(product[propName])
//     }
//   }

//   return result;

//   // Change code above this line
// }

/////////////// 20 ////////////////

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let result = 0

//  for (let product of products) {
//    if (product.name === productName) {
//      result = product.price * product.quantity;
//      break
//    }

//  }

//  return result
//  }

///////////////////////// 21 //////////////

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

/////////////////////// 22 ///////////////

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday,
//   today,
//   tomorrow,
//    icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//   } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

///////////////////// 23 //////////////
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

/////////////////// 24 ///////////////

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

////////////////// 25 ////////////////

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

/////////////////////// 26 ///////////////////

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

///////////////////////// 27 /////////////////

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

//////////////////// 28 ///////////////

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

///////////////////// 29 /////////////

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

////////////////// 30 ///////////////

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return {completed, category, priority, ...data}
//   // Change code above this line
// }

////////////////// 31 ////////////////

// function add(...args) {
//   let sum = 0;

//  for (let arg of args) {
//    sum += arg;
//  }
//  return sum;
//  // Change code above this line
// }

////////////////////// 32 /////////////////

// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > number) {
//       total += arg;
//     }
//   }

//   return total;
// }

////////////////// 33 ///////////////

// function findMatches(number, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//         if (number.includes(arg)) {
//           matches.push(arg);
//         }
//       }
//   // Change code above this line
//   return matches;
// }

////////////////////// 34 ///////////

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

////////////////// 35 //////

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

// this.books.splice(this.books.indexOf(oldName), 1, newName);

//     // Change code above this line
//   },
// };

///////////////// 36 //////////

// const atTheOldToad = {

//   potions: [],
// };

///////////// 37 ////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions() {
//   return this.potions;
// }
//   // Change code above this line
// };

///////////// 38 /////////

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

// this.potions.push(potionName);

//     // Change code above this line
//   },
// };

////////////// 39 /////////

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

//     this.potions.splice(this.potions.indexOf(potionName), 1);

//     // Change code above this line
//   },
// };

//////////////// 40 ///////////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);

//     // Change code above this line
//   },
// };

////////////////// 41 /////////////////
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

////////////////// HW 4

//////////////// 1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line
// const result = makePizza();
// const pointer =  makePizza

/////////// 2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// makeMessage("Ultracheese", deliverPizza);

//////////////////// 3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change c"Eating pizza <назва піци>"ode below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log("Eating pizza ${pizzaName}." );
// } );

/////////////////////////// 4
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

///////////////////// 5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function calculateTotalPrice(totalPrice){
//   })
//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }
//   // Change code above this line
//   return totalPrice;
// }

////////////////////// 6

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   // Change code above this line
//   return filteredNumbers;
// }

//////////// вірне
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
// numbers.forEach((number) => {
//         if (number > value) {
//         filteredNumbers.push(number);
//       }
//     })

//   // Change code above this line
//   return filteredNumbers;
// }

////////////////////// 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
//   // Change code above this line
// }

//////////////вірне

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(element => {if (secondArray.includes(element)) {
//     commonElements.push(element);
//   }
// });

//   return commonElements;
//   // Change code above this line
// }

////////////// 8

//   const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }

//////////////// 9

// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;
// // Chan

//////////////// 10

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// // вірне

// const calculateTotalPrice = orderedItems => { let totalPrice = 0;
//   orderedItems.forEach (item =>  {totalPrice += item;
// });

// return totalPrice;
// }

////////////////// 11
// Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// ////////////////////вірне

// const filterArray = (numbers, value) =>
// {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

/////////////// 12
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

/////////////////////////вірне

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// }

///////////////////// 13
// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

// ////////////// вірне
// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArea = [...numbers];
//   newArea.forEach((number, index) => {
//     if (number % 2 === 0) {
//       newArea[index] += value;
//     }
//   } )

//   return newArea;
//   }

////////////////// 14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets;

// //////////////////вірне
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map (planet => planet.length);

/////////////// 15

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);

////////////////////////////// 16

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

/////////////////////// 17
// Change code below this line
// const getUserNames = users => {
//     const name = users.map (user => user.name)
// return name
// };
// Change code above this line

//////////////////////// 18
// const getUserEmails = users => {
//       const email = users.map (user => user.email)
//   return email
//   };

///////////////////////// 19

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// const oddNumbers = numbers.filter((num) => num % 2 === 1);

/////////////////////////// 20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);

// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );

//////////////////// 21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

//////////////// 22

// Change code below this line
// const getUsersWithEyeColor = (users, color) =>  users.filter(user => user.eyeColor === color);
// Change code above this line

/////////////// 23
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => minAge <= user.age && user.age <= maxAge)

/////////////// 24

// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends === friendName);

// const getUsersWithFriend = (users, friendName) =>
//   users
//     .filter((user) => user.friends.includes(friendName))
//     .map((user) => user.name);

// ////////////////вірний
// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));

///////////////////////////////////25

// const getFriends = (users) => users.flatMap(user => user.friends)
// .filter(
//   (course, index, array) => array.indexOf(course) === index
// )

////////////////////////////  26

// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive);
// };

//////////////////////// 27
// const getInactiveUsers = (users) =>  {
//   return users.filter(user => !user.isActive);
// };

//////////////////// 28
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find ((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find ((book) => book.author === AUTHOR);

////////////////// 29
// const getUserWithEmail = (users, email) => users.find(user => user.email === email);

///////////////////// 30

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((element) => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((element) => element % 2 === 1);

// const eachElementInSecondIsEven = secondArray.every((element) => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((element) => element % 2 === 1);

// const eachElementInThirdIsEven = thirdArray.every((element) => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((element) => element % 2 === 1);

////////////////////////// 31
// const isEveryUserActive = (users) => users.every(user => user.isActive);

///////////////////// 32

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((element) => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((element) => element % 2 === 1);

// const anyElementInSecondIsEven = secondArray.some((element) => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((element) => element % 2 === 1);

// const anyElementInThirdIsEven = thirdArray.some((element) => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((element) => element % 2 === 1);

////////////////////// 33

// const isAnyUserActive = users => users.some(user => user.isActive);

////////////////////// 34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, players) => {return acc + players} , 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

/////////////////////////////////35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

////////////////////////////36
// const calculateTotalBalance = (users) =>
//   users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

//////////////////////////// 37

// const getTotalFriendCount = users =>
//   users.reduce((total, user) =>
//     total + user.friends.length, 0);

/////////////////////////38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));

/////////////////// 39

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

/////////////////////////////// 40

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

///////////////////////////// 41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

/////////////////////////// 42
// const sortByAscendingBalance = (users) => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };

/////////////////////// 43

// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };

// ///////////////////////// 44
// const sortByName = (users) => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };

///////////////////// 45

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));

/////////////////////// 46
// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);
// };


///////////////////// 47 
// const getSortedFriends = users => {
//   return  users.flatMap(user => user.friends)
//   .filter(
//     (course, index, array) => array.indexOf(course) === index
//   ).sort((a ,b) => a.localeCompare(b))
   
// };
////////////////////// 48

// const getTotalBalanceByGender = (users, gender) => {
//   const totalBalance = [...users].filter(({gender: sex}) => sex  === gender).reduce((sum, user) =>
//     sum + user.balance, 0)
// return totalBalance
// };