q = ['Tom', 'Dick', 'Harry']

const bubbleSortAsc = (arr) => {
    if (arr.length === 0) {
        return 'Array is empty'
    }
    let unsorted = true;
    while (unsorted) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = 0;
                temp = arr[i]
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
console.log(bubbleSortAsc(q));
console.log('__________10/26/17__________');

const bubbleSortAscRec = (arr) => {
    if (arr.length === 0) {
        return 'Array is empty'
    }
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = 0;
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
        }
    }
    if (swapped) {
        bubbleSortAscRec
    }
    return arr;
}
console.log(bubbleSortAscRec(q));
console.log('__________10/26/17__________');

const selectionSortAsc = (arr) => {
    if (arr.length === 0) {
        return 'Array is empty'
    }
    for (i = 0; i < arr.length; i++) {
        for (y = i + 1; y < arr.length; y++) {
            if (arr[y] < arr[i]) {
                let temp = 0;
                temp = arr[y];
                arr[y] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
console.log(selectionSortAsc(q));
console.log('__________10/26/17__________');

///////////////////////////////////////////

w = [11, 33, 77, 44, 66, 99, 22, 88]

const bubbleSortDesc = (arr) => {
    if (arr.length === 0) {
        return 'Array is empty';
    }
    if (arr.length === 1) {
        return arr;
    }
    let sorted_flag = false;
    while (sorted_flag === false) {
        let sorted_count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
            else {
                sorted_count++;
            }
        }
        if (sorted_count === arr.length) {
            sorted_flag = true;
        }
    }
    return arr;
}
console.log(bubbleSortDesc(w));
console.log('__________10/31/17__________');

///////////////////////////////////////////
