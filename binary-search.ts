function binarySearch(sortedArr: number[], value) {
    let left = 0;
    let right = sortedArr.length - 1;
    let iterationsCounter = 0;


    while (left <= right) {
        console.log('counter:', iterationsCounter++)
        const middle = Math.floor((left + right) / 2);
        const midVal = sortedArr[middle];
        if (midVal === value) {
            return middle;
        } else if (midVal < value) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}

console.log('value: ', binarySearch([22, 55, 66, 888, 8885, 99996, 9999997, 110000008, ], 8885));