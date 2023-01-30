class Node {
    constructor(value) {
        this.root = value;
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, node) {
        if (root.value > node) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.right, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                this.search(root.left, value)
            } else {
                this.search(root.right, value)
            }
        }
    }
    
    inOrder(root) {
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }
    postOrder(root) {
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value);
    }
    preOrder(root) {
        console.log(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
    min(root) {
        if (!root.left) {
            return root.value
        } else {
            this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
            this.max(root.right)
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (!root) {
            return null
        }
        if (root.value > value) {
            root.left = this.deleteNode(root.left, value)
        } else if (root.value < value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }
            if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
}



const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(9)

console.log(bst.search(bst.root, 10));
bst.inOrder(bst.root)



