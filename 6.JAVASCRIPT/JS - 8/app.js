// array methods
// forEach method
let arr = [1, 2, 3, 4, 5];

let print = function (el) {
    console.log(el);
};

arr.forEach(print);

// map method

let students = [
{
    name: "aman",
    marks: 95,
}, 
{
    name: "shradha",
    marks: 94.4,
}, 
{
    name: "rajat",
    marks: 92,
}
];

let gpa = students.map((el) => {
    return el.marks / 10;
});

// filter method

let nums = [1,2,3,4,7,8,2,9,10,12,11];
let ans = nums.filter((el) => {
    return !(el%2 == 0);
});