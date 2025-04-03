// function one() {
//   let userName = "pradeep";
//   console.log(this.userName);
// }
// one();

// const chai = (num1, num2) => {
//   return num1 + num2;
// };

// const chai = (num1, num2) => num1 + num2;

// const addTow = (num1, num2) => ({ userName: "pradeep" });
// console.log(addTow(4, 5));

// (function num() {
//   console.log("DB CONN");
// })();

// (() => {
//   console.log("DB CONN2");
// })();

// ((name) => {
//   //named IIFE
//   console.log(`your Name : ${name}`);
// })("pradeep");

//      < , > , => , >= , != , === ,!== ,==

// const value = 1000;

// if (value > 500) console.log("right"), console.log("right2");//ish tarha kabhi nahi likhana hai

// if(value>200) console.log("right");//ish tarah lihkna hai

// const blanca = 200;

// if (blanca < 500) {
//   console.log("less than 200");
// } else if (blanca > 750) {
//   console.log("less than 750");
// }

// const userLoggedIn = true;
// const debitCart = true;

// if (userLoggedIn && debitCart && 2 == 3) {
//   console.log("your loggedIn sec");
// } else {
//   console.log("loggedIn filled");
// }

// const userLoggedInGoogle = false;
// const userLoggedInEmail = true;

// if (userLoggedInGoogle || userLoggedInEmail) {
//|| agar koi bhi document shi hoga to execution hoga
//   console.log("user logged in");
// }

// const userLoggedInGoogle = false;
// const userLoggedInEmail = false;

// if (userLoggedInGoogle || userLoggedInEmail) {
//|| agar koi bhi document shi nahi hoga to execution nahi hoga
//   console.log("user logged in");
// }

// const month = 3;

// switch (month) {
//   case 1:
//     console.log("january");
//     break;
//   case 2:
//     console.log("feb");
//     break;
//   case 3:
//     console.log("march");
//     break;
//   case 4:
//     console.log("april");
//     break;

//   default:
//     console.log("not value");

//     break;
// }

const month = "march";

// switch (month) {
//   case "jan":
//     console.log("january");
//     break;
//   case "feb":
//     console.log("feb");
//     break;
//   case "march":
//     console.log("march");
//     break;
//   case "api":
//     console.log("april");
//     break;

//   default:
//     console.log("not value");

//     break;
// }

// truthy
// truthy-value = " " ,"0", 'falsy' ,[] ,{} , function(){},

// falsy
//falsy value = "", 0, bigint ,null , undefined ,NaN

// 0 == "" :- true
// 0 == '' :-true
// 0 == [] :-true
// 0 == {}  :-false
// "" == [] :-true
// "" == {} :-false
// '' == [] :-true
// '' == {} :-false

// Nullish Conlescing Operator (??) :  null ,undefined

// let val1 = 10 ?? 15;
// console.log(val1);

// let val1 = null ?? 15;
// console.log(val1);

// let val1 = undefined ?? 15;
// console.log(val1);

// let val1 = null ?? 10 ?? 15;
// console.log(val1);

// let val1 = null ?? undefined ?? 15;
// console.log(val1);

// ---------loop----------

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

// let array = ["pradeep", "sujeet", "amar"];
// // console.log(array.length);

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

//break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`detected is 5`);
//     break;
//   }
//   console.log(`Value of index is 5 = ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`detected is 5`);
    continue;
  }
  console.log(`Value of index is 5 :- ${index}`);
}
