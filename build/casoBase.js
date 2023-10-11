"use strict";
function regressiva(i) {
    if (i > 0) {
        return i;
    }
    return i - regressiva(i - 1);
}
regressiva(5);
