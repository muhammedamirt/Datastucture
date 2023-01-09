class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    deqeue(){
       return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }
    print(){
        return console.log(this.items.toString());
    }
    
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
queue.deqeue()
queue.print()