//task1
// let str = "regExp check word in the text";
// let reqExp = /RegExp/;
// let result = reqExp.test(str);
// if (result >= true ) {
//     alert("String`s starts with uppercase character");
//     } else if (result >= false ) {
//     alert("String`s not starts with uppercase character");
//     };
// console.log(result);

//task2
// function checkEmail(email) {
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
// }

// let userEmail = prompt("Введіть електронну адресу:");

// console.log(checkEmail(userEmail));

//task3
// function catchMatches(text) {
//     let info = /([dD]b+b+d)/gi;
//     let matches = text.match(info);
//     return matches;
// }
// let enteredText = prompt("Please enter text:");

// let result = catchMatches(enteredText);
// console.log(result);

//Task4
// function swapSubstring(text) {
//     let regex = /(\S+)\s+(\S+)/;
//     let result = text.replace(regex, "$2, $1");
//     return result;
// }

// let text = prompt("Please enter text:");

// let swappedText = swapSubstring(text);

// console.log(swappedText);

//task5
// function validateCreditCardNumber(cardNumber) {
    
//     if (!/^\d{12,19}$/.test(cardNumber)) {
//         console.log("Невірний номер карти");
//         return false;
//     }
//     let formattedCardNumber = cardNumber.replace(/(\d{4})/g, '$1-').slice(0, -1);
    
//     console.log(formattedCardNumber);

//     return true;
// }

// let userCard = prompt("Введіть номер банківської карти:");

// validateCreditCardNumber(userCard);

//task6
// function checkEmail(email) {
//         let emailPattern = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        
// if (emailPattern.test(email)) {
//     console.log("Email is correct!");
// } else {
//     console.log("Email is not correct!");
// }
// }

// let enteredEmail = prompt("Please enter your email:");

// checkEmail(enteredEmail);

//task7
// function validateLogin(login){
//     let reGex = /^(?![0-9])[a-zA-Z0-9.]{2,10}$/;
//     return reGex.test(login);
// }
// console.log(validateLogin("ee1.1ret3"));
// console.log(/\d+\.\d+/g.exec("ee1.1ret3"));
