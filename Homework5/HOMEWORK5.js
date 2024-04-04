//task1

// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
//     }
    
//     function propsCount(object){
//         return Object.keys(object).length
//     }
    
//     console.log(propsCount(mentor));

//task2
// Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), 
// яка приймає даний об’єкт і виводить список його властивостей записаних в масив. 
// Виведіть також масив значень властивостей об’єкта

// let sqlCredentials = {
//     serverName: '10.22.9.02',
//     database: 'Qwerty',
//     login: 'va',
//     password: '1q2sda$aeq',
//     access: 'admin'
// }
// function showProps(obj){
// return Object.keys(obj)
// }
// console.log(showProps(sqlCredentials));
// console.log(Object.values(sqlCredentials));

//task3
// class Person {
//     constructor(name, surname)
//     {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName() {
//          return this.name + " " + this.surname; 
//     }

// }

// class Student extends Person {
    
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }

//     showFullName (middleName) { 
//         return super.showFullName() + " " + middleName;
// }
//     showCourse() {
//         const currentYear = 2022;
//         if (this.year < 2016 || this.year > 2024 || isNaN(this.year) || this.year.length === 0){
//             return alert("Please select correct year of course for student");
//         }
//         return currentYear - this.year + 1;
//     }
// }

// const student1 = new Student ("Ed", "Stilkinson", 2022);
// console.log(student1.showFullName("Mike"));
// console.log(student1.showCourse());

//task4
// const workerList = [];

// class Worker {
//     #experiance = 1.2;

//         constructor(fullName , dayRate, workingDays){
//             this.fullName  = fullName ;
//             this.dayRate = dayRate;
//             this. workingDays = workingDays;
//             workerList.push(this);
//         }
//             showSalary() { 
//     console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
// }  
// showSalaryWithExperience() { 
//     console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays * this.#experiance}`); 
// }
// showSalaryWorker() {
//     return `${this.dayRate * this.workingDays * this.#experiance}`;
// }
// get showExp(){
//     return this.#experiance;
// }
// set setExp(experiance){
//     this.#experiance = experiance;
// }

// sortSalaries(workersArray){ 
//     let sortedSalaries = workersArray.sort(function(a,b){
//         return a.showSalaryWorker() - b.showSalaryWorker();
//     })
//     // console.log(sortedSalaries);
//     for (let i = 0; i < sortedSalaries.length; i++){
//         console.log(sortedSalaries[i].fullName + ":" + sortedSalaries[i].showSalaryWorker());
//     }
// }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// console.log("------------------")

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker1.fullName);                 
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// console.log("------------------")

// let worker2 = new Worker("Andy Ander", 29, 23);
// console.log(worker1.fullName);                 
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// console.log("------------------")

// worker1.sortSalaries(workerList);

//task5
// class GeometricFigure {
//     getArea() {
// return 0;
// }
// toString() {
//      return Object.getPrototypeOf(this).constructor.name;
// }
//      }

// class Triangle extends GeometricFigure {
    
//         constructor(side1, height) {
//             super();
//             this.side1 = side1;
//             this.height = height;
//         }
//         getArea() {
//             return this.side1 * this.height / 2;
//     }
// }

// class Square extends GeometricFigure {
//     constructor(side) {
//         super();
//         this.side = side;
//     }
//     getArea() {
//         return this.side * this.side;
//     }
// }

// class Circle extends GeometricFigure {
//     constructor(r) {
//         super();
//         this.r = r;
//     }
//     getArea() {
//         return Math.PI * this.r * this.r;
//     }
// }

// function handleFigures(figures){
//     return figures.reduce(function(sum, figure){
//        if (figure instanceof GeometricFigure) {
//         console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
//         return sum + figure.getArea();
//        }
//        throw new Error('Invalid argument figure')
//     }, 0);
// }

// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
//     	console.log(handleFigures(figures));
