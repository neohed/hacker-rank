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
for (let i = 0; i < plain.length; i++) {
    const plainCode = plain.charCodeAt(i);
    const cipherCode = cipher.charCodeAt(i);
    const plainCodeN = plainCode - 65;
    const cipherCodeN = cipherCode - 65;

    console.log(`${plain[i]} = ${plainCode}, ${cipher[i]} = ${cipherCode} diff = ${plainCode - cipherCode} ${cipherCode - plainCode}`);
    console.log(`${plainCodeN} ${cipherCodeN}`)

    const mod = plainCode - cipherCode;
    const x = t[i].charCodeAt(0);
    res += String.fromCharCode((Math.abs(x - 65 + mod) % 27) + 65)
}
console.log('A'.charCodeAt(0))
console.log('Z'.charCodeAt(0))
console.log(res)
