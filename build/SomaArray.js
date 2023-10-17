"use strict";
function soma(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr[0] + soma(arr.slice(1));
}
console.log(soma([5, 7, 9, 0]));
