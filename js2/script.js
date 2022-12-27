const arr = [1, 2, 3, 4, 5];
function plusTwo(number) {
  return number + 2;
}

const newArr = Array.from(arr, plusTwo);
console.log(arr);
console.log(newArr);
