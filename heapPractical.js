// class Heap {
//     constructor(array) {
//         this.Heap = array
//     }
//     buildHeap() {
//         for (let i = 0; i < this.parent(this.Heap.length - 1); i++) {
//             this.shiftDown(i)
//         }
//     }
//     shiftDown(i) {
//         let shift;
//         let left = this.leftChild(i)
//         while (i < this.Heap.length) {
//             let right = this.rightChild(i)
//             if (left > right) {
//                 shift = left
//             } else {
//                 shift = right
//             }
//             if (this.Heap[i] < this.Heap[shift]) {
//                 console.log(this.Heap)
//                 this.swap(this.Heap[i], this.Heap[shift])
//                 i = shift
//                 left = this.leftChild(i)
//             } else {
//                 return
//             }
//             console.log(this.Heap);
//         } 

//     }
//     leftChild(i) {
//         return i * 2 + 1
//     }
//     rightChild(i) {
//         return i * 2 + 2
//     }
//     swap(i1, i2) {
//         let temp =this.Heap[i1] 
//         this.Heap[i1]  = this.Heap[i2] 
//         this.Heap[i2]  = temp
//     }
//     display() {
//         console.log(this.Heap);
//     }
//     parent(i) {
//         return parseInt((i - 1) / 2)
//     }
// }

// const heap = new Heap([1, 3, 4, 5, 2, 1, 5, 9, 3, 4])
// heap.buildHeap()
// heap.display()

class Heap {
    constructor(arr) {
        this.heap = arr
    }

    buildHeap() {
        for (let i; i < this.parent(this.heap.length - 1); i++) {
            this.shiftDown(i)
        }
    }
    shiftDown(i) {
        let currIndex = i
        let left = this.leftChild(currIndex)
        let shift
        while (currIndex <= this.heap.length) {
            let right = this.rightChild(i)
            if (left > right) {
                shift = left
            } else {
                shift = right
            }
            if (this.heap[i] > this.heap[shift]) {
                this.swap(i, shift)
                currIndex = shift
                left = this.leftChild(currIndex)
            } else {
                return
            }
        }
    }
    parent(i) {
        return Math.floor(i / 2)
    }
    leftChild(i) {
        return i * 2 + 1
    }
    rightChild(i) {
        return i * 2 + 2
    }
    swap(i1, i2) {
        let temp = this.Heap[i1]
        this.Heap[i1] = this.Heap[i2]
        this.Heap[i2] = temp
    }
    insert(num) {
        this.heap[this.heap.length] = num
        this.shiftUp(this.heap.length)
    }
    shiftUp(currInd) {
        let parent = this.parent(currInd)
        while (parent > 0 && this.heap[currInd] < this.heap[parent]) {
            this.swap(parent,currInd)
            currInd = parent
            parent = this.parent(currInd)
        }
    }
}