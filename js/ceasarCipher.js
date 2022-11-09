function caesarCipher(string) {
    if (/\d/.test(string)) throw new Error('must be string')
    if (/\W/.test(string)) throw new Error('must be letters')

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return string
        .split('')
        .map(letter => {
            let index = alphabet.indexOf(letter.toLowerCase()) + 1
            if (index === alphabet.length) index -= alphabet.length

            return alphabet[index] })
        .join('')
}

module.exports = caesarCipher