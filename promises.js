const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve');
    }, 3000);
});

const f = promise.then(data => {
    console.log(data);
    return data.toUpperCase();
}).then(data => {
    console.log(data);
});


function makePromise(num) {
    const pr = new Promise((resolve, reject) => {
        resolve('Promise' + num);
    }, 2000);
    return pr;
}


const newP = makePromise('First').then(data => {
    console.log(data);
    return makePromise('Second');
}).then(data => {
    console.log(data);
    return makePromise('Third');
})