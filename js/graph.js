let Node = class {
	constructor(id, label) {
		this.id = id;
		this.label = label;
		this.edges = [];
	}

	add_edge(id) {
		this.edges.push(id);
	}

	generate_edges_list() {
		let tlist = [];
		var cur;

		for (let i = 0; i < this.edges.length; i++) {
			cur = {
				'data': {
					'source': this.id,
					'target': this.edges[i]
				}
			}
			tlist.push(cur);
		}

		return tlist;
	}
}

let Graph = class {
	constructor() {
		this.nodes = [];
	}

	add_node(Node) {
		this.nodes.push(Node);
	}

	generate_nodes_list() {
		let tlist = [];
		var cur;

		for (let i = 0; i < this.nodes.length; i ++) {
			cur = {
				'data': {
					'id': this.nodes[i].id,
					'name': this.nodes[i].label
				}
			}
			tlist.push(cur);
		}

		return tlist;
	}

	generate_all_edges_list() {
		let tlist = []
		var cur;

		for (let i = 0; i < this.nodes.length; i ++) {
			cur = this.nodes[i].generate_edges_list()
			tlist = tlist.concat(cur)
		}

		return tlist;
	}
}


module.exports = {
	Graph, Node
}