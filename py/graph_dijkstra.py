from graph import Graph, Node

class Graph_Dijkstra(Graph):
    def __init__(self, graph_obj: Graph):
        super().__init__()
        for node in graph_obj.nodes.values():
            node.visited = False
        self.graph_obj = graph_obj
        self.cost = 0
        self.path = []
    def search(self, startNode: int, endNode: int) -> list:
        startNode = self.graph_obj.nodes[startNode]
        endNode = self.graph_obj.nodes[endNode]
        self.path.append("{}: {}".format(startNode.id, startNode.label))
        curNode = startNode
        curNode.visited = True
        while curNode.id != endNode.id:
            # check the adjacent node
            adj = curNode.edge
            min_node = adj
            if not adj:
                raise Exception("Meet dead end")
            while adj.next:
                min_node = adj if adj.weight < adj.next.weight \
                    and not self.graph_obj.nodes[adj.id].visited else adj.next
                adj = adj.next 
            self.cost += min_node.weight 
            curNode = self.graph_obj.nodes[min_node.id]
            self.path.append("{}: {}".format(curNode.id, curNode.label))
            curNode.visited = True
        print(self.cost)
        return self.path