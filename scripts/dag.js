var read_json = async function () {
  const response = await fetch("../data/dag.json");
  const data = await response.json();
  return data;
};

read_json().then((data) => {
  window.cy = cytoscape({
    container: document.getElementById("cy"),

    layout: {
      name: "dagre",
      nodeSeparation: 120,
    },

    style: [
      {
        selector: "node",
        style: {
          label: "data(name)",
          "text-valign": "center",
          color: "#000000",
          "background-color": "#3a7ecf",
        },
      },

      {
        selector: "edge",
        style: {
          width: 4,
          "target-arrow-shape": "triangle",
          "line-color": "#9dbaea",
          "target-arrow-color": "#9dbaea",
          "curve-style": "bezier",
        },
      },
    ],

    elements: data,
  });
});
