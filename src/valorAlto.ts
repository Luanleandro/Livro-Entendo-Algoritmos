function max(arr: number[]): number {
  if (arr.length == 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }
  let sub_max = max(arr.slice(1));
  return arr[0] > sub_max ? arr[0] : sub_max;
}

console.log(max([5, 9, 15, 9]));
