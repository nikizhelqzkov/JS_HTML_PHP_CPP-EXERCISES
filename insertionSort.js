let arr = [1,2,5,2,5,2,45,41,4,2,5,41,2,54];
const insertionSort = (arr) =>{
    for (let i = 1; i < arr.length; ++i) {
        let element = arr[i];
        let index = i-1;
        while(index>=0 && arr[index]>element){
            arr[index+1] = arr[index];
            --index;
        }
        arr[index+1] = element;
    }
    
}


insertionSort(arr);
