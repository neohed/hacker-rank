const caesarV = 5;

const charCode = c => c.charCodeAt(0);
const A_CODE = charCode('A');
const modAlpha = n => (n % 26 + 26) % 26;
const normaliseCharCode = n => n - A_CODE;
const nShift = sign => (c, offset) => {
    const normalCode = normaliseCharCode(charCode(c));

    if (normalCode < 0 || normalCode > 25) {
        return c
    }

    return String.fromCharCode(modAlpha(normalCode + (caesarV + offset) * sign) + A_CODE)
}
const applyCipher = (text, cipher) => text.toUpperCase().split('').map((c, i) => cipher(c, i)).join('');
const splitBuckets = (text, bucketSize) => text.split('').reduce((acc, c, i) => {
    const {buckets, part} = acc;
    const newPart = part + c;

    if (newPart.length === bucketSize || i + 1 === text.length) {
        buckets.push(newPart);
        return {
            buckets,
            part: ''
        }
    }

    return {
        buckets,
        part: newPart
    }
}, {
    buckets: [],
    part: ''
});

const encode = nShift(1);
const decode = nShift(-1)
const plainText = 'Dave learned to paint rainbows...';
const cipherText = applyCipher(plainText, encode);
const decoded = applyCipher(cipherText, decode);

const {buckets} = splitBuckets(decoded, 5);

console.log({
    plainText,
    cipherText,
    decoded,
    buckets
})
