function gradingStudents(grades) {
    return grades.map(n => {
        if (n > 37 && n % 5 > 2) {
            return n + 5 - n % 5
        } else {
            return n
        }
    })
}
