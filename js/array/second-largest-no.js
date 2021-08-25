/*
  1.0) 2nd Largest element of an unsorted array:
*/

const arrEle = [5, 22, 3, 43, 72, 8, 88, 90, 4, 6, 33];

const getSecondLargestNum = (arr = []) => {
  largestNum = arr[0];
  secondLargestNum = arr[0];

  // Second Largest
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLargestNum = largestNum;
      largestNum = arr[i];
    } else if (arr[i] > secondLargestNum) {
      secondLargestNum = arr[i];
    }
  }

  console.log('second Largest Number => ' + secondLargestNum);
  return secondLargestNum;
};

getSecondLargestNum(arrEle);
