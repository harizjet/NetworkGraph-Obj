import sys
from graph import Graph, Node


if __name__ == '__main__':

	argv = sys.argv

	ins = argv[1] if len(argv) > 1 else None

	if ins == 'directed':
		target = '../data/directed.json'
	elif ins == 'undirected':
		target = '../data/undirected.json'
	else:
		raise Exception('Wrong file argument')

	graph_obj = Graph()
	for _ in range(int(input())):
		graph_obj.add_node(Node(*input().split(' ')))

	edges = []
	for _ in range(int(input())):
		edges.append(input().split(' '))
	edges.sort(key=lambda x: x[0])

	i_n, i_e = 0, 0
	while i_n < len(graph_obj.nodes) - 1  or i_e < len(edges):
		curN = graph_obj.nodes[i_n]

		curEd = edges[i_e]

		if curEd[0] == curN.id:
			curN.add_edge(curEd[1])
			i_e += 1
			continue

		i_n += 1

	