const { Graph, Node } = require('./graph.js');
const input = require('readline-sync');

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
let edges = [];

for (let i = 0; i < n; i ++) {
	curEdg = input.question().split(' ');
	edges.push(curEdg);
}

edges.sort((f, l) => { return f[0] - l[0]; });

let i_n = 0; i_e = 0;
var curN, curEd;
while ((i_n < graph_obj.nodes.length) && (i_e < edges.length - 1)) {
	curN = graph_obj.nodes[i_n];

	curEd = edges[i_e];

	if (curEd[0] === curN.id) {
		curN.add_edge(curEd[1]);
		i_e ++;
		continue;
	}

	i_n ++;
}

console.log(graph_obj.nodes);