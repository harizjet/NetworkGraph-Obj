let { Graph, Node } = require("./graph.js");

let Graph_Djisktra = class extends Graph {
  constructor(graph_obj) {
    super();
    for (let graph_id in graph_obj.nodes) {
      graph_obj.nodes[graph_id].visited = false;
    }
    this.graph_obj = graph_obj;
    this.cost = 0;
    this.path = [];
  }
  search(startNode, endNode) {
    startNode = this.graph_obj.nodes[startNode];
    endNode = this.graph_obj.nodes[endNode];
    this.path.push(`${startNode.id}: ${startNode.label}`);
    let curNode = startNode;
    curNode.visited = true;
    while (curNode.id !== endNode.id) {
      // check the adjacent node
      let adj = curNode.edge;
      let min_node = adj;
      if (!adj) {
        throw Error("Meet dead end");
      }
      while (adj.next) {
        min_node =
          adj.weight < adj.next.weight && !this.graph_obj.nodes[adj.id].visited
            ? adj
            : adj.next;
        adj = adj.next;
      }
      this.cost += min_node.weight;
      curNode = this.graph_obj.nodes[min_node.id];
      this.path.push(`${curNode.id}: ${curNode.label}`);
      curNode.visited = true;
    }
    console.log(this.cost);
    return this.path;
  }
};

module.exports = Graph_Djisktra;
