class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1);
  }

  printGraph() {
    const vertices = Object.keys(this.vertices);

    for (let i = 0; i < vertices.length; i++) {
      const vertex = vertices[i];
      const neighbors = this.vertices[vertex];
      let output = "";

      for (let j = 0; j < neighbors.length; j++) {
        output += neighbors[j] + " ";
      }

      console.log(vertex + " -> " + output);
    }
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

graph.printGraph();
