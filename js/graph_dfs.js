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
  }

  find_the_node(start_id, end_id) {
    let search_node = function (node, curpath, graph_obj) {
      if (pathNode.length || node.visited) {
        return;
      }
      traverse_path.push(node.label);
      node.visited = true;
      node.color = "black";
      if (node.id === end_id) {
        pathNode = curpath;
      } else if (!pathNode.length) {
        let cur = node.edge;
        while (cur) {
          let temp = [...curpath];
          let thenode = graph_obj.nodes[cur.id];
          thenode.color = "grey";
          thenode.time = node.time + 1;
          thenode.predecessor = node.id;
          temp.push(thenode);
          search_node(thenode, temp, graph_obj);
          cur = cur.next;
        }
      }
    };
    let pathNode = [];
    let start_node = this.graph_obj.nodes[start_id];
    let traverse_path = this.traverse_path;
    search_node(start_node, [start_node], this.graph_obj);
    console.log(traverse_path);
    return pathNode;
  }
};

module.exports = Graph_Searching_DFS;
