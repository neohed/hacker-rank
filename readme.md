# Readme

* Hacker Rank
* Codewars
* Project Euler
* Cracking the Code Interview book.

**First Variation on Caesar Cipher**

[challenge](https://www.codewars.com/kata/5508249a98b3234f420000fb)

```javascript
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
const plainText = 'This is a secret...';
const cipherText = encode(plainText);
const decoded = decode(cipherText);
const buckets = splitBuckets(decoded, 5);
```
[full code](./code-wars/caesar.js)

## Shortcut keys (hotkeys)  allowed are:

alt/option + R : Run code
alt/option + Enter : Submit code
alt/option + F : Enable full screen
Esc : Restore full screen

## Resources

* https://prepinsta.com/hackerrank/coding-questions-and-answers/
* https://towardsdatascience.com/7-tips-i-wish-i-knew-before-clearing-all-hackerrank-python-challenges-4673e0fe14d3
* https://towardsdatascience.com/9-tips-that-helped-me-clear-all-hackerrank-sql-challenges-in-2-weeks-479eb0084862
* https://www.reddit.com/r/cscareerquestions/comments/59zxyu/is_hackerrank_useful_to_get_an_interview/

