const counTowns = function(...cities) {
    console.log(cities.length);
}
const towns = ['Sofia', 'Shumen', 'Razgrad', 'Varna'];
counTowns(...towns);
towns.push('Ruse');
counTowns(...towns);
const strangeThings = function(param, ...newTown) {

    for (let i = 0; i < newTown.length; ++i) {
        newTown[i] += 'maika';
    }
    if (param) {
        console.log("for in")
        for (value in newTown) {
            newTown[value] += 'ta';
        }
    } else {
        console.log("for of");
        let index = 0;
        for (value of newTown) {
            newTown[index] = value + 'ta';
            ++index;
        }
    }

    console.log(...newTown);
}
const newT = [...towns, 'Yambol', 'Stara Zagora', 'Burgas'];
strangeThings(true, ...newT);
strangeThings(false, ...newT);
counTowns(...newT);