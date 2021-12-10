import sys
import json
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


	for _ in range(int(input())):
		source, destination = input().split(' ')

		if ins == 'directed':
			graph_obj.add_directed_edges(sourId=source, 
				destId=destination)
		else:
			graph_obj.add_undirected_edges(sourId=source, 
				destId=destination)

	output = {
		'nodes': graph_obj.generate_nodes_list(),
		'edges': graph_obj.generate_all_edges_list()
	}

	with open(target, 'w') as f:
		json.dump(output, f, indent=3)
