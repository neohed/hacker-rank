/*
 * https://www.codewars.com/kata/
 * Perform a variation on the Caesar cipher where the letter index is added to the letter shift.
 * Finally split the cipher text into buckets of size N.
 */

const CAESAR_V = 5;
const [A_CODE, Z_CODE, a_CODE, z_CODE] = ['A', 'Z', 'a', 'z'].map(c => c.charCodeAt(0));
const mod26 = n => (n % 26 + 26) % 26;
const nShift = (sign, shift) => (c, offset) => {
    const code = c.charCodeAt(0);
    let base;

    if (A_CODE <= code && code <= Z_CODE) {
        base = A_CODE;
    } else if (a_CODE <= code && code <= z_CODE) {
        base = a_CODE;
    } else {
        return c;
    }

    return String.fromCharCode(mod26(code - base + (shift + offset) * sign) + base);
}
const applyCipher = cipherStrategy => text => text.split('').map(cipherStrategy).join('');
const splitBuckets = (text, bucketSize) => text.match(new RegExp(`.{1,${bucketSize}}`, 'g'));

const encode = applyCipher(nShift(1, CAESAR_V));
const decode = applyCipher(nShift(-1, CAESAR_V));
const plainText = 'Dave learned to paint rainbows...';
const cipherText = encode(plainText);
const decoded = decode(cipherText);
const buckets = splitBuckets(decoded, 5);

console.log({
    plainText,
    cipherText,
    decoded,
    buckets
})
