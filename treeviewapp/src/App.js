import logo from "./logo.svg";
import "./App.css";
import TreeView from "./Components/treeView";
import menus from "./Components/treeView/data";

function App() {
  return (
    <div className="App">
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
