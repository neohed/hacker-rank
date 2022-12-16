/*
 * CRAYONS = NMRYBSD
 *
 * FLOWERS
 *
 * FSTWPMG
 * DQRWPMG
 * FSTWNKE
 * DQSWNKE
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

/*
 * This analysis doesn't work. Both plain text words end with S but none of the cipher texts for FLOWERS
 * end with S.
 *
 * Correct answer is: DQRWPMG (I think)
 *
 * CRAYONS = NMRYBSD
 * NMR Y BSD
 * BSD => DSB
 * Compare CRA to DSB
 * C Precedes D
 * R Precedes S
 * A Precedes B
 *
 * FLOWERS
 *
 * is one of:
 *
 * FSTWPMG
 * DQRWPMG
 * FSTWNKE
 * DQSWNKE
 *
 * FLOWERS
 * ???????
 * ??????G
 * ?????MG
 * ????PMG
 *
 * One of:
 *
 * FSTWPMG
 * DQRWPMG
 *
 * CRAYONS = NMRYBSD
 * Compare ONS to NMR
 *
 * ERS => DQR
 *
 * Answer is: DQRWPMG
 */

console.log(res)
