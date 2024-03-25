// //task1
// let x = 1;
// let y = 2;
// y = "2";
// let res1 = x + y;
// console.log(res1); 
// console.log(typeof res1); 

// x = true;
// let res2 = x + y;
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = (y != x)
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// x = 5*'data1';
// y = 5*'data2';
// let res4 = x + y;
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// //task2
// let data1 = prompt("Enter your number");
// console.log (data1 % 7 == 0 );//кратним числу 7.
// console.log (data1 % 2 >= 0 );//парним додатним

// //task3
// const arr1 = [1,"element2", true, null ];
// console.log(arr1.length);//число елементів, яке зберігається в масиві;
// arr1[4] = prompt ("Enter your data");
// console.log( arr1[4] );
// arr1.shift();
// alert(arr1);

// task4
// const cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities[0] + "*" + cities[1] + "*" + cities[2]);

// task5
// let isAdult1 = prompt ("How old are you?");
// if (isAdult1 >= 18 ) {
//     alert("You have already reached the age of majority");
// } else if (isAdult1 < 18 ) {
//     alert("You are too young");
// };

// task6
// a) визначити і вивести в консоль площу трикутника 
// let A = prompt ("Enter any value for A side of a triangle" );
// let B = prompt ("Enter any value for B side of a triangle" );
// let C = prompt ("Enter any value for C side of a triangle" );
// A = Number(A);
// B = Number(B);
// C = Number(C);

// const p = ((A+B+C)/2);
// const S = Math.sqrt(p*(p-A)*(p-B)*(p-C));
// console.log(S);
// // b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// let a = Math.pow(A,2);
// let b = Math.pow(B,2);
// let c = Math.pow(C,2);
// let data2 = c
// let data1 = a + b
// data2 = Number(data2);
// data1 = Number(data1);

//     if (data1 == data2){
//         console.log("");​
//     } else {​
//        console.log("Incorrect data");​
//     }​

//task7
// var time = new Date();
// var now = time.getHours();
// if (now >= 23 & now < 5){
//    alert("Доброї ночі");
// }
// else if (now >= 5 & now < 11){
//    alert("Доброго ранку");
// }
// else if (now >= 11 & now < 17){
//    alert("Доброго дня");
// }
// else if (now >= 17 & now < 23){
//    alert("Доброго вечора");
// }    
// console.log(now);

// var time = new Date();
// var now = time.toLocaleTimeString();
// console.log(now);