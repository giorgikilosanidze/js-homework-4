// task 1

let array1 = [5, 25, 89, 120, 36];

array1.push("javascript", "python");
array1.unshift("html", "css");

console.log(array1.length);

array1.shift();
array1.pop();

console.log(array1);

// task 2

let fruits = ["ფორთოხალი", "ბანანი", "მსხალი"];

console.log(fruits.length);

fruits.push("ვაშლი", "ანანასი");
fruits.unshift("საზამთრო");

console.log(fruits.length);

fruits.splice(2, 0, "მანგო");

fruits.shift();
fruits.pop();

console.log(fruits.length);

// task 3

let array2 = [1, 2, 3, 4, 5];

array2.splice(3, 0, "a", "b", "c");

console.log(array2);

// task 4

let array3 = [1, 2, 3, 4, 5];

let sum = 0;

array3.forEach((element) => {
    sum = sum + element;
});

console.log(sum);

// task 5

let array4 = [2, 15, 10, 24];

array4.splice(2, 1);

console.log(array4);

// task 6

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray5 = array5.map((element) => {
    return element / 3;
});

console.log(newArray5);

// task 7

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let newLanguages = languages.filter((element) => {
    if (element.length > 3) {
        return element;
    };
});

console.log(newLanguages);

// task 8

let words = ['madrid', 'rome', 'milan', 'berlin'];

let newWords = words.filter((element) => {
    if (element.includes("m") || element.includes("n")) {
        return element;
    };
});

console.log(newWords);

// task 9

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let concatArr = arr1.concat(arr2, arr3);

console.log(concatArr);

// task 10

let arr = [-1, -2, -3, 4];

let newArr = arr.some((element) => {
    if (element > 0) {
        return element;
    }
});

console.log(newArr);

// task 11

let array = [23, 45, 32, 5, 87, 7, 3, 98];

let newArray = array.sort((a, b) => b - a);

console.log(newArray);

let min = newArray[0];

newArray.forEach((element) => {
    if (element < min) {
        min = element;
    };
});
console.log(min);


// task 12

// function getinfo() {
//     let nameuser = 'anna';
//     console.log(nameuser);
//     ეს დაბეჭდავს "anna"-ს იმიტომ რომ nameuser ცვლადს მინიჭებული აქვს anna მნიშვნელობა.

//     function userinfo() {
//         let info = `user name is ${nameuser}`;
//         console.log(info);
//         ეს დაბეჭდავს "user name is anna"-ს იმიტომ რომ nameuser ცვლადს მინიჭებული აქვს anna მნიშვნელობა და ${nameuser} ამის ადგილას ჩაჯდება anna და info ცვლადს კი "user name is anna" აქვს მინიჭებული.
//     }
//     userinfo();
//     console.log(info);
//     ეს დაბეჭდავს undefined-ს რადგან info ცვლადი გვაქვს userinfo ფუნქციაში შექმნილი და შესაბამისად ამ ფუნქციის გარეთ ამ ცვლადს ვერ გამოვიყენებთ.
// }


// console.log(nameuser);
// ეს დაბეჭდავს undefined-ს რადგან nameuser ცვლადი გვაქვს getinfo ფუნქციაში შექმნილი და ამ ფუნქციის გარეთ ამ ცვლადს ვერ გამოვიყენებთ.
// getinfo();





















