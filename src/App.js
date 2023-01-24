import "./App.css";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Routes,
  //Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
