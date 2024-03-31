//task1
// function calcRectangleArea() {
// let width = +prompt("Please enter your width");
// let height = +prompt("Please enter your height");

// if (isNaN(width)) {
//     throw new Error("Sorry, value for width is not a number. Please contact support."); 
// }
// else if (isNaN(height) ){
//     throw new Error("Sorry, value for height is not a number. Please contact support.");
// }

// return width * height;

// }
// try 
// {let result = calcRectangleArea();
//     console.log(result);
// }catch (error) {
// console.log(error.message);
// }

//task2
// function checkAge(){
//     let age = +prompt("Please enter your age");
//     if (age === null) {
//         throw new Error (alert('The field is empty! Please enter your age'));
//     }
//     else if (isNaN(age)){
//         throw new Error (alert('The value is not a number! Please enter your age'));
//     }
//     else if (age <=13) {
//         throw new Error (alert('The age is less than 14! Please enter your age'));
//     }
//     return console.log(alert("Request for watching the film is approved"));
// }
//     try{
//         checkAge();
//     }catch(exeption){
//         console.log(exeption.message);
//     }

//task3
// class MonthExaption{
//         constructor(message){
//         this.message = message;
//         this.name = "MounthExaption"
//         }
//     }
//     let month = +prompt("Enter a number of mounth")
//     function showMonthName(month){
//         //let month = +prompt("Enter the number of month");
//         if (month== 1){
//         alert ("January");
//         }
//         else if (month== 2){
//         alert ("February");
//         }
//         else if (month== 3){
//         alert ("March");
//         }
//         else if (month== 4){
//         alert ("April");
//         }
//         else if (month== 5){
//         alert ("May");
//         }
//         else if (month== 6){
//         alert ("June");
//         }
//         else if (month== 7){
//         alert ("July");
//         }
//         else if (month== 8){
//         alert ("August");
//         }
//         else if (month== 9){
//         alert ("September");
//         }
//         else if (month== 10){
//         alert ("October");
//         }
//         else if (month== 11){
//         alert ("November");
//         }
//         else if (month== 12){
//         }
//         else if (month > 12 || month < 0){
//         throw new MonthExaption('month does not exist')
//         }
//         return month
        
//     } 
//     try {
//         let res = showMonthName(month);
//         console.log(res);
//     }
//     catch (exeption){
//         console.log(exeption.name);
//         console.log(exeption.message);
//     }

//task4
// function showUser (id) {

//     if (id < 0) throw new Error ("ID must not be negative: " + id);
//     return {id};
// }

// function showUsers (ids) {

//     let users = [];
//     for (let i of ids) {
        
//         try {
//             users.push(showUser(i));
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
//     return users;
// }


// let usersId = [88,44,12,-2,33];
// console.log(showUsers(usersId));
