/*
CRAYONS = NMRYBSD

FLOWERS

FSTWPMG
DQRWPMG
FSTWNKE
DQSWNKE
 */
const aCode = 'A'.charCodeAt(0);
const zCode = 'Z'.charCodeAt(0);
const alphabetLength = zCode - aCode + 1; // 26
const letterToAlphaIndex = letter => letter.charCodeAt(0) - aCode;
const alphaIndexToLetter = code => String.fromCharCode(code + aCode);

const plain = 'CRAYONS';
const cipher = 'NMRYBSD';
const textToEncode = 'FLOWERS';

let res = '';

for (let i = 0; i < plain.length; i++) {
    const plainCode = letterToAlphaIndex(plain[i]);
    const cipherCode = letterToAlphaIndex(cipher[i]);
    const mod = cipherCode - plainCode;
    const newCode = letterToAlphaIndex(textToEncode[i]) + mod;
    res += alphaIndexToLetter(newCode)
}

console.log(res)
