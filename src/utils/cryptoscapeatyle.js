export const styles = [
  {
    selector: "node",
    style: {
      label: "data(label)",
      "background-color": "#4CAF50",
      color: "#ffffff",
      "text-valign": "center",
      "text-halign": "center",
      width: 80,
      height: 80,
      "font-size": "12px"
    }
  },

  {
    selector: "edge",
    style: {
      width: 2,
      "line-color": "#9ca3af",
      "target-arrow-shape": "triangle",
      "target-arrow-color": "#9ca3af"
    }
  },

  {
    selector: "node:hover",
    style: {
      "border-width": 4,
      "border-color": "#facc15",
      "transition-property": "border-width, border-color",
      "transition-duration": "0.2s"
    }
  }
];
