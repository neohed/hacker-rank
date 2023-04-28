function pangrams(s) {
    const sLower = s.toLowerCase();
    let isPangram = true;

    for (let i = 97; i < 123; i++) {
        isPangram = isPangram & sLower.includes(String.fromCharCode(i));

        if (!isPangram) {
            break
        }
    }

    if (isPangram) {
        return 'pangram'
    } else {
        return 'not pangram'
    }
}

console.log(pangrams('Glib jocks quiz nymph to vex dwarf'))
console.log(pangrams('Glib jocks nymph to vex dwarf'))
