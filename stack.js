class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        this.items.pop()
    }

    peek(){
        return this.items[this.items.length -1]
    }

    isEmpty(){
       return this.items.length === 0
    }

    size(){
       return this.items.length
    }

    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack()

stack.push(10)
stack.push(22)
stack.push(49)
stack.push(17)
stack.push(17)
console.log(stack.size());
stack.print()
stack.pop()
console.log(stack.peek())
stack.print()



