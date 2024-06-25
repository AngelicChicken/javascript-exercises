const reverseString = function(text) {
    const splited = text.split("");
    const reversed = splited.toReversed();
    const joined = reversed.join("");

    return joined;
};

// Do not edit below this line
module.exports = reverseString;
