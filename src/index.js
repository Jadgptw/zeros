module.exports = function getZerosCount(number) {
  // your implementation
    let result = 0;
    while((number % 5)){
        number--;
    }
    result += number / 5 + getMultiplicityCount(number, 5, 2);
    return result;
}

function getMultiplicityCount(number, lastMult, power) {
    let count = 0;
    let newMult = Math.pow(5, power);
    while(number % newMult && number >= lastMult){
        number -= lastMult;
    }
    if(number >= lastMult) {
        count += number / newMult + getMultiplicityCount(number, newMult, power + 1);
    }
    return count;
}
