function inchesToCantimetres(){
let inches = document.getElementById('convert').value;
let cantimetres =  Number(inches) * 2.54;
document.getElementById('cm').value = cantimetres.toFixed(2);
}
