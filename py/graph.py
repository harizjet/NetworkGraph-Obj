class Graph(object):
	def __init__(self):
		self.nodes = []

	def add_node(self, Node):
		self.nodes.append(Node)

class Node(object):
	def __init__(self, id, label):
		self.id = id
		self.label = label
		self.edges = []

	def add_edge(self, id):
		self.edges.append(id)