function reverseString(string) {
    let stringArr = string.split('');

    stringArr.reverse();

    return stringArr.join('');
}

reverseString("apple");

module.exports = { reverseString };