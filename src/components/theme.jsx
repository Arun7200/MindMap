export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
