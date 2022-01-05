from graph import Graph, Node
import math

class Graph_Searching_DFS(Graph):
    def __init__(self, graph_obj: Graph):
        super().__init__()
        for node in graph_obj.nodes.values():
            node.visited = False
            node.color = "white"
            node.time = 0
            node.predecessor = math.inf 
        self.graph_obj = graph_obj
        self.traverse_path = []
        self.pathNode = []
    def find_the_node(self, start_id: int, end_id: int) -> list:
        def search_node(node: Node, curpath: list) -> list:
            if self.pathNode or node.visited:
                return
            self.traverse_path.append(node.label)
            node.visited = True
            node.color = "black"
            if node.id == end_id:
                self.pathNode = curpath
            else:
                cur = node.edge
                while cur:
                    temp = curpath
                    thenode = self.graph_obj.nodes[cur.id]
                    thenode.color = "grey"
                    thenode.time = node.time + 1
                    thenode.predecessor = node.id
                    temp.append(thenode)
                    search_node(thenode, temp)
                    cur = cur.next
        startNode = self.graph_obj.nodes[start_id]
        search_node(startNode, [startNode])
        print(self.traverse_path)
        return self.pathNode

