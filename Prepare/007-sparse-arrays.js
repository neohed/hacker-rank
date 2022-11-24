const data = {
    strings: [ 'aba', 'baba', 'aba', 'xzxb' ],
    queries: [ 'aba', 'xzxb', 'ab' ]
}

function matchingStrings(strings, queries) {
    return queries.map(q => strings.filter(s => s === q).length)
}

console.log(matchingStrings(data.strings, data.queries))
