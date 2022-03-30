const reverseString = function(string) {
    const stringArray = string.split('');
    let reversedWord = ''
    for (let i = 1; i < stringArray.length + 1;i++) {
        reversedWord += stringArray[stringArray.length - i];
    }

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
