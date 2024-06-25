const repeatString = function(kata, nomor) {
    let stringToRepeat = kata;
    let amountOfRepeat = nomor;
    let timesRepeat = 0;
    let endResult = '';

    if(amountOfRepeat < 0){
        return "ERROR"
    }

    while(timesRepeat < amountOfRepeat){
        endResult += `${stringToRepeat}`;
        timesRepeat++
    }
    return endResult;
};

// Do not edit below this line
module.exports = repeatString;
