/*
S;V;iPad
C;M;mouse pad
C;C;code swarm
S;C;OrangeHighlighter

[
  'S;V;iPad',
  'C;M;mouse pad',
  'C;C;code swarm',
  'S;C;OrangeHighlighter'
]

Sample Input

S;M;plasticCup()
S;C;LargeSoftwareBook
S;V;pictureFrame

C;V;mobile phone
C;C;coffee machine
C;M;white sheet of paper

Sample Output

plastic cup
large software book
picture frame

mobilePhone
CoffeeMachine
whiteSheetOfPaper()
 */

function splitByCaps(s) {
    return s.split(/(?=[A-Z])/)
}

function wordsToLower(words) {
    return words.map(w => w.toLowerCase())
}

function applySplit(method, operand) {
    let normalizedOperand;
    if (method === 'M') {
        normalizedOperand = operand.slice(0, -2)
    } else {
        normalizedOperand = operand
    }

    return wordsToLower(splitByCaps(normalizedOperand)).join(' ')
}

function toUpperFirst(s) {
    return s[0].toUpperCase() + s.slice(1)
}

function capitalizeWords(words) {
    return words.map(w => toUpperFirst(w))
}

function applyCombine(method, operand) {
    const words = operand.split(' ');

    switch (method) {
        case 'M':
            return words[0] + capitalizeWords(words.slice(1)).join('') + '()';
        case 'C':
            return capitalizeWords(words).join('');
        case 'V':
            return words[0] + capitalizeWords(words.slice(1)).join('');
    }
}

function processData(input) {
    const inputLines = input.split(/\r?\n|\r|\n/g);

    inputLines.forEach(inputLine => {
        const parts = inputLine.split(';');
        const operation = parts[0];
        const method = parts[1];
        const operand = parts[2];

        if (operation === 'S') {
            console.log(applySplit(method, operand))
        } else {
            console.log(applyCombine(method, operand))
        }
    })
}
