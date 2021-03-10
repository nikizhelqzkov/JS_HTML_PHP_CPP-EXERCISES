let arr = [1, 2, 5, 2, 5, 52, 2, 5, 2, 3, 45, 21, 23];
arr.sort(((a, b) => a - b));
console.log(...arr);


let binS = (arr, index) => {
    let len = arr.length;
    let end = len - 1;
    let start = 0; let mid = parseInt((end + start) / 2);
    while (start <= end) {
        mid = parseInt((end + start) / 2);
        if (index === arr[mid]) {
            return {
                "Result: ": index,
                "Index: ": mid
            }
        }
        else if (index < arr[mid]) {
            end = mid - 1;
        }
        else if (index > arr[mid]) {
            start = mid + 1;
        }
    }

    return {
        "Result: ": index,
        "Index: ": "Not found"
    }

}
console.log(binS(arr, 1));