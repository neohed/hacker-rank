/*
 * https://www.codewars.com/kata/5508249a98b3234f420000fb
 */

const CAESAR_V = 5;
const A_CODE = 'A'.charCodeAt(0);
const modAlpha = n => (n % 26 + 26) % 26;
const nShift = sign => (c, offset) => {
    const normalisedCode = c.charCodeAt(0) - A_CODE;

    if (normalisedCode < 0 || normalisedCode > 25) {
        return c
    }

    return String.fromCharCode(modAlpha(normalisedCode + (CAESAR_V + offset) * sign) + A_CODE)
}
const applyCipher = cipher => text => text.toUpperCase().split('').map(cipher).join('');
const splitBuckets = (text, bucketSize) => text.split('').reduce(({buckets, part}, c, i) => {
    let newPart = part + c;

    if (newPart.length === bucketSize || i + 1 === text.length) {
        buckets.push(newPart);
        newPart = ''
    }

    return {
        buckets,
        part: newPart
    }
}, {
    buckets: [],
    part: ''
});

const encode = applyCipher(nShift(1));
const decode = applyCipher(nShift(-1));
const plainText = 'Dave learned to paint rainbows...';
const cipherText = encode(plainText);
const decoded = decode(cipherText);
const {buckets} = splitBuckets(decoded, 5);

console.log({
    plainText,
    cipherText,
    decoded,
    buckets
})
