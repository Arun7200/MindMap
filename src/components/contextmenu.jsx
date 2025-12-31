export default function ContextMenu({ context, setContext, cy, setData }) {
  const { x, y, node } = context;

  const rename = () => {
    const name = prompt("New name:", node.data("label"));
    if (!name) return;
    node.data("label", name);

    setData(prev => ({
      ...prev,
      nodes: prev.nodes.map(n =>
        n.id === node.id() ? { ...n, label: name } : n
      )
    }));

    setContext(null);
  };

  const remove = () => {
    cy.remove(node);

    setData(prev => ({
      ...prev,
      nodes: prev.nodes.filter(n => n.id !== node.id()),
      edges: prev.edges.filter(
        e => e.source !== node.id() && e.target !== node.id()
      )
    }));

    setContext(null);
  };

  const addChild = () => {
    const id = `node_${Date.now()}`;
    const label = prompt("Child node name:");
    if (!label) return;

    cy.add([
      { data: { id, label } },
      { data: { source: node.id(), target: id } }
    ]);

    setData(prev => ({
      ...prev,
      nodes: [...prev.nodes, { id, label }],
      edges: [...prev.edges, { source: node.id(), target: id }]
    }));

    setContext(null);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: y,
        left: x,
        background: "#020617",
        border: "1px solid #334155",
        padding: 8,
        zIndex: 999
      }}
    >
      <button onClick={rename}>✏ Rename</button><br />
      <button onClick={addChild}>➕ Add Child</button><br />
      <button onClick={remove}>🗑 Delete</button>
    </div>
  );
}
