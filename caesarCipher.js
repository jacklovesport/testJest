function caesarCipher(str, shift) {
    const result = [];


    shift = shift % 26;

    for (let char of str) {

        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let base = code >= 65 && code <= 90 ? 65 : 97; 

   
            const shiftedChar = String.fromCharCode(((code - base + shift) % 26) + base);
            result.push(shiftedChar);
        } else {
         
            result.push(char);
        }
    }

    return result.join('');
}
module.exports = caesarCipher