const reverseArray1 = (arr) => {
    let temp = 0
    for (left = 0, right = (arr.length - 1); left < right; left++, right--) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return arr;
}
q = [1, 2, 3, 4, 5]
console.log(reverseArray1(q));
console.log('__________10/23/17__________');

const reverseArray2 = (arr) => {
    let temp = 0
    for (i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = temp;
    }
    return arr;
}
console.log(reverseArray2(q));
console.log('__________10/23/17__________');

///////////////////////////////////////////
