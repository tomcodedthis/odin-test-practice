const analyzeArray = {
    average: (array) => {
        return array.reduce((sum, num) => sum + num) / array.length
    },
    min: (array) => {
        return array.sort((a, b) => a - b)[0]
    },
    max: (array) => {
        return array.sort((a, b) => b - a)[0]
    },
    length: (array) => {
        return array.length
    },
    isNumber: (array) => {
        if (!array.every(number => {
            (/\d/.test(number))
            return /\d/.test(number)
        })) throw Error('must be numbers')
    },
}

module.exports = analyzeArray