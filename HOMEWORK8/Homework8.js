//task1
// let arr = ["Tom", "Sam", "Ray", "Bob"];

// let [user1, user2, ,...userX] = arr;

// console.log(user1); 

// console.log(user2); 

// console.log(userX); 

//task2
// let data = {

//     names: ["Sam", "Tom", "Ray", "Bob"],
    
//     ages: [20, 24, 22, 26],
    
//     };
    
//     let { names: [, name2, , name4], ages: [, age2, , age4]} = data;
    
//     console.log(name2); // "Tom"
    
//     console.log(age2); // 24
    
//     console.log(name4); // "Bob"
    
//     console.log(age4); // 26

//task3
// function mul(...args) {

//     let result = args.reduce((adr,current) => {
//         if (typeof current === "number") {
//             return adr * current;
//         } else {
//             return adr;
//         }
//         }, 1);
//     if (result === 1 && !args.some(item => typeof item === "number")) {
//         return 0;
//     }
//     return result;
// }
    
// console.log(mul(1, "str", 2, 3, true)); // 6
    
// console.log(mul(null, "str", false, true)); // 0

//task4
//     let server = {

//     data: 0,
    
//     convertToString: function (callback) {
    
//     callback(() => this.data + "");
    
//     }
//     };
    
//     let client = {
    
//     server: server,
    
//     result: "",
    
//     calc: function (data) {
    
//     this.server.data = data;
    
//     this.server.convertToString(this.notification());
    
//     },
    
//     notification: function () {
    
//     return (callback) => {}
    
//     this.result = callback();
    
//     };
    
//     client.calc(123);
    
//     console.log(client.result); // "123"
    
//     console.log(typeof client.result); // "string

//task5
// function mapBuilder(keysArray, valuesArrays){
//     let map = new Map();
//     if (keysArray.length !== valuesArrays.lenght) {
//         throw new Error('Array should have the same lenght');
//     }
//     for (let i = 0; i < keysArray.lenght; i++) {
//         map.set(keysArray[1], valuesArray[i]);
//     }
//     return map;
// }
// let keys = [1, 2, 3, 4];

// let values = ["div", "span", "b", "i"];

// let map = mapBuilder(keys, values);

// console.log(map.size); // 4

// console.log(map.get(2)); // "span"


