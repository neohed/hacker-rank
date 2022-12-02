/*
CRAYONS = NMRYBSD

FLOWERS

FSTWPMG
DQRWPMG
FSTWNKE
DQSWNKE
 */

const plain = 'CRAYONS';
const cipher = 'NMRYBSD';
const t = 'FLOWERS';

let res = '';

const aCode = 'A'.charCodeAt(0);
const zCode = 'Z'.charCodeAt(0);
let res2 = '';
for (let i = 0; i < plain.length; i++) {
    const plainCode = plain.charCodeAt(i);
    const cipherCode = cipher.charCodeAt(i);
    const plainCodeN = plainCode - 65;
    const cipherCodeN = cipherCode - 65;

    //console.log(`${plain[i]} = ${plainCode}, ${cipher[i]} = ${cipherCode} diff = ${plainCode - cipherCode} ${cipherCode - plainCode} ${plainCodeN - cipherCodeN}`);
    //console.log(`${plainCodeN} ${cipherCodeN}`)

    let mod = plainCode - cipherCode;
    const x = t[i].charCodeAt(0) - aCode;
    console.log({x})
    res += String.fromCharCode((Math.abs(x + mod) % 27) + aCode)
    if (mod < 0) {
        mod = 27 - mod
    }
    res2 += String.fromCharCode(Math.abs(plain[i].charCodeAt(0) + mod) % 27 + aCode)
}

console.log(res2)
