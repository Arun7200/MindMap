export default function Controls({ onFit, onExportJSON, onExportPNG }) {
  return (
    <div>
      <button onClick={onFit}>🎯 Fit</button>
      <button onClick={onExportJSON}>💾 JSON</button>
      <button onClick={onExportPNG}>🖼 PNG</button>
    </div>
  );
}
