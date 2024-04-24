//Task1
function getPromise(message, delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(message);
        }, delay);
    });
}

getPromise("test promise", 2000).then(function(data) {
    console.log(data);	
});

//Task2
function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        if (!arr.every(item => typeof item === 'number' && !isNaN(item))) {
            reject("Error! Incorrect array!");
        } else {
            const product = arr.reduce((acc, val) => acc * val, 1);
            resolve(product);
        }
    });
}

calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).catch(error => console.log(error));
calcArrProduct([3, 4, 5, null]).catch(error => console.log(error));


//Task3
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
 
function showNumbers() {
    let promise = Promise.resolve();
 
    for (let i = 0; i < 10; i++) {
        promise = promise.then(() => delay(i, Math.random() * 3000))
                         .then(number => console.log(number));
    }
}
 
showNumbers();

//Task4
function delayNew(i, time) {
    return new Promise(resolve => setTimeout(() => resolve(i), time));
}
 
async function showNumbersNew() {
    for (let i = 0; i < 10; i++) {
        const time = Math.random() * 3000;
        const number = await delayNew(i, time);
        console.log(number);
    }
}
 
showNumbersNew();
