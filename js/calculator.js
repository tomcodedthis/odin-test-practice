const calculator = {
    sum: (numbers) => {
        return numbers.a + numbers.b
    },
    subtract: (numbers) => {
        return numbers.a - numbers.b
    },
    divide: (numbers) => {
        return numbers.a / numbers.b
    },
    multiply: (numbers) => {
        return numbers.a * numbers.b
    },
    isNumbers: (numbers) => {
        if (!Object.values(numbers).every(number => {
            return /\d/.test(number)
        })) throw Error('must be number')
    }
}

module.exports = calculator