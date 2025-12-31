import { useEffect, useState } from "react";
import Mindmap from "./components/mindmap";
import "./index.css";

export default function App() {
  // ✅ Hooks are INSIDE the component (this is mandatory)
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [theme, setTheme] = useState("dark");

  // ✅ Theme effect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // ✅ Load JSON data
  useEffect(() => {
    fetch("/data/mindmap.json")
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) {
    return <div style={{ padding: 20 }}>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* GRAPH */}
      <div style={{ flex: 3 }}>
        <Mindmap data={data} onSelect={setSelected} />
      </div>

      {/* SIDEBAR */}
      <div
        style={{
          flex: 1,
          padding: 16,
          background: "var(--panel)"
        }}
      >
        <button onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}>
          Toggle Theme
        </button>

        <hr />

        {selected ? (
          <>
            <h2>{selected.label}</h2>
            <p>{selected.summary}</p>
          </>
        ) : (
          <p>Select a node</p>
        )}
      </div>
    </div>
  );
}
