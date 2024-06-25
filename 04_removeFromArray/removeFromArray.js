const removeFromArray = function(theArray, ...toRemove) {
    let variable = [];
    let output = [];

    toRemove.forEach(addToArray);
    
    for(let item of theArray){
        if(variable.includes(item) == false){
            output.push(item)
        }
    }

    function addToArray(args){
        variable.push(args);
    }
    return output;
};


// Do not edit below this line
module.exports = removeFromArray;
