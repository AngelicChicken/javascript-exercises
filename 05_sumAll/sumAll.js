const sumAll = function(number1, number2) {
    let i = 0;

    if(number1 < 0){
        return "ERROR"
    } if(number2 < 0){
        return "ERROR"
    } if(typeof number1 != 'number'){
        return "ERROR"
    } if(typeof number2 != 'number'){
        return "ERROR"
    }


    if(number1 > number2){
        let store = number1;
        number1 = number2;
        number2 = store;
    }

    while(number1<=number2){
        i += number1;
        number1++
    }

    return i;
};

// Do not edit below this line
module.exports = sumAll;
