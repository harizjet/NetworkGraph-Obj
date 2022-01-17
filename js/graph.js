let AdjNode = class {
  constructor(id, weight) {
    this.id = id;
    this.weight = Number(weight);
    this.next = null;
  }
};

let Node = class {
  constructor(id, label) {
    this.id = id;
    this.label = label;
    this.edge = null;
  }

  add_edge(id, weight) {
    let adj_node = new AdjNode(id, weight);
    adj_node.next = this.edge;
    this.edge = adj_node;
  }

  generate_edges_list() {
    let tlist = [];
    let cur_adj = this.edge;
    var cur;

    while (cur_adj) {
      cur = {
        data: {
          source: this.id,
          target: cur_adj.id,
        },
      };
      cur_adj = cur_adj.next;
      tlist.push(cur);
    }

    return tlist;
  }
};

let Graph = class {
  constructor() {
    this.nodes = {};
  }

  add_node(Node) {
    this.nodes[Node.id] = Node;
  }

  add_directed_edges(sourId, destId, dist) {
    this.nodes[sourId].add_edge(destId, dist);
  }

  add_undirected_edges(sourId, destId, dist) {
    this.nodes[sourId].add_edge(destId, dist);
    this.nodes[destId].add_edge(sourId, dist);
  }

  generate_nodes_list() {
    let tlist = [];
    var cur;

    for (let key in this.nodes) {
      cur = {
        data: {
          id: this.nodes[key].id,
          name: this.nodes[key].label,
        },
      };
      tlist.push(cur);
    }

    return tlist;
  }

  generate_all_edges_list() {
    let tlist = [];
    var cur;

    for (let key in this.nodes) {
      cur = this.nodes[key].generate_edges_list();
      tlist = tlist.concat(cur);
    }

    return tlist;
  }

  generate_topo_sort() {
    var cur;
    let thash = {};
    let ans = [];

    for (let key in this.nodes) {
      thash[key] = 0;
    }

    for (let key in this.nodes) {
      cur = this.nodes[key].edge;
      while (cur) {
        thash[cur.id]++;
        cur = cur.next;
      }
    }

    let tans = [];
    for (let key in thash) {
      if (thash[key] == 0) {
        tans.push(key);
      }
    }

    while (tans.length) {
      let val = tans.shift();
      ans.push(val);
      cur = this.nodes[val].edge;
      while (cur) {
        thash[cur.id]--;
        if (thash[cur.id] === 0) {
          tans.push(cur.id);
        }
        cur = cur.next;
      }
    }
    return ans;
  }
};

module.exports = {
  Graph,
  Node,
};
