class Node(object):
	def __init__(self, id: str, label: str):
		self.id = id
		self.label = label
		self.edges = []

	def add_edge(self, id: str):
		self.edges.append(id)

	def generate_edges_list(self) -> list:
		tlist = []
		for edge in self.edges:
			cur = { 'data': { 'source': self.id, 'target': edge}}
			tlist.append(cur)
		return tlist

class Graph(object):
	def __init__(self):
		self.nodes = []

	def add_node(self, Node: Node):
		self.nodes.append(Node)

	def generate_nodes_list(self) -> list:
		tlist = []
		for node in self.nodes:
			cur = { 'data': { 'id': node.id, 'name': node.label}}
			tlist.append(cur)
		return tlist

	def generate_all_edges_list(self) -> list:
		tlist = []
		for node in self.nodes:
			tlist += node.generate_edges_list()
		return tlist
