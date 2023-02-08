const reverseString = function(str) {
    var finalStr = "";
    for (let i = str.length; i > 0; i--) {
        finalStr = finalStr.concat("",str[i-1])
    }
    return finalStr
};

// Do not edit below this line
module.exports = reverseString;
