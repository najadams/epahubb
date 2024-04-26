import "./App.css";
import Content from "./Content";
import Sidebar from "./views/Sidebar";


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Content />
      </div>
    </div>
  );
}

export default App;
