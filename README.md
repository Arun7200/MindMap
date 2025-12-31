# Interactive Mindmap UI (Frontend Assignment)

This project is an **interactive Mindmap UI** built as part of a **Frontend Development Internship assignment**.  
The goal of this project is to visualize hierarchical data in a clean and intuitive way while allowing users to explore, edit, and interact with the data easily.

All UI elements are generated from a **JSON data file**, meaning any change in the data automatically updates the mindmap without modifying the UI code.

---

## What the App Does

- Displays data as a **mindmap** with nodes and connections  
- Supports **parent → child** relationships  
- Allows smooth navigation of **large graphs**  
- Enables users to **add, edit, and delete nodes**  
- Updates the UI **instantly** when data changes  

> The focus of this project is **clarity, interaction, and data-driven design**, not pixel-perfect visuals.

---

## Key Features

###  Mindmap Visualization
- Nodes connected in a clear hierarchical structure  
- Automatically laid out using a graph layout algorithm  
- Performs well even as the graph grows  

### Interactions
- Hover over a node to highlight it and view its summary  
- Click a node to **expand or collapse** its children  
- Right-click on a node to:
  - Rename the node  
  - Add a child node  
  - Delete the node  
- Double-click a node to quickly edit its label  

###  Navigation
- Drag to pan around the graph  
- Scroll to zoom in and out  
- **Fit View** button to center the entire mindmap  
- **Drill Down / Drill Up** buttons to explore the hierarchy level by level  

###  Export
- Export the current mindmap as a **PNG image**
##  Project Structure

```text
frontend_assignment/
│
├── public/
│   └── data/
│       └── mindmap.json        # Mindmap data (single source of truth)
│
├── src/
│   ├── components/
│   │   ├── MindMap.jsx         # Main graph logic
│   │   └── ContextMenu.jsx     # Right-click context menu
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── README.md
└── package.json

###  Data-Driven Design (Important)

The entire UI is powered by a single JSON file: **`mindmap.json`**.

- Add a new node → it appears instantly in the UI  
- Edit text in the JSON file → the UI updates automatically  
- Change the hierarchy → the mindmap structure updates accordingly  

> The JSON file serves as the **single source of truth** for the application.

---

## 🛠️ Tech Stack

- **React (Vite)** – UI rendering and state management  
- **Cytoscape.js** – Graph and mindmap visualization  
- **cytoscape-dagre** – Automatic graph layout  
- **JavaScript (ES6)** – Application logic and interactions  
- **CSS** – Styling and layout  

No backend is used — this is a **frontend-focused project**.

---

## ▶️ How to Run the Project

1. **Clone the repository**
   ```bash
   git clone <repo-url>
Install dependencies

npm install


Start the development server

npm run dev


Open the app in your browser

http://localhost:5173


📸 Screenshots (Submission)

The submission includes screenshots of:

Full mindmap view

Hover interaction on nodes

Context menu (right-click)

Expand and collapse functionality

Drill navigation

Exported image result

##Design Notes

UI logic and data are intentionally kept separate

Interactions are designed to be simple and discoverable

The project avoids over-engineering and focuses on usability

All edits occur entirely on the client side