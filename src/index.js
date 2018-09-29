module.exports = function getZerosCount(number) {
  // your implementation
    return getMultiplicityCount(number, 5, 1);
}

function getMultiplicityCount(number, SimpleDigit, power) {
    let count = 0;
    let mult = Math.pow(SimpleDigit, power);
    let result = Math.floor(number / mult);

    if (result > 0){
        count += result + getMultiplicityCount(number, SimpleDigit, power + 1);
    }
    return count;
}
