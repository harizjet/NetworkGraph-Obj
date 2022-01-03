let { Graph, Node } = require("./graph.js");

let Graph_Searching_DFS = class extends Graph {
  constructor(graph_obj) {
    super();
    for (let graph_id in graph_obj.nodes) {
      graph_obj.nodes[graph_id].visited = false;
      graph_obj.nodes[graph_id].color = "white";
      graph_obj.nodes[graph_id].time = 0;
      graph_obj.nodes[graph_id].predecessor = Infinity;
    }
    this.graph_obj = graph_obj;
    this.traverse_path = [];
    this.pathNode = [];
  }

  find_the_node(start_id, end_id) {
    let search_node = function (node, curpath) {
      if (pathNode.length || node.visited) {
        return;
      }
      traverse_path.push(node.label);
      node.visited = true;
      node.color = "black";
      if (node.id === end_id) {
        pathNode = curpath;
      } else {
        let cur = node.edge;
        while (cur) {
          let temp = [...curpath];
          let thenode = graph_obj.nodes[cur.id];
          thenode.color = "grey";
          thenode.time = node.time + 1;
          thenode.predecessor = node.id;
          temp.push(thenode);
          search_node(thenode, temp);
          cur = cur.next;
        }
      }
    };
    let start_node = this.graph_obj.nodes[start_id];
    let traverse_path = this.traverse_path;
    let pathNode = this.pathNode;
    let graph_obj = this.graph_obj;
    search_node(start_node, [start_node]);
    this.pathNode = pathNode;
    console.log(this.traverse_path);
    return this.pathNode;
  }
};

module.exports = Graph_Searching_DFS;
