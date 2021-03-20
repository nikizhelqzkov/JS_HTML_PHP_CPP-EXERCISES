let arr = [1, 23, 5, 2, 56, 23, 6, 5, 5, 56, 23, 56, 5, 5412, 52, 3, 5];

const Partition = (arr, start, end) => {
    let middle = parseInt((start + end) / 2)
    let pivot = arr[middle];
    let i = start, j = end;
    while (i <= j) {
        while (arr[i] < pivot) {
            ++i;
        }
        while (arr[j] > pivot) {
            --j;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            ++i;
            --j;
        }
        else {
            return j;
        }
    }
    return i;
}

const qSort = (arr, start, end) => {
    let len = arr.length - 1;
    if (len <= 1) {
        return;
    }

    let pivotIndex = Partition(arr, start, end);

    if (start < pivotIndex - 1) {
        qSort(arr, start, pivotIndex - 1);
    }
    if (pivotIndex < end) {
        qSort(arr, pivotIndex, end);
    }
}
const quickSort = (arr)=>{
    qSort(arr,0,arr.length-1);
} 
quickSort(arr);
console.log(...arr)