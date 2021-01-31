module.exports = function check(str, bracketsConfig) {
    let storeBrackets = [],
        pairOfBrackets = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        pairOfBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }
    let strToArr = str.split("");
    for (let i = 0; i < strToArr.length; i++) {
        if (strToArr[i] === (storeBrackets[storeBrackets.length - 1] || 0)) {
            storeBrackets.pop();
        } else {
            storeBrackets.push(pairOfBrackets[strToArr[i]]);
        }
    }
    if (storeBrackets.length == 0) {
        return true;
    } else {
        return false;
    }
};
