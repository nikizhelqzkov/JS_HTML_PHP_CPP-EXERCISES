function memoize(fn){
    let obj = {}; 
    return function (){
        let arr = Array.prototype.slice.call(arguments);
        let key = arr.join('-');
        if(obj[key]===undefined){
            let res = fn.apply(null,arr);
            obj[key] = res;
            return res;
        }
        return obj[key];
    }
}
var sum = function (x, y) { return x + y; }
var memSum = memoize(sum);

console.log(memSum(2,3)); // пресмята, връща 5
console.log(memSum(3,3)); // пресмята, връща 6
console.log(memSum(2,3)); // директно връща 5 без да смята