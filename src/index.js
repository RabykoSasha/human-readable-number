module.exports = function toReadable(number) {
    numberStr = number.toString();
    let object = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred',
    }
    let hundred = ''
    let decade = ''
    let unit = 0
    if (object[number]) {
        return object[number]
    } else if (number < 100) {
        decade = (numberStr.slice(0, 1) * 10)
        unit = (number % 10)
        return object[decade] + ' ' + object[unit]
    } else if (number < 1000) {
        hundred = (numberStr.slice(0, 1) * 100)
        let temp = (number % 100)
        if (object[temp]) {
            return object[hundred] + ' ' + object[temp]
        }
        decade = (temp.toString().slice(0, 1) * 10)
        unit = (temp % 10)
        return object[hundred] + ' ' + object[decade] + ' ' + object[unit]
    }
}