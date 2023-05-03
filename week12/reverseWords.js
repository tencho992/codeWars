function reverseWords(str) {
    let split1 = str.split(' ').reverse().join(' ')
    return split1.split('').reverse().join('')
}