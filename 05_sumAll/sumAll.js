const sumAll = function(num1, num2) {
    let sum = 0;
    let count = num1;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    if (num1 > num2) {
        let count = num2;
        while(count <= num1) {
            sum = sum + count;
            count++;
        }
    } else {
        let count = num1;
        while(count <= num2) {
            sum = sum + count;
            count++;
        }
    }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
