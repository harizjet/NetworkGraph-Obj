let { Graph, Node } = require("./graph.js");

let Graph_Searching_BFS = class extends Graph {
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
    let search_node = function (graph_obj) {
      while (traverseWay.length) {
        let curVal = traverseWay.shift();
        let curNode = curVal[0];
        let curpath = curVal[1];
        traverse_path.push(curNode.label);
        curNode.visited = true;
        curNode.color = "black";
        if (curNode.id === end_id) {
          return curpath;
        } else {
          let neigh = curNode.edge;
          while (neigh) {
            let temp = [...curpath];
            let thenode = graph_obj.nodes[neigh.id];
            if (!thenode.visited) {
              thenode.color = "grey";
              thenode.time = curNode.time + 1;
              thenode.predecessor = curNode.id;
              temp.push(thenode);
              traverseWay.push([thenode, temp]);
            }
            neigh = neigh.next;
          }
        }
      }
    };
    let curNode = this.graph_obj.nodes[start_id];
    let traverseWay = [[curNode, [curNode]]];
    let traverse_path = this.traverse_path;
    let pathNode = search_node(this.graph_obj);
    console.log(traverse_path);
    return pathNode;
  }
};

module.exports = Graph_Searching_BFS;
