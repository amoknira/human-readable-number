/*
    numberWords: 
        0: 'zero ',
        1: 'one ',
        2: 'two ',
        3: 'three ',
        4: 'four ',
        5: 'five ',
        6: 'six ',
        7: 'seven ',
        8: 'eight ',
        9: 'nine ',
        10: 'ten ',
        11: 'eleven ',
        12: 'twelve ',
        13: 'thirteen ',
        14: 'fourteen ',
        15: 'fifteen ',
        16: 'sixteen ',
        17: 'seventeen ',
        18: 'eighteen ',
        19: 'nineteen ',
        --
        20: 'twenty ',
        30: 'thirty ',
        40: 'forty ',
        50: 'fifty ',
        60: 'sixty ',
        70: 'seventy ',
        80: 'eighty ',
        90: 'ninety '

      numberZeros: 
        1: 'ten ',
        2: 'hundred '
*/
/*Your task is to implement function toReadable that converts given number, to readable string.

For example:

toReadable(1); // Will return 'one'
toReadable(997); //will return 'nine hundred ninety seven'*/

module.exports = function toReadable(number) {
    //write arrays as match to numbers
    const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    //zero case
    if (number === 0) {
        return 'zero'
    };
    

    let numberInWords = String(number);

    // case without dozen-numbers
    if (number < 20){
        return digits[number];
    }

    //case with dozen numbers, if length of number = 2
    if (numberInWords.length === 2){
        let result = dozen[numberInWords[0]] + ' ' + digits[numberInWords[1]]
        return result.trim();
    }
    // case with hundreds
    if (numberInWords.length === 3) {
        if (numberInWords[1] === '0' && numberInWords[2] === '0'){
          return digits[numberInWords[0]] + ' hundred';
        } else {
            result = digits[numberInWords[0]] + ' hundred ' + toReadable(+(numberInWords[1] + numberInWords[2]));
          return result.trim();
        };
      };
}
/*this function supports 3 digits input only*/
/*  1000 passing (572ms)*/

