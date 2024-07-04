const fibonacci = function(index) {
    let arr = [1, 1];
    index = parseInt(index);
    let i = 0;
    let counter = 2;

    if(index == 0) return 0;
    if(index < 0) return 'OOPS';

    while(counter < index){
        i = arr[arr.length-2] + arr[arr.length-1];
        arr.push(i);
        counter++
    }

    return arr[index - 1]
};

// Do not edit below this line
module.exports = fibonacci;
