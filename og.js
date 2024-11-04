function capatalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

module.exports = capatalize;

function reverseString(word) {
    return word.split("").reverse().join("")
}
module.exports = reverseString;
