const counTowns = function(...cities) {
    console.log(cities.length);
}
const towns = ['Sofia', 'Shumen', 'Razgrad', 'Varna'];
counTowns(...towns);
towns.push('Ruse');
counTowns(...towns);
const strangeThings = function(...newTown) {

    for (let i = 0; i < newTown.length; ++i) {
        let m = 'maika';
        newTown[i] += 'maika';
    }
    console.log(...newTown);
}
const newT = [...towns, 'Yambol', 'Stara Zagora', 'Burgas'];
strangeThings(...newT);
counTowns(...newT);