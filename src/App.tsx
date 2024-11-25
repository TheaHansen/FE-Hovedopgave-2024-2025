import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductContainer from "./components/ProductContainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Together
function App() {
  return (
    <Router>
      <div>
        <h1>Hej</h1>
        <Routes>
          <Route path="/products" element={<ProductContainer endpoint="products" />} />
          <Route path="/" element={<ProductContainer endpoint="products/tilbud" />} />
        </Routes>

      </div>
    </Router>
  );
  
}

export default App;
