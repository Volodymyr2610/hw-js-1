
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

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    let totalPrice = pricePerDroid * orderedQuantity;
    if (totalPrice > customerCredits) {
      message = "Insufficient funds!";
    } else {
      message = `You ordered ${orderedQuantity} droids, you have ${
        customerCredits - totalPrice
      } credits left`;
    }

    return message;
  }

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

function checkForSpam(message) {
    let result;
  
    result = message.toLowerCase().includes(`spam`) || message.toLowerCase().includes(`sale`);
    return result;
  }
  