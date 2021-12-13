var read_json = async function () {
  const response = await fetch("../data/undirected.json");
  const data = await response.json();
  return data;
};

read_json().then((data) => {
  cytoscape({
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
  });
});
