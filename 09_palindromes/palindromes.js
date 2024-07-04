const palindromes = function (phrase) {
    let noPunctuation = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let noSpace = noPunctuation.replace(/ /g, "");

    let allLower = noSpace.toLowerCase();
    console.log(allLower[allLower.length -1]);
    console.log(allLower);
    
    let n = 0;
    for(let i = allLower.length - 1; n < i; i--){
        console.log(`i = ${i}`);
        console.log(`n = ${n}`);
        if(allLower[i] != allLower[n]){
            console.log(allLower[i], allLower[n]);
            return false
        } else {
        console.log(allLower[i], allLower[n]); 
        n++;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
