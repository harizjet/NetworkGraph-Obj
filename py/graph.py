class AdjNode(object):
	def __init__(self, id):
		self.id = id
		self.next = None
		
class Node(object):
	def __init__(self, id: str, label: str):
		self.id = id
		self.label = label
		self.edge = None

	def add_edge(self, id: str):
		adj_node = AdjNode(id)
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

	def add_directed_edges(self, sourId: str, destId: str):
		self.nodes[sourId].add_edge(destId)

	def add_undirected_edges(self, sourId: str, destId: str):
		self.nodes[sourId].add_edge(destId)
		self.nodes[destId].add_edge(sourId)

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
