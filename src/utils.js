/* eslint-disable no-bitwise */

const possibleCombinationSum = (arr, n) => {
  if (arr.includes(n)) return true;
  if (arr[0] > n) return false;
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  const listSize = arr.length;
  const combinationsCount = 1 << listSize;
  for (let i = 1; i < combinationsCount; i += 1) {
    let combinationSum = 0;
    for (let j = 0; j < listSize; j += 1) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};

const gameNumArray = () => new Array(9).fill().map((val, index) => index + 1);

export {
  possibleCombinationSum,
  gameNumArray,
};
