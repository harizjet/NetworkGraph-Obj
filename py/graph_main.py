import sys
import json
from graph import Graph, Node
from graph_dfs import Graph_Searching_DFS
from graph_bfs import Graph_Searching_BFS


if __name__ == '__main__':

	argv = sys.argv
	ins = argv[1:]

	data_dir = {
		"directed": "../data/directed.json",
		"undirected": "../data/undirected.json",
		"dag": "../data/dag.json"
	}

	if ins[0] == "create_graph":
		pass 
	elif ins[0] == "search_graph":
		start_id = ins[3]
		end_id = ins[4]
	else:
		raise Exception('Wrong file argument')

	target = data_dir.get(ins[1])
	if not target:
		raise Exception('Wrong file argument')
	
	# initialized graph
	graph_obj = Graph()
	for _ in range(int(input())):
		graph_obj.add_node(Node(*input().split(' ')))


	for _ in range(int(input())):
		source, destination = input().split(' ')

		if ins[1] == 'undirected':
			graph_obj.add_undirected_edges(sourId=source, 
				destId=destination)
		else:
			graph_obj.add_directed_edges(sourId=source, 
				destId=destination)

	# run instruction
	if ins[0] == "create_graph":
		output = {
			'nodes': graph_obj.generate_nodes_list(),
			'edges': graph_obj.generate_all_edges_list()
		}

		if ins[1] == 'dag':
			if len(graph_obj.generate_topo_sort()) != len(graph_obj.nodes):
				raise Exception('Not a DAG data')

		with open(target, 'w') as f:
			json.dump(output, f, indent=3)

	elif ins[0] == "search_graph":
		if ins[2] == "bfs":
			search_obj = Graph_Searching_BFS(graph_obj)
		elif ins[2] == "dfs":
			search_obj = Graph_Searching_DFS(graph_obj)
		else:
			raise Exception("Option not available")
		result = search_obj.find_the_node(start_id, end_id)
		print(result)
