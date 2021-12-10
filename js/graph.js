let AdjNode = class {
	constructor(id) {
		this.id = id;
		this.next = null;
	}
}

let Node = class {
	constructor(id, label) {
		this.id = id;
		this.label = label;
		this.edge = null;
	}

	add_edge(id) {
		let adj_node = new AdjNode(id);
		adj_node.next = this.edge;
		this.edge = adj_node;
	}

	generate_edges_list() {
		let tlist = [];
		let cur_adj = this.edge;
		var cur;

		while (cur_adj) {
			cur = {
				'data': {
					'source': this.id,
					'target': cur_adj.id
				}
			}
			cur_adj = cur_adj.next;
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