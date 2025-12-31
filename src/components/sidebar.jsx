export default function Sidebar({ node }) {
  if (!node) {
    return <p>Hover or click a node</p>;
  }

  return (
    <div>
      <h2>{node.label}</h2>
      <p>{node.summary}</p>
    </div>
  );
}
