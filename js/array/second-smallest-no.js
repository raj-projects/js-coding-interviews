const arr = [5, 22, 3, 43, 72, 8, 88, 90, 4, 6, 33];

const getSecondSmallestNum = (arr = []) => {
  smallestNum = arr[0];
  secondSmallestNum = arr[0];

  for (i = arr.length; i > 0; i--) {
    if (arr[i] < smallestNum) {
      secondSmallestNum = smallestNum;
      smallestNum = arr[i];
    } else if (arr[i] < secondSmallestNum) {
      secondSmallestNum = arr[i];
    }
  }

  console.log(secondSmallestNum);
  return secondSmallestNum;
};

getSecondSmallestNum(arr);
