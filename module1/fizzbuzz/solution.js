/*// fizzbuzz
for (let i = 1; i <= 25; i++) {
    if (!(i % 15)) {
        console.log('Fizzbuzz')
    } else if (!(i % 3)) {
        console.log('Fizz')
    } else if (!(i % 5)) {
        console.log('Buzz')
    }  else {
        console.log(i);
    }
}*/



// primtall
function loggeUtPrimtall() {
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number / i === parseInt(number / i)) {
            return false;
        }
    }
    return true;
}
loggeUtPrimtall();