function marsExploration(s) {
    const message = 'SOS';
    let errors = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== message[i % 3]) {
            errors++
        }
    }

    return errors
}

console.log(marsExploration('SOSSPSSQSSOR'))
