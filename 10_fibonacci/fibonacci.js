function fibonacci(n) {
    n = parseInt(n) // convert string to number
    if (n==1 || n==0) {
        return n;
    } else if (n<0) {
        return "OOPS";
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Do not edit below this line
module.exports = fibonacci;
