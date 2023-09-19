const sum = (a, b) => {
    console.log(a + b);
};

const pow = (a, b) => {
    return a ** b;
};

const hello = () => {
    console.log("hello world");
};

// console.log("Hi there!");

// setTimeout( () => {
//     console.log("Apna College");
// }, 4000);

// console.log("Welcome to");

let id=setInterval( () => {
    console.log("Apna College");
}, 2000);

setTimeout( () => {
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);