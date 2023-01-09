let array = [23, 43, 12, 56, 35];




// Bubble sort Implementation using Javascript

function bubbleSort(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        for (let j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    // console.log(array);
}
bubbleSort(array);










// Selection sort in JavaScript

function selectionSort(arr) {
    let i, j, minIndex;
    for (i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[minIndex])
                minIndex = j;
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }

    return arr
}


// console.log(selectionSort(array));









// insertion sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  }
  console.log(insertionSort(array))
 