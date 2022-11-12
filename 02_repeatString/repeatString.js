
const repeatString = function(string, num) {
    let text = "";
    for (let i = 1; i <= num; i++) {
        text = string + text;
    }
    if(num < 0) {
        return "ERROR";
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
