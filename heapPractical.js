// BUILD HEAP

class Heap {
    constructor(array) {
        this.heap = array
    }
    buildHeap() {
        for (i = 0; i < this.heap.length - 1; i++) {
            this.shiftDown(i)
        }
    }
    shiftDown(currentIndex) {
        let left = this.leftChild(currentIndex)
        let shiftIndex;
        while (currentIndex <= this.heap.length - 1) {
            let right = this.rightChild(currentIndex)
            if (left > right) {
                shiftIndex = left
            }else{
                shiftIndex = right
            }
            if(this.heap[shiftIndex]>this.heap[currentIndex]){
                this.swap(currentIndex,shiftIndex)
                currentIndex = shiftIndex
                left = this.leftChild(currentIndex)
            }else{
                return
            }
        }
    }


    leftChild(currIndex) {
        return 2 * currIndex + 1
    }
    rightChild(currIndex) {
        return 2 * currIndex + 2
    }
    swap(ci, si) {
        let temp = this.heap[ci]
        this.heap[ci] = this.heap[si]
        this.heap[si] = temp
    }
}

const array = [3, 2, 4, 5, 2, 6, 7, 3]
const heap = new Heap(array)
heap.buildHeap()

// iNSERT 


class Heap {
    constructor(array) {
        this.heap = array
    }
    insert(value) {
        this.heap[this.heap.length] = value
        this.shiftUp(this.heap.length - 1)
    }
    shiftUp(currentIndex) {
        let parent = Math.floor((currentIndex - 1) / 2)
        while (currentIndex > 0 && this.heap[parent] > this.heap[currentIndex]) {
            this.swap(currentIndex, parent)
            currentIndex = parent
            parent = Math.floor((currentIndex - 1) / 2)
        }
    }
    swap(ci, si) {
        let temp = this.heap[ci]
        this.heap[ci] = this.heap[si]
        this.heap[si] = temp
    }
    display() {
        for (var i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i])
        }
    }
}

const array = [3, 4, 2, 5, 6, 7, 8, 9]
const heap = new Heap(array)
heap.insert(20)
heap.display()

Deletion

class Heap {
    constructor(array) {
        this.heap = array
    }
    delete() {
        let deleteIndex = 0
        let endIndex = this.heap.length - 1
        this.swap(deleteIndex, endIndex)
        this.heap[endIndex] = null
        this.heap.length--
        this.shiftDown(deleteIndex)
        console.log(this.heap);
    }
    shiftDown(currIndex) {
        let left = this.leftChild(currIndex)
        let shiftIndex;
        while (currIndex <= this.heap.length - 1) {
            let right = this.rightChild(currIndex)
            if (left > right) {
                shiftIndex = left
            } else {
                shiftIndex = right
            }
            if (this.heap[currIndex] > this.heap[shiftIndex]) {
                this.swap(currIndex, shiftIndex)
                currIndex = shiftIndex
                left = this.leftChild(currIndex)
            } else {
                return
            }
        }
    }
    leftChild(i) {
        return i * 2 + 1
    }
    rightChild(i) {
        return i * 2 + 2
    }
    swap(ci, si) {
        let temp = this.heap[ci]
        this.heap[ci] = this.heap[si]
        this.heap[si] = temp
    }
}

const array = [
    3, 4, 2, 5, 20,
    7, 8, 9, 6
]
const heap = new Heap(array)
heap.delete()


class Node{
    constructor(arr){
        this.heap = arr
    }
    delete(){
        let size = this.heap.length
        let dI = 0
        this.swap(size-1 , dI)
        this.heap[size-1] = null
        
    }
}