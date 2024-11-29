import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductContainer from "./components/ProductContainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { getRequest } from "./services/requests";
import NavigationBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import LogoHeader from "./components/LogoHeader";
import ProductOverview from "./pages/ProductOverview";

//Together
function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <LogoHeader />
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <ProductOverview
                headline="Gode tilbud"
                endpoint="products/tilbud"
              />
            }
          />
          <Route
            path="/products"
            element={<ProductContainer endpoint="products" />}
          />
          <Route
            path="/tilbud"
            element={
              <ProductOverview
                headline="Tilbud"
                endpoint="products/tilbud"
                breadcrumbItems={["Hjem", "Tilbud"]}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
