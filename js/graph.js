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
		this.nodes = {};
	}

	add_node(Node) {
		this.nodes[Node.id] = Node;
	}

	add_directed_edges(sourId, destId) {
		this.nodes[sourId].add_edge(destId);
	}

	add_undirected_edges(sourId, destId) {
		this.nodes[sourId].add_edge(destId);
		this.nodes[destId].add_edge(sourId);
	}

	generate_nodes_list() {
		let tlist = [];
		var cur;

		for (let key in this.nodes) {
			cur = {
				'data': {
					'id': this.nodes[key].id,
					'name': this.nodes[key].label
				}
			}
			tlist.push(cur);
		}

		return tlist;
	}

	generate_all_edges_list() {
		let tlist = []
		var cur;

		for (let key in this.nodes) {
			cur = this.nodes[key].generate_edges_list()
			tlist = tlist.concat(cur)
		}

		return tlist;
	}
}


module.exports = {
	Graph, Node
}