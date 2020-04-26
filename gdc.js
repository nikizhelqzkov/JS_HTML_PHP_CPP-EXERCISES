function gdc(input){
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    do
   {
    if(firstNumber>=secondNumber){
       firstNumber=firstNumber-secondNumber;
    }
    else if(firstNumber<secondNumber){
    secondNumber=secondNumber-firstNumber;
    }
  
  } while(firstNumber!=secondNumber);
 
  if(firstNumber>=secondNumber){
      console.log(firstNumber);
  }
  else
  {
      console.log(secondNumber);
  }

}
gdc([2154, 458]);