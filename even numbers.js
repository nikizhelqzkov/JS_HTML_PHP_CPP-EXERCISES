function evenNumbers(input) {

    
    let number = Number(input.shift());
    let br = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) {
            console.log(i);
            br++;
        }
    }
    console.log("The counts are " + br);
}
evenNumbers(['7']);