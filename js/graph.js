let Graph = class {
	constructor() {
		this.nodes = [];
	}

	add_node(Node) {
		this.nodes.push(Node);
	}
}

let Node = class {
	constructor(id, label) {
		this.id = id;
		this.label = label;
		this.edges = [];
	}

	add_edge(id) {
		this.edges.push(id);
	}
}

module.exports = {
	Graph, Node
}