var data = require("../data/directed_py.json");

document.addEventListener("DOMContentLoaded", function () {
  var cy = (window.cy = cytoscape({
    container: document.getElementById("cy"),

    layout: {
      name: "avsdf",
      nodeSeparation: 120,
    },

    style: [
      {
        selector: "edge",
        style: {
          "curve-style": "bezier",
          "target-arrow-shape": "triangle",
        },
      },
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
