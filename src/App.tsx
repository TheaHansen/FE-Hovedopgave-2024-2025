import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductContainer from "./components/ProductContainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { getRequest } from "./services/requests";
import NavigationBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import LogoHeader from "./components/LogoHeader";


//Together
function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <LogoHeader />
        <NavigationBar />
        <Routes>
          <Route path="/products" element={<ProductContainer endpoint="products" />} />
          <Route path="/" element={<ProductContainer endpoint="products/tilbud" />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
