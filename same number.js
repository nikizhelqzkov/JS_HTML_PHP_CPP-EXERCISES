function sameNumber(input){
    let number = Number(input[0]);
    let stringNumber = number.toString();
   let result=0;
   let sum = 0;
   let sum2;
for(let i=0;i<stringNumber.length;i++){
    
   if(i==0){
        result = stringNumber[0];
   }
   else if(stringNumber[i]==result){
       result=stringNumber[i];
   }
   else if(stringNumber[i]!=result)
   {
       result=-1;
       console.log("false");
       break;
   }
}
if(result!=-1){
    console.log("true");
}
for(let i=0;i<stringNumber.length;i++){
    sum2 = parseInt(stringNumber[i]);
    sum=sum+sum2;
}   
console.log(sum);
}
sameNumber([2222222]);