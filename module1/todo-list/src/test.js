function forEach (array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

const arr = ['hello', 'world', 'tosk'];

forEach(arr, item => {
    console.log(item);
})
