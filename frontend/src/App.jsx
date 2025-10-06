import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Offers from "./components/Offers";

function App() {
  return (
    <Router>
      <div>
        {/* Simple Navbar */}
        <nav style={{ padding: "10px", background: "#f8f9fa" }}>
          <Link to="/shopnow" style={{ margin: "0 15px" }}>Shop Now</Link>
          <Link to="/offers" style={{ margin: "0 15px" }}>Offers</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/shopnow" element={<Products />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
