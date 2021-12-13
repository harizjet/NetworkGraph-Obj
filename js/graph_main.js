const { Graph, Node } = require('./graph.js');
const input = require('readline-sync');
const fs = require('fs');

argv = process.argv;

var ins;
if (argv.length > 2) {
	ins = argv[2];
} else {
	ins = null;
}

var target;
if (ins === 'directed') {
	target = '../data/directed.json';
} else if (ins === 'undirected') {
	target = '../data/undirected.json';
} else if (ins === 'topo') {
	target = '../data/topo.json';
} else {
	throw Error('Wrong file argument');
}

const graph_obj = new Graph();

let n = input.question();
var curNode;

for (let i = 0; i < n; i ++) {
	curNode = new Node(...input.question().split(' '));
	graph_obj.add_node(curNode);
}

n = input.question();
var curEdg;

for (let i = 0; i < n; i ++) {
	curEdg = input.question().split(' ');

	if (ins === 'undirected') {
		graph_obj.add_undirected_edges(curEdg[0], curEdg[1]);
	} else {
		graph_obj.add_directed_edges(curEdg[0], curEdg[1]);
	}
}

let output = {
	'nodes': graph_obj.generate_nodes_list(),
	'edges': graph_obj.generate_all_edges_list()
}

if (ins === 'topo') {
	if (graph_obj.generate_topo_sort().length !== Object.keys(graph_obj.nodes).length) {
		throw new Error('Not a DAG data');
	}
}

fs.writeFileSync(target, JSON.stringify(output, null, 3));