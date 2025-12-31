Interactive Mindmap UI (Frontend Assignment)

This project is an interactive Mindmap UI built as part of a Frontend Development Internship assignment.
The main idea was to visualize hierarchical data in a clean and intuitive way, while allowing users to explore, edit, and interact with the data easily.

Everything you see in the UI is generated from a JSON data file, so changing the data automatically updates the mindmap without changing the UI code.

✨ What the App Does

Shows data as a mindmap with nodes and connections

Supports parent → child relationships

Allows users to navigate large graphs smoothly

Lets users edit, add, and delete nodes

Updates the UI instantly when data changes

The focus of this project is clarity, interaction, and data-driven design, not pixel-perfect visuals.

🎯 Key Features
🗺️ Mindmap Visualization

Nodes connected in a clear hierarchical structure

Automatically laid out using a graph layout algorithm

Works well even as the graph grows

🖱️ Interactions

Hover on a node to highlight it and see its summary

Click on a node to expand or collapse its children

Right-click on a node to:

Rename it

Add a child node

Delete the node

Double-click a node to quickly edit its label

🔍 Navigation

Drag to pan around the graph

Scroll to zoom in/out

Fit View button to center everything

Drill Down / Drill Up buttons to explore the hierarchy level by level

💾 Export

Export the current mindmap as a PNG image

📁 Project Structure
frontend_assignment/
│
├── public/
│   └── data/
│       └── mindmap.json        # Mindmap data (single source of truth)
│
├── src/
│   ├── components/
│   │   ├── MindMap.jsx         # Main graph logic
│   │   └── ContextMenu.jsx     # Right-click menu
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── README.md
└── package.json

📊 Data-Driven Design (Important)

The entire UI is powered by a JSON file (mindmap.json).

Add a new node → it appears in the UI

Change text in JSON → UI updates automatically

Change hierarchy → mindmap structure updates

The JSON file is the single source of truth.

🛠️ Tech Used

React (Vite) – UI and state management

Cytoscape.js – Graph and mindmap rendering

cytoscape-dagre – Automatic layout

JavaScript (ES6) – Logic and interactions

CSS – Styling and layout

No backend is used — this is a frontend-focused project.

▶️ How to Run the Project

Clone the repository

git clone <repo-url>


Install dependencies

npm install


Start the development server

npm run dev


Open the app in your browser
👉 http://localhost:5173

🎥 Demo Video (Submission)

The demo video shows:

Pan and zoom navigation

Hover behavior

Expand / collapse nodes

Drill down and drill up

Editing nodes (rename, add, delete)

Exporting the mindmap as an image

Voice narration is optional — interactions are clearly visible.

📸 Screenshots (Submission)

Full mindmap view

Hover interaction

Context menu (right-click)

Expand / collapse example

Drill navigation

Export result

💡 Design Notes

UI logic and data are kept separate on purpose

Interactions are designed to be simple and discoverable

The project avoids over-engineering and focuses on usability

All edits happen on the client side

🚀 Possible Improvements

If extended further, this project could include:

Saving changes to localStorage or backend

Search and filter for nodes

Keyboard shortcuts

Export to PDF or JSON

Better animations for expand/collapse