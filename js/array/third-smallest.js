/*
  1.2) 3nd argest element of an unsorted array:
*/

const arr = [5, 22, 3, 43, 72, 8, 88, 90, 4, 6, 33];

const getThirdSmallestNum = (arr = []) => {
  smallestNum = arr[0];
  secondSmallestNum = arr[0];
  thirdSmallestNum = arr[0];

  // Second Smallest
  for (i = arr.length; i > 0; i--) {
    if (arr[i] < smallestNum) {
        thirdSmallestNum = secondSmallestNum;
        secondSmallestNum = smallestNum;
        smallestNum = arr[i];
    } else if (arr[i] < secondSmallestNum) {
        thirdSmallestNum = secondSmallestNum;
        secondSmallestNum = arr[i];
    } else if (arr[i] < thirdSmallestNum) {
        thirdSmallestNum = arr[i];
    }
  }
  return thirdSmallestNum;
};

console.log('3rd Smallest Number => ' + getThirdSmallestNum(arr));