/*
  1.1) 2nd argest element of an unsorted array:
*/

const arr = [5, 22, 3, 43, 72, 8, 88, 90, 4, 6, 33];

const getSecondSmallestNum = (arr = []) => {
  smallestNum = arr[0];
  secondSmallestNum = arr[0];

  // Second Smallest
  for (i = arr.length; i > 0; i--) {
    if (arr[i] < smallestNum) {
      secondSmallestNum = smallestNum;
      smallestNum = arr[i];
    } else if (arr[i] < secondSmallestNum) {
      secondSmallestNum = arr[i];
    }
  }

  console.log('second Smallest Number => ' + secondSmallestNum);
  return secondSmallestNum;
};

getSecondSmallestNum(arr);

// second method
// let arr1 = arr.sort((a, b) => b - a);

// function findSecondSmallest() {
//   let smallestNum = arr[0];
//   let secondSmallestNum = arr[0];

//   for (i = 0; i < arr.lenght; i++) {
//     if (arr[i] < smallestNum) {
//       smallestNum = arr[i];

//       for (j = 0; j < arr.length; j++) {
//         if (arr[j] < smallestNum) {
//           secondSmallestNum = arr[j];
//         }
//       }
//     }
//   }
//   console.log(secondSmallestNum);
// }
// findSecondSmallest(arr1);
