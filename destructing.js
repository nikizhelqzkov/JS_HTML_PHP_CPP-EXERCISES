const things = function(...arr) {
    const [love, favorCity, favNumber] = arr;
    console.log(`My love is : ${love}`);
    console.log(`My favorite city is: ${favorCity}`);
    console.log(`My favorite number is: ${favNumber}`);
}

things('Sofi', 'Sofia', '18');