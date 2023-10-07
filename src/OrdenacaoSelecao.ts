function buscarMenor(array: number[]): number {
  let menor = array[0];
  let menorIndice = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
      menorIndice = i;
    }
  }
  return menorIndice;
}

function ordenacaoPorSelecao(array: number[]) {
  let arraySorted = [];
  let novoArray = array.slice();
  for (let i = 0; i < array.length; i++) {
    let menor = buscarMenor(novoArray);
    arraySorted.push(novoArray.splice(menor, 1)[0]);
  }
  return arraySorted;
}

const listaOrdenada = ordenacaoPorSelecao([5, 6, 29, 1, 30, 2, 7]);
console.log(listaOrdenada);
