let array1 = [1, 2, 3, 4, 5, 8, 7, 9, 8, 7, 2, 3, 2];


function uniqueElements(arr) {
    return new Set(arr);
}

console.log(uniqueElements(array1));