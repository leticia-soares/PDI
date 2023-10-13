main();

function timeInWords(h, m) {
    let numberInWords = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "quarter",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine",
        "half",
    ]
    let str = "";

    if(m == 0) {
        str = numberInWords[h-1] + " o' clock";
    } else if(m <= 30) {
        if(m == 1)
            str = "one minute past " + numberInWords[h-1];
        else if( m == 15 || m ==  30)
            str = numberInWords[m-1] + " past " + numberInWords[h-1];
        else
            str = numberInWords[m-1] + " minutes past " + numberInWords[h-1];
    } else {
        let min = 30 - (m - 30);
        if(min == 1)
            str = "one minute to " + numberInWords[h];
        else if( min == 15)
            str = "quarter to " + numberInWords[h];
        else
            str = numberInWords[min-1] + " minutes to " + numberInWords[h];
    }

    return str;
}

function main() {
    // Altere o dado aqui
    const h = 5;
    // Altere o dado aqui
    const m = 47;

    const result = timeInWords(h, m);

    console.log(result + '\n');
}