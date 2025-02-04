// log out in reverse
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create a function that returns a reversed array
function reverse(arr) {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const reversedArr = reverse(arr);
console.log(reversedArr);

// Double the numbers in the array
function doubleArray(arr) {
    const newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        newArr2.push(arr[i] * 2);
    }
    return newArr2;
}

const doubleArr = doubleArray(arr);
console.log(doubleArr);

// Using map
const doubled = arr.map((item) => item * 2);
console.log(doubled);

// Swap values
function reversedArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr.length / 2 == i) {
            break;
        }

        const temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - 1 - i] = temp;
    }
}

const toReversed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

reversedArray(toReversed);
console.log(toReversed);
