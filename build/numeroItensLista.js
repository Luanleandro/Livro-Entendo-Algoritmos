"use strict";
function contadorNumeroItens(arr) {
    if (arr.length == 0) {
        return 0;
    }
    return 1 + contadorNumeroItens(arr.slice(1));
}
console.log(contadorNumeroItens([5, 3, 2, 10, 5]));
