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
  }

  find_the_node(start_id, end_id) {
    let foundNode = null;
    let pathNode = [];
    let search_node = function (node, target_id, graph_obj, curpath) {
      node.visited = true;
      node.color = "black";
      if (node.id === target_id) {
        foundNode = node;
        pathNode = curpath;
      } else if (!foundNode) {
        let cur = node.edge;
        if (!cur || cur.visited) {
          return;
        }
        while (cur) {
          let temp = [...curpath];
          graph_obj.nodes[cur.id].color = "grey";
          graph_obj.nodes[cur.id].time = node.time + 1;
          graph_obj.nodes[cur.id].predecessor = node.id;
          temp.push(graph_obj.nodes[cur.id]);
          search_node(graph_obj.nodes[cur.id], target_id, graph_obj, temp);
          cur = cur.next;
        }
      }
    };

    let start_node = this.graph_obj.nodes[start_id];
    search_node(start_node, end_id, this.graph_obj, [start_node]);
    console.log(pathNode);
    return foundNode;
  }
};

module.exports = Graph_Searching_DFS;
