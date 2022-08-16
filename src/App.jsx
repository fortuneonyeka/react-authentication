import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/navbar/Login";
import Register from "./components/navbar/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
