var data = require("../data/undirected_py.json");

document.addEventListener("DOMContentLoaded", function () {
  var cy = (window.cy = cytoscape({
    container: document.getElementById("cy"),

    layout: {
      name: "avsdf",
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
          width: 2,
          "line-color": "#3a7ecf",
          opacity: 0.5,
        },
      },
    ],

    elements: data,
  }));
});
