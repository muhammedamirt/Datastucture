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


class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        this.curr = this.root
        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            if (!char.children[char]) {
                char.children[char]
            }
            char = char.children[char]
        }
        char.endOfWord = true
    }
    findLength(word) {
        let current = this.root;
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            let char = word.charAt(i);
            if (!current.children[char]) {
                return 0;
            }
            current = current.children[char];
            count++;
        }
        return current.isEndOfWord ? count : 0;
    }
}