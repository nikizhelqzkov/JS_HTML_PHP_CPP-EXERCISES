function Persistent(input) {
    let a = input.shift();
    let br = 0, counter = 0;
    let pr = [];
    let sumOfArr = 1;
    let temp = a;
    while (temp > 0) {

        counter++;
        if (temp < 10) {
            break;
        }
        temp = parseInt(temp / 10);

    }



    while (a  >9) {
        br++;
        for (let i = 0; i < counter; i++) {
            pr[i] = a % 10;
            sumOfArr *= pr[i];
            a = parseInt(a / 10);





        }
    
    a = sumOfArr;
    sumOfArr = 1;
}







// }


console.log(br);
}



Persistent([25]);