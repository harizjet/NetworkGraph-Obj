from graph import Graph
import math

class Graph_Searching_BFS(Graph):
    def __init__(self, graph_obj: Graph):
        super().__init__()
        for node in graph_obj.nodes.values():
            node.visited = False
            node.color = "white"
            node.time = 0
            node.predecessor = math.inf
        self.graph_obj = graph_obj
        self.traverse_path = []

    def find_the_node(self, start_id: int, end_id: int) -> list:
        def search_node() -> None:
            while traverseWay:
                curVal = traverseWay.pop(0)
                curNode = curVal[0]
                curPath = curVal[1]
                curNode.visited = True
                curNode.color = "black"
                self.traverse_path.append(curNode.label)
                if curNode.id == end_id:
                    return curPath
                else:
                    neigh = curNode.edge
                    while neigh:
                        temp = curPath
                        thenode = self.graph_obj.nodes[neigh.id]
                        if not thenode.visited:
                            thenode.color = "grey"
                            thenode.time = curNode.time + 1
                            thenode.predecessor = curNode.id
                            temp.append(thenode)
                            traverseWay.append([thenode, temp])
                        neigh = neigh.next
                
        curNode = self.graph_obj.nodes[start_id]
        traverseWay = [[curNode, [curNode]]]
        pathNode = search_node()
        print(self.traverse_path)
        return pathNode
