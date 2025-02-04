// Different ways to log out 0 - 10 with loops

// Used when we have a known number of iterations (classic for loop)
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Used when we want to go through every item in an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((item) => {
    console.log(item);
});

// Used when we want to create a new array based on an existing one
arr.map((item) => {
    console.log(item);
});

// Used when iterating over an iterable structure like an array
for (const item of arr) {
    console.log(item);
}

// Used when iterating over an object's keys or array indexes
for (const i in arr) {
    console.log(arr[i]);
}

// Same as the first for loop, but with a variable for the limit
let limit = 10;
for (let i = 0; i <= limit; i++) {
    console.log(i);
}

// Used when the number of iterations is unknown beforehand
let i = 0;
while (i <= limit) {
    console.log(i);
    i++;
}

