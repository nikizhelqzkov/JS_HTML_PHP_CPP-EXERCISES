function fruits(input){
    //toFixed(2)
    let fruitName = input.shift();
    let grams = Number(input.shift());
    let cenaKilogram = Number(input.shift());
    let kilos = grams * 0.001;
    let cena = kilos * cenaKilogram;
    console.log("I need "+ cena.toFixed(2) + " leva to buy " + kilos.toFixed(2) + " kilograms orange.")
}
fruits(['apple', 1563, 2.35])