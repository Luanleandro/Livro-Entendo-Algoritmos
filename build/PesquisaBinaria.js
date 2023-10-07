"use strict";
// function PesquisaBinaria(lista: number[], item: number): number | null {
//   let min = 0;
//   let max = lista.length - 1
//   while (min <= max) {
//     let meio = Math.floor((min + max) / 2);
//     let chute = lista[meio];
//     if (chute === item) {
//       return meio;
//     }
//     if (chute > item) {
//       max = meio - 1;
//     } else {
//       min = meio + 1;
//     }
//   }
//   return null
// }
// let minhaLista = [1, 2, 5, 6, 7, 20]
// console.log(PesquisaBinaria(minhaLista, 5));
function search(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    while (min <= max) {
        let meio = Math.floor((min + max) / 2);
        let valor = nums[meio];
        if (valor === target) {
            return meio;
        }
        if (valor > target) {
            max = meio - 1;
        }
        else {
            min = meio + 1;
        }
    }
    return -1;
}
;
console.log(search([-1, 0, 3, 5, 9, 12], 9));
