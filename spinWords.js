function spinWords(word) {
    let str = word.split(" ");
    for (let e in str) {
        if (str[e].length >= 5) {
            str[e] = str[e].split("").reverse().join("");
        }
    }
    word = str.join(" ");
    return word;
}
console.log(spinWords("This is a testess"));