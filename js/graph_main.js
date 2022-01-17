const { Graph, Node } = require("./graph.js");
const Graph_Searching_DFS = require("./graph_dfs.js");
const Graph_Searching_BFS = require("./graph_bfs.js");
const Graph_Djisktra = require("./graph_djikstra.js");
const input = require("readline-sync");
const fs = require("fs");

let argv = process.argv.slice(2);
let ins = argv;

let data_dir = {
  directed: "../data/directed.json",
  undirected: "../data/undirected.json",
  dag: "../data/dag.json",
};

var start_id, end_id;
if (ins[0] === "create_graph") {
  // pass
} else if (ins[0] === "search_graph") {
  start_id = ins[3];
  end_id = ins[4];
} else if (ins[0] === "shortest_path") {
  start_id = ins[2];
  end_id = ins[3];
} else {
  throw Error("Wrong file argument");
}

let target = data_dir[ins[1]];
if (target === undefined) {
  throw Error("Wrong file argument");
}

// initialized graph
const graph_obj = new Graph();
let n = input.question();
var curNode;

for (let i = 0; i < n; i++) {
  curNode = new Node(...input.question().split(" "));
  graph_obj.add_node(curNode);
}

n = input.question();
var curEdg;

for (let i = 0; i < n; i++) {
  curEdg = input.question().split(" ");

  if (ins[1] === "undirected") {
    graph_obj.add_undirected_edges(curEdg[0], curEdg[1], curEdg[2]);
  } else {
    graph_obj.add_directed_edges(curEdg[0], curEdg[1], curEdg[2]);
  }
}

// run instruction
if (ins[0] === "create_graph") {
  let output = {
    nodes: graph_obj.generate_nodes_list(),
    edges: graph_obj.generate_all_edges_list(),
  };

  if (ins[1] === "dag") {
    if (
      graph_obj.generate_topo_sort().length !==
      Object.keys(graph_obj.nodes).length
    ) {
      throw new Error("Not a DAG data");
    }
  }

  fs.writeFileSync(target, JSON.stringify(output, null, 3));
} else if (ins[0] === "search_graph") {
  var search_obj;
  if (ins[2] === "bfs") {
    search_obj = new Graph_Searching_BFS(graph_obj);
  } else if (ins[2] === "dfs") {
    search_obj = new Graph_Searching_DFS(graph_obj);
  } else {
    throw new Error("Option not available");
  }
  let result = search_obj.find_the_node(start_id, end_id);
  console.log(result);
} else if (ins[0] === "shortest_path") {
  let search_obj = new Graph_Djisktra(graph_obj);
  let result = search_obj.search(start_id, end_id);
  console.log(result);
}
