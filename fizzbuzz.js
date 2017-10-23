const fizzbuzz19 = () => {
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
fizzbuzz19()
console.log('--------10/22/17-------------');

const fizzbuzz20 = () => {
    let i = 1
    while (i < 101) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 == 0) {
            console.log('Fizz');
        }
        else if (i % 5 == 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
        i++
    }
}
fizzbuzz20()
console.log('--------10/22/17-------------');
