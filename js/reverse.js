function reverse(word) {
    if (!word) throw new Error('must not be empty')

    if (typeof word !== 'string') throw new Error('must be a string')

    return word.split('').reverse().join('')
}

module.exports = reverse