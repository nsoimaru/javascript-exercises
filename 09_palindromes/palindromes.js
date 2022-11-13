const palindromes = function (str) {
    let newStr = str.replace(/\W/g, "").toLowerCase();

    const reverse = newStr => [...newStr].reverse().join('');

     if (reverse(newStr) === newStr) {
        return true;
     }

     return false;
};

// Do not edit below this line
module.exports = palindromes;
