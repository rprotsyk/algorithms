function getLuckyFloorNumber(n) {

    let count = 0;
    let currentNumber = 1;
    while (count < n) {
        let tempNumber = currentNumber.toString();
        if (tempNumber.indexOf("13") > -1 || tempNumber.indexOf("4") > -1) {
            currentNumber++;
            continue;
        } else {
            count++;
            currentNumber++;
        }
    }
    return currentNumber;
}