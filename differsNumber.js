let arr = [3, 8, 7, 5, 9];
let counter = 0;
let savePosition = -1;
let currentPos = -1;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 == 0) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] % 2 != 0) {
                counter++;
                currentPos = j + 1;
            }

        }
        if (counter > 1) {
            savePosition = i + 1;
            console.log(savePosition);
            return savePosition;
        }
        else if (counter == 1) {
            savePosition = currentPos;
            console.log(savePosition);
            return savePosition;
        }
        
        
    }
    else if (arr[i] % 2 != 0) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] % 2 == 0) {
                counter++;
                currentPos = j + 1;
            }

        }
        if (counter > 1) {
            savePosition = i + 1;
            return savePosition;
        }
        else if (counter == 1) {
            savePosition = currentPos;
            console.log(savePosition);
            return savePosition;
        }
        counter = 0;
    }
}
