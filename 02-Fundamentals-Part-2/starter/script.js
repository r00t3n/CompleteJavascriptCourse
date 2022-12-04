"use strict";


// function logger() {
//     console.log("My name is Florin!");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(3, 0);
// console.log(appleJuice);

// function calcAge1(birthyear) {
//     return 2022 - birthyear;
// }

// const age1 = calcAge1(1993);
// console.log(age1);
// console.log(calcAge1(1992));

// ////

// const calcAge2 = function (birthyear) {
//     return 2037 - birthyear;
// }


// const calcAvg = (a, b, c) => (a + b + c) / 3;

// // console.log(calcAvg(1, 2, 3));

// const avgDolphins = calcAvg(44, 23, 71);
// const avgKoalas = calcAvg(65, 54, 49);

/// object methods

// const florin = {
//     firstName: 'Florin',
//     lastName: 'S',
//     birthYear: 1993,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2022 - birthYear;
//     // }

//     // calcAge: function () {
//     //     return 2022 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} old ${this.job} and he has ${this.hasDriverLicense ? "a" : "no"} drivers license.`;
//     }
// };

// console.log(florin.getSummary());

// console.log(florin.calcAge());
// console.log(florin.age);
// console.log(florin.age);
// console.log(florin.age);

//Challenge #3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    },
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    },
};

console.log(`${mark.calcBMI() > john.calcBMI() ? mark.firstName + (mark.BMI) : john.firstName + (john.BMI)} has a bigger BMI than ${mark.calcBMI() < john.calcBMI() ? mark.firstName + (mark.BMI) : john.firstName + (john.BMI)}`);