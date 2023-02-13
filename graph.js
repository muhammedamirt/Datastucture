// class Graph {
//     constructor() {
//         this.vertices = {};
//     }

//     addVertex(vertex) {
//         this.vertices[vertex] = [];
//     }

//     addEdge(vertex1, vertex2) {
//         if (!this.vertices[vertex1]) {
//             this.addVertex(vertex1)
//         }
//         if (!this.vertices[vertex2]) {
//             this.addVertex(vertex2)
//         }
//         this.vertices[vertex1].push(vertex2);
//         this.vertices[vertex2].push(vertex1);
//     }

//     printGraph() {
//         const vertices = Object.keys(this.vertices);

//         for (let i = 0; i < vertices.length; i++) {
//             const vertex = vertices[i];
//             const neighbors = this.vertices[vertex];
//             let output = "";

//             for (let j = 0; j < neighbors.length; j++) {
//                 output += neighbors[j] + " ";
//             }

//             console.log(vertex + " -> " + output);
//         }
//     }
//     removeVertex(vertex) {
//         if (!this.vertices[vertex]) {
//             return false;
//         }
//         for (const neighbor in this.vertices[vertex]) {
//             this.removeEdge(vertex, neighbor);
//         }
//         delete this.vertices[vertex];
//         return true;
//     }

//     removeEdge(vertex1, vertex2) {
//         if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
//             return false; 
//         }
//         delete this.vertices[vertex1][vertex2];
//         delete this.vertices[vertex2][vertex1];
//         return true;
//     }

//     getNeighbors(vertex) {
//         if (!this.vertices[vertex]) {
//             return null;
//         }
//         return Object.keys(this.vertices[vertex]);
//     }

//     getWeight(vertex1, vertex2) {
//         if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
//             return null;
//         }
//         return this.vertices[vertex1][vertex2];
//     }

//     getVertices() {
//         return Object.keys(this.vertices);
//     }

//     getSize() {
//         return this.getVertices().length;
//     }
// }

// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addEdge('A', 'B');
// graph.addEdge('B', 'C');
// console.log(graph.getNeighbors('B')); // output: ['A', 'C']
// console.log(graph.getWeight('A', 'B')); // output: 1
// console.log(graph.getSize()); // output: 3
// graph.removeVertex('B');
// console.log(graph.getVertices()); // output: ['A', 'C']







class Graph {
    constructor() {
        this.vertices = {}
    }
    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = new Set()
        }
    }
    addEdges(vertex1, vertex2) {
        if (!this.vertices[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.vertices[vertex2]) {
            this.addVertex(vertex2)
        }
        this.vertices[vertex1].add(vertex2)
        this.vertices[vertex2].add(vertex1)
        return true
    }
    removeVertex(vertex) {
        if (!this.vertices[vertex]) {
            return false
        }
        for (let neighbor of this.vertices[vertex]) {
            this.removeEdge(vertex, neighbor)
        }
        delete this.vertices[vertex]
        return true
    }
    removeEdge(vertex1, vertex2) {
        if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
            return false
        }
        this.vertices[vertex1].delete(vertex2)
        this.vertices[vertex2].delete(vertex1)
        return true
    }

    display() {
        for (let vertex in this.vertices) {
            console.log(`${vertex} ===> ${[...this.vertices[vertex]]}`);
        }
    }
    dfs(startVertex) {
        const visited = {}
        const result = []
        const dfsTraverse = (vertex) => {
            if (!vertex) return null;
            visited[vertex] = true
            result.push(vertex)
            for (const neighbor of this.vertices[vertex]) {
                if (!visited[neighbor]) {
                    return dfsTraverse(neighbor)
                }
            }
        }
        dfsTraverse(startVertex)
        console.log(result);
    }
}


const graph = new Graph()

graph.addVertex(2)
graph.addVertex(6)
graph.addVertex(7)
graph.addVertex(4)

graph.addEdges(2, 5)
graph.addEdges(3, 4)
graph.addEdges(6, 5)
graph.addEdges(4, 5)

graph.dfs(3)

