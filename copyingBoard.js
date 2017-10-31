// Array Bubble Sort (Ascending)

function bubbleSort(arr) {
    if (arr.length === 0) {
        return 'Array is empty'
    }
    let unsorted = true;
    while (unsorted === true) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) { // Flip sign for descending
                let temp = 0;
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
            else {
                count++;
            }
        }
        if (count === arr.length) {
            unsorted = false;
        }
    }
    return arr;
}
y = [9, -3, 6, -1, 3, 6]
console.log(bubbleSort(y));

console.log('=======================');

// Array Bubble Sort Recursively (Ascending)

function bubbleSortRec(arr) {
    if (arr.length === 0) {
        return 'Array is empty'
    }
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = 0;
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
            swapped = true;
        }
    }
    if (swapped) {
        bubbleSortRec(arr);
    }
    return arr;
}
d = [9, -3, 6, -1, 3, 6]
console.log(bubbleSortRec(d));

console.log('=======================');

// Array Selection Sort (Ascending)

function selectionSort(arr) {
    if (arr.length === 0) {
        return 'Array is empty'
    }
    for (i = 0; i < arr.length; i++) {
        for (y = i + 1; y < arr.length; y++) {
            if (arr[y] < arr[i]) { // Flip sign for descending
                let temp = 0;
                temp = arr[y];
                arr[y] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
s = [-5, 3, -98, 4, 2, 7, 4]
console.log(selectionSort(s));

// branch
