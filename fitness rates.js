//input 'Monday', 'Sauna', 15.30
function fitness(input){
let day = input.shift();
let service = input.shift();
let time = Number(input.shift());
let cena = 0;
if(day == 'Monday'||day=='monday'){
    if(service == 'fitness'||service == 'Fitness'){
        if(time<=15 && time>=8){
            cena = 5;
        }
        else 
        cena = 7.5;

    }
   else if(service == 'sauna'||service == 'Sauna'){
    if(time<=15 && time>=8){
        cena = 4;
    }
    else 
    cena = 6.5;
    }
    else if(service == 'instructor'||service == 'Instructor'){
        if(time<=15 && time>=8){
            cena = 10;
        }
        else 
        cena = 12.50;
    }
}
else if(day == 'Tuesday'||day=='tuesday'){
    if(service == 'fitness'||service == 'Fitness'){
        if(time<=15 && time>=8){
            cena = 5;
        }
        else 
        cena = 7.5;
    }
    else if(service == 'sauna'||service == 'Sauna'){
        if(time<=15 && time>=8){
            cena = 4;
        }
        else 
        cena = 6.5;
    }
    else if(service == 'instructor'||service == 'Instructor'){
        if(time<=15 && time>=8){
            cena = 10;
        }
        else 
        cena = 12.50;
    }
    
}
else if(day == 'Wednesday'||day=='wednesday'){
    if(service == 'fitness'||service == 'Fitness'){
        if(time<=15 && time>=8){
            cena = 5;
        }
        else 
        cena = 7.5;
    }
    else if(service == 'sauna'||service == 'Sauna'){
        if(time<=15 && time>=8){
            cena = 4;
        }
        else 
        cena = 6.5;
    }
    else  if(service == 'instructor'||service == 'Instructor'){
        if(time<=15 && time>=8){
            cena = 10;
        }
        else 
        cena = 12.50;
    }
}
else if(day == 'Thursday'||day=='thursday'){
    if(service == 'fitness'||service == 'Fitness'){
        if(time<=15 && time>=8){
            cena = 5;
        }
        else 
        cena = 7.5;
    }
    else if(service == 'sauna'||service == 'Sauna'){
        if(time<=15 && time>=8){
            cena = 4;
        }
        else 
        cena = 6.5;
    }
    else if(service == 'instructor'||service == 'Instructor'){
        if(time<=15 && time>=8){
            cena = 10;
        }
        else 
        cena = 12.50;
    }
}
else if(day == 'Friday'||day=='friday'){
    if(service == 'fitness'||service == 'Fitness'){
        if(time<=15 && time>=8){
            cena = 5;
        }
        else 
        cena = 7.5;
    }
    else if(service == 'sauna'||service == 'Sauna'){
        if(time<=15 && time>=8){
            cena = 4;
        }
        else 
        cena = 6.5;
    }
    else  if(service == 'instructor'||service == 'Instructor'){
        if(time<=15 && time>=8){
            cena = 10;
        }
        else 
        cena = 12.50;
    }
}
else if(day == 'Saturday'||day=='saturday'){
    if(service == 'fitness'||service == 'Fitness'){
        cena = 8;
    }
    else if(service == 'sauna'||service == 'Sauna'){
        cena = 7;
    }
    else  if(service == 'instructor'||service == 'Instructor'){
        cena = 15;
    }
}
else if(day == 'Sunday'||day=='sunday'){
    if(service == 'fitness'||service == 'Fitness'){
        cena = 8;
    }
    else  if(service == 'sauna'||service == 'Sauna'){
        cena = 7;
    }
    else if(service == 'instructor'||service == 'Instructor'){
        cena = 15;
    }
    else {
    console.log("Error");}
    }
else{
console.log("Error");
    }

console.log(cena);
}
fitness(['Sunday', 'Fitness', 22.00]);
