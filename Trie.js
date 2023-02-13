// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.endOfWord = false;
//     }
// }


// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }

//     insert(word) {
//         let curr = this.root;
//         for (let i = 0; i < word.length; i++) {
//             const char = word[i];
//             if (!curr.children[char]) {
//                 curr.children[char] = new TrieNode();
//             }
//             curr = curr.children[char];
//         }
//         curr.endOfWord = true;
//     }

//     search(word) {
//         let curr = this.root;
//         for (let i = 0; i < word.length; i++) {
//             const char = word[i];
//             if (!curr.children[char]) {
//                 return false;
//             }
//             curr = curr.children[char];
//         }
//         return curr.endOfWord;
//     }
//     display() {
//         console.log(this.root.children)
//     }
// }

// const trie = new Trie();
// trie.insert("hello");
// trie.insert("world");
// console.log(trie.search("hello")); // true
// console.log(trie.search("world")); // true
// console.log(trie.search("worl")); // false
// console.log(trie.display());

// class TrieNode {
//     constructor() {
//         this.children = {}
//         this.endNode = false;
//     }
// } 

// class Trie {
//     constructor() {
//         this.root = new TrieNode()
//     }
//     insert(word) {
//         let curr = this.root
//         for (let i = 0; i < word.length; i++) {
//             const char = word[i];
//             if (!curr.children[char]) {
//                 curr.children[char] = new TrieNode()
//             }
//             curr = curr.children[char]
//         }
//         curr.endNode = true
//     }
//     display() {
//         console.log(this.root.children);
//     }
//     findLength(word) {
//         let count = 0
//         let curr = this.root
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i];
//             if (!curr.children[char]) {
//                 return 0;
//             }
//             curr = curr.children[char];
//             count ++;
//         }
//         return curr.endNode ? count : 0;
//     }
//     search(word){
//         let curr = this.root
//         for (let i = 0; i < word.length; i++) {
//             const char = word[i];
//             if (!curr.children[char]) {
//                 return false;
//             }
//             curr = curr.children[char];
//         }
//         return curr.endNode 
//     }
// }

// const trie = new Trie()
// trie.insert('amir')
// let count = trie.findLength('amir')
// let count1 = trie.findLength('mukhtar')


class Trie {
    constructor() {
        this.children = {}
        this.endNode = false
    }
}

class TreMethods {
    constructor() {
        this.root = new Trie()
    }

    insert(word) {
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            const character = word[i];
            if (!curr.children[character]) {
                curr.children[character] = new Trie()
            }
            curr = curr.children[character]
        }
        curr.endNode = true
    }
    search(word) {
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            const character = word[i];
            if (!curr.children[character]) {
                return false
            }
            curr = curr.children[character];
        }
        return curr.endNode
    }
    findLength(word){
        let count = 0
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            const character = word[i];
            if(!curr.children[character]){
                return 0
            }
            curr = curr.children[character]
            count ++
        }
        return curr.endNode ? count : 0
    }
}

const trie = new TreMethods()

trie.insert('amir')
console.log(trie.search('amir'));
console.log(trie.findLength('amir'));  