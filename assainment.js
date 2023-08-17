
function cubeNumber(number) {
    if (typeof number === 'number') {
        cube = number ** 3;
        return cube;
    } else {
        return 'please input a number';
    }

}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'please input  string';
    }
    else {
        if (string1.includes(string2)) {
            return true;
        }
        else {
            return false;
        }
    }
}

function sortMaker(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] < 0 || arr[1] < 0) {
            return 'Invalid Input';
        }
        else if (arr[0] === arr[1]) {
            return 'equal';
        }
        else {
            if (arr[0] < arr[1]) {
                return [arr[0], arr[1]] = [arr[1], arr[0]];
            }
            return arr;
        }
    }
}

function findAddress(obj) {
    const requiredKeys = ['street', 'house', 'society'];
    const result = [];

    for (let i = 0; i < requiredKeys.length; i++) {
        if (obj.hasOwnProperty(requiredKeys[i])) {
            result.push(obj[requiredKeys[i]]);
        } else {
            result.push('__');
        }
    }
    return result.join(',');
}

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Please input Tk to get chips";
    }

    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum = sum + changeArray[i];
    }
    if (sum >= totalDue) {
        return 'true';
    }
    else {
        return 'false';
    }

}