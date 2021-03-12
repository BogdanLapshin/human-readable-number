module.exports = function toReadable(number) {
    let str = '';
    let others = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen"
    }
    let tenth = {
        0: '',
        2: " twenty",
        3: " thirty",
        4: " forty",
        5: " fifty",
        6: " sixty",
        7: " seventy",
        8: " eighty",
        9: " ninety",
    };

    let ones = {
        0: '',
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",


    };
    let hundreds = {
        0: "",
        1: "one hundred",
        2: "two hundred",
        3: "three hundred",
        4: "four hundred",
        5: "five hundred",
        6: "six hundred",
        7: "seven hundred",
        8: "eight hundred",
        9: "nine hundred"
    }

    let digit = (String(number).split("")).length;

    switch (digit) {
        case 1:
            if (number == 0) {
                str = "zero";
            } else {
                str = ones[number];
            }
            break;

        case 2:
            if (Math.floor(number / 10) == 1) {
                str = others[number % 10];
            } else {
                str = tenth[Math.floor(number / 10)] + " " + ones[number % 10];
            }
            break;

        case 3:
            if ((Math.floor(number / 10)) % 10 == 1) {
                str = hundreds[Math.floor(number / 100)] + " " + others[number % 10];
            } else {
                str = hundreds[Math.floor(number / 100)] + tenth[(Math.floor(number / 10)) % 10] + " " + ones[number % 10];
            }
            break;
    }

    return str.trim();
}