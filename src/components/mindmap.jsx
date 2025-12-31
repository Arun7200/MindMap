import { useEffect, useRef, useState } from "react";
import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";
import ContextMenu from "./contextmenu";

cytoscape.use(dagre);

export default function MindMap({ data, setData }) {
  const cyRef = useRef(null);
  const containerRef = useRef(null);

  const [context, setContext] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [level, setLevel] = useState(0);

  // ---------------- INITIALIZE CYTOSCAPE ----------------
  useEffect(() => {
    if (cyRef.current) return;

    cyRef.current = cytoscape({
      container: containerRef.current,
      elements: [
        ...data.nodes.map(n => ({ data: n })),
        ...data.edges.map(e => ({ data: e }))
      ],
      layout: { name: "dagre", rankSep: 80 },
      zoomingEnabled: true,
      panningEnabled: true,
      minZoom: 0.2,
      maxZoom: 2.5,
      style: [
        {
          selector: "node",
          style: {
            label: "data(label)",
            "background-color": "#22c55e",
            "border-width": 2,
            "border-color": "#facc15",
            color: "#fff",
            "text-valign": "center",
            "text-halign": "center"
          }
        },
        {
          selector: "node.hovered",
          style: {
            "border-width": 4,
            "border-color": "#fde047"
          }
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#94a3b8"
          }
        },
        {
          selector: ".hidden",
          style: { display: "none" }
        }
      ]
    });

    const cy = cyRef.current;

    // ---------------- HOVER ----------------
    cy.on("mouseover", "node", evt => {
      evt.target.addClass("hovered");
      setHovered(evt.target.data());
    });

    cy.on("mouseout", "node", evt => {
      evt.target.removeClass("hovered");
      setHovered(null);
    });

    // ---------------- RIGHT CLICK ----------------
    cy.on("cxttap", "node", evt => {
      const { x, y } = evt.originalEvent;
      setContext({ x, y, node: evt.target });
    });

    // ---------------- DOUBLE CLICK (RENAME) ----------------
    cy.on("dbltap", "node", evt => {
      const node = evt.target;
      const label = prompt("Edit label:", node.data("label"));
      if (!label) return;

      node.data("label", label);

      setData(prev => ({
        ...prev,
        nodes: prev.nodes.map(n =>
          n.id === node.id() ? { ...n, label } : n
        )
      }));
    });

    // ---------------- EXPAND / COLLAPSE ----------------
    cy.on("tap", "node", evt => {
      const nodeId = evt.target.id();
      const children = data.hierarchy[nodeId];
      if (!children || children.length === 0) return;

      const firstChild = cy.getElementById(children[0]);
      const hide = !firstChild.hasClass("hidden");

      const toggle = id => {
        (data.hierarchy[id] || []).forEach(child => {
          const n = cy.getElementById(child);
          hide ? n.addClass("hidden") : n.removeClass("hidden");
          toggle(child);
        });
      };

      toggle(nodeId);
      cy.layout({ name: "dagre" }).run();
    });

  }, [data, setData]);

  // ---------------- FIT VIEW ----------------
  const fitView = () => {
    cyRef.current?.fit(undefined, 50);
  };

  // ---------------- EXPORT PNG ----------------
  const exportPNG = () => {
    if (!cyRef.current) return;
    const png = cyRef.current.png({ scale: 2, bg: "#020617" });
    const a = document.createElement("a");
    a.href = png;
    a.download = "mindmap.png";
    a.click();
  };

  // ---------------- DRILL DOWN / UP ----------------
  const showUpToLevel = target => {
    const cy = cyRef.current;
    cy.nodes().addClass("hidden");

    const traverse = (id, depth) => {
      if (depth > target) return;
      cy.getElementById(id).removeClass("hidden");
      (data.hierarchy[id] || []).forEach(c =>
        traverse(c, depth + 1)
      );
    };

    traverse("root", 0);
    cy.layout({ name: "dagre" }).run();
  };

  const drillDown = () => {
    setLevel(l => {
      showUpToLevel(l + 1);
      return l + 1;
    });
  };

  const drillUp = () => {
    setLevel(l => {
      const next = Math.max(0, l - 1);
      showUpToLevel(next);
      return next;
    });
  };

  // ---------------- RENDER ----------------
  return (
    <>
      {/* TOOLBAR */}
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 100 }}>
        <button onClick={fitView}>Fit View</button>
        <button onClick={drillDown}>Drill Down</button>
        <button onClick={drillUp}>Drill Up</button>
        <button onClick={exportPNG}>Export PNG</button>
      </div>

      {/* SIDEBAR (HOVER INFO) */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 250,
          height: "100vh",
          background: "#020617",
          color: "#fff",
          padding: 12
        }}
      >
        <h3>{hovered?.label || "Hover a node"}</h3>
        <p>{hovered?.summary}</p>
      </div>

      {/* GRAPH */}
      <div
        ref={containerRef}
        style={{ width: "100vw", height: "100vh" }}
      />

      {/* CONTEXT MENU */}
      {context && (
        <ContextMenu
          context={context}
          setContext={setContext}
          cy={cyRef.current}
          setData={setData}
        />
      )}
    </>
  );
}
