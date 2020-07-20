const things = function(...arr) {
    const [love, favorCity, favNumber] = arr;
    console.log(`My love is : ${love}`);
    console.log(`My favorite city is: ${favorCity}`);
    console.log(`My favorite number is: ${favNumber}`);
}

things('Sofi', 'Sofia', '18');

const Bulgaria = {
    capital: 'Sofia',
    population: 6900000,
    president: 'Rumen Radev',
    primeMinister: 'Boiko Borisov'
}
const { capital, population, president, primeMinister } = Bulgaria;

const ob = function(...names) {
    const [cap, pop, pres, prM] = names;
    console.log(`Our Capital is : ${cap}`);
    console.log(`Our Population is: ${pop}`);
    console.log(`Our president is: ${pres}`);
    console.log(`Our prime minister is: ${prM}`);
}
ob(capital, population, president, primeMinister);