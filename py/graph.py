class AdjNode(object):
	def __init__(self, id, weight):
		self.id = id
		self.weight  = int(weight)
		self.next = None

class Node(object):
	def __init__(self, id: str, label: str):
		self.id = id
		self.label = label
		self.edge = None

	def add_edge(self, id: str, weight: int):
		adj_node = AdjNode(id, weight)
		adj_node.next = self.edge
		self.edge = adj_node

	def generate_edges_list(self) -> list:
		tlist = []
		cur_adj = self.edge
		while cur_adj:
			cur = { 'data': { 'source': self.id, 'target': cur_adj.id}}
			cur_adj = cur_adj.next
			tlist.append(cur)
		return tlist

class Graph(object):
	def __init__(self):
		self.nodes = {}

	def add_node(self, node: Node):
		self.nodes[node.id] = node

	def add_directed_edges(self, sourId: str, destId: str, dist: int):
		self.nodes[sourId].add_edge(destId, dist)

	def add_undirected_edges(self, sourId: str, destId: str, dist: int):
		self.nodes[sourId].add_edge(destId, dist)
		self.nodes[destId].add_edge(sourId, dist)

	def generate_nodes_list(self) -> list:
		tlist = []
		for node in self.nodes.values():
			cur = { 'data': { 'id': node.id, 'name': node.label}}
			tlist.append(cur)
		return tlist

	def generate_all_edges_list(self) -> list:
		tlist = []
		for node in self.nodes.values():
			tlist += node.generate_edges_list()
		return tlist

	def generate_topo_sort(self) -> list:
		ans = []
		thash = {id: 0 for id in self.nodes.keys()}

		for node in self.nodes.values():
			cur = node.edge
			while cur:
				thash[cur.id] += 1
				cur = cur.next

		tans = []
		for k, v in thash.items():
			if v == 0:
				tans.append(k)

		while tans:
			val = tans.pop(0)
			ans.append(val)
			cur = self.nodes[val].edge
			while cur:
				thash[cur.id] -= 1
				if thash[cur.id] == 0:
					tans.append(cur.id)
				cur = cur.next

		return ans
