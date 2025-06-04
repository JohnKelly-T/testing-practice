function caesarCipher(string, shiftFactor) {
  let cipher = '';

  for (let char of string) {
    let isAlphabet = /[a-z]/i.test(char);
    let isUpper = /[A-Z]/.test(char);

    if (isAlphabet) {
      let charCode = char.charCodeAt();

      if (isUpper) {
        // convert ASCII charcode to indexes from 0-26 for modulo operation
        charCode -= 65;

        // add shift factor
        charCode += shiftFactor;

        // apply modulo to wrap around from z-a
        charCode %= 26;

        // add 65 to convert back into charcode
        charCode += 65;

        // append char to cipher
        cipher += String.fromCharCode(charCode);

      } else {
        charCode -= 97;
        charCode += shiftFactor;
        charCode %= 26;
        charCode += 97;

        // append char to cipher
        cipher += String.fromCharCode(charCode);
      }

    } else {
      cipher += char;
    }
  }

  return cipher;
};

module.exports = { caesarCipher };