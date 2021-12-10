(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        module.exports = {
          nodes: [
            {
              data: {
                id: "0",
                name: "Ali",
              },
            },
            {
              data: {
                id: "1",
                name: "Abu",
              },
            },
            {
              data: {
                id: "2",
                name: "Xin",
              },
            },
            {
              data: {
                id: "3",
                name: "John",
              },
            },
            {
              data: {
                id: "4",
                name: "Ahmad",
              },
            },
            {
              data: {
                id: "5",
                name: "Alex",
              },
            },
            {
              data: {
                id: "6",
                name: "Peter",
              },
            },
            {
              data: {
                id: "7",
                name: "Najib",
              },
            },
          ],
          edges: [
            {
              data: {
                source: "0",
                target: "3",
              },
            },
            {
              data: {
                source: "0",
                target: "6",
              },
            },
            {
              data: {
                source: "0",
                target: "1",
              },
            },
            {
              data: {
                source: "0",
                target: "7",
              },
            },
            {
              data: {
                source: "1",
                target: "0",
              },
            },
            {
              data: {
                source: "2",
                target: "5",
              },
            },
            {
              data: {
                source: "2",
                target: "7",
              },
            },
            {
              data: {
                source: "4",
                target: "6",
              },
            },
            {
              data: {
                source: "4",
                target: "7",
              },
            },
            {
              data: {
                source: "4",
                target: "0",
              },
            },
            {
              data: {
                source: "5",
                target: "6",
              },
            },
            {
              data: {
                source: "6",
                target: "7",
              },
            },
            {
              data: {
                source: "7",
                target: "5",
              },
            },
            {
              data: {
                source: "7",
                target: "2",
              },
            },
            {
              data: {
                source: "7",
                target: "6",
              },
            },
          ],
        };
      },
      {},
    ],
    2: [
      function (require, module, exports) {
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
      },
      { "../data/undirected_py.json": 1 },
    ],
  },
  {},
  [2]
);
