const heapify = (arr, el, length) => {
    let elIndex = el;
    while (true) {
        let leftInd = elIndex * 2 + 1;
        let rightInd = elIndex * 2 + 2;
        let isSmallerThanLeft = leftInd < length && arr[elIndex] < arr[leftInd];
        let isSmallerThanRight = rightInd < length && arr[elIndex] < arr[rightInd];
        if (isSmallerThanLeft && !isSmallerThanRight) {
            [arr[elIndex], arr[leftInd]] = [arr[leftInd], arr[elIndex]];
            elIndex = leftInd;
        }
        else if (!isSmallerThanLeft && isSmallerThanRight) {
            [arr[elIndex], arr[rightInd]] = [arr[rightInd], arr[elIndex]];
            elIndex = rightInd;
        }
        else if (isSmallerThanLeft && isSmallerThanRight) {

            if (arr[leftInd] < arr[rightInd]) {
                [arr[elIndex], arr[rightInd]] = [arr[rightInd], arr[elIndex]];
                elIndex = rightInd;
            }
            else {
                [arr[elIndex], arr[leftInd]] = [arr[leftInd], arr[elIndex]];
                elIndex = leftInd;
            }
        }
        else {
            break;
        }
    }
    return arr;
}

const heapSort = (arr) => {
    let length = arr.length;
    for (let i = parseInt(length / 2); i >= 0; --i) {
        arr = heapify(arr, i, length);
    }
    for (let i = 0; i < length - 1; i++) {
        arr = heapify(arr, 0, length - i);
        [arr[0], arr[length - i - 1]] = [arr[length - i - 1], arr[0]];
    }

    return arr;
}

let arr = [3, 8, 12, 5, 6, 7, 2];
heapSort(arr);
console.log(...arr);
