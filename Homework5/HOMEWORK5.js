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
// class Worker {
//         #experience = 1.2;
//         constructor(fullName, dayRate, workingDays) {
//                 this.fullName = fullName;
//                 this.dayRate = dayRate;
//                 this.workingDays = workingDays;
//             }
//             showSalary() {
//                 return this.fullName + ": " + this.dayRate * this.workingDays;
//             }        
    
//             showSalaryWithExperiences() {
//                 return Number((this.dayRate * this.workingDays * this.#experience).toFixed(2));
//             }
    
//             set setExp (newExperience) {
//                 if (newExperience < 0) throw new Error ("Experience not enough");
//                 this.#experience = newExperience;
//             }
//             get getExp () {
//                 return this.#experience;
//             }
//     }
//     // dynamic sorting by salary
    
//     function sortSalary (workers) {
            
//         return workers
//            .sort((a,b) => a.showSalaryWithExperiences() - b.showSalaryWithExperiences())
//            .map(worker => {
//                return {name: worker.fullName, salary: worker.showSalaryWithExperiences()}});
//        }
    
    
//         let worker1 = new Worker ("John Johnson", 45, 20);
//         let worker2 = new Worker ("Tom Tomson", 22, 15);
//         let worker3 = new Worker ("Andy Ander", 20, 105);
    
//         console.log(worker1.fullName)
//         console.log(worker1.showSalary());
//         console.log("experience value: " + worker1.getExp);
//         console.log("Salary with experience value: " + worker1.showSalaryWithExperiences());
//         worker1.setExp = 1.5;
//         console.log("experience value: " + worker1.getExp);
//         console.log("Salary with experience value: " + worker1.showSalaryWithExperiences());
    
//         console.log(worker2.fullName)
//         worker2.setExp = 3.5;
//         console.log("experience value: " + worker2.getExp);
//         console.log("Salary with experience value: " + worker2.showSalaryWithExperiences());
    
//         console.log(worker3.fullName)
//         worker3.setExp = 2.5;
//         console.log("experience value: " + worker3.getExp);
//         console.log("Salary with experience value: " + worker3.showSalaryWithExperiences());
    
//         console.log (sortSalary([worker1, worker2, worker3]));

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
