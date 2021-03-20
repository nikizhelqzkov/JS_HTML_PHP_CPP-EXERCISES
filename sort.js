import {insertionSort} from './insertionSort.js';
import {quickSort} from './quickSort.js';
const sorting = (arr) => {
    if (arr.length < 30) {
        insertionSort(arr);
    }
    else {
        quickSort(arr);
    }
}


let arr = [1, 23, 5, 2, 56, 23, 6, 5, 5, 56, 23, 56, 5, 5412, 52, 3];

let h1 =document.createElement('h1');
let h2 =document.createElement('h2');

h1.textContent = `Started array : ${arr.toString()}`;
document.body.appendChild(h1);
sorting(arr);
h2.textContent = arr.length<30 ? `Sorted array with insertion sort:${arr.toString()}`
:`Sorted array with quicksort:${arr.toString()}`;
document.body.appendChild(h2);
