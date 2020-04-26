for(let i=1; i<=100; i++){
    if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else
    console.log("FizzBuzz");
}
console.log("")
for(let i=1; i<=100; i++){
    let output = "";
    if(i % 3 == 0){
        output+= "Fuzz"
    }
    else if(i%5==0){
       output+= "Buzz";
    }
    console.log(output || i);
}