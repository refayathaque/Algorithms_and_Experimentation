const fizzBuzz1 = () => {
    for (i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz1()
console.log('__________10/23/17__________');

const fizzBuzz2 = () => {
    let i = 1;
    while (i < 101) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        if (i % 3 === 0) {
            console.log('Fizz');
        }
        if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
        i++;
    }
}
fizzBuzz2()
console.log('__________10/23/17__________');

///////////////////////////////////////////

const fizzBuzz3 = () => {
    for (i = 100; i > 0; i--) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 == 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz3()
console.log('__________10/26/17__________');

const fizzBuzz4 = () => {
    let i = 100;
    while (i > 0) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
        i--;
    }
}
fizzBuzz4()
console.log('__________10/26/17__________');

///////////////////////////////////////////

const fizzBuzz5 = () => {
    for (i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz5()
console.log('__________10/31/17__________');

///////////////////////////////////////////
