function quickSort(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  } else {
    let pivo = array[0];
    let less = array.slice(1).filter((el) => {
      return el <= pivo;
    });

    let greater = array.slice(1).filter((el) => {
      return el > pivo;
    });
    return quickSort(less).concat(pivo, quickSort(greater));
  }
}

quickSort([5, 2]);

let hash = new Map();
hash.set('João', 18);
hash.set('Jarlos', 18);
hash.set('Maria', 33);
hash.set('Carlos', 15);
console.log(hash)