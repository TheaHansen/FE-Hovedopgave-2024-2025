import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductContainer from "./components/product/ProductContainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { getRequest } from "./services/requests";
import NavigationBar from "./components/topbars/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/topbars/Topbar";
import LogoHeader from "./components/topbars/LogoHeader";
import ProductOverview from "./pages/ProductOverview";
import SingleProduct from "./pages/SingleProduct";

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
            path="/tilbud"
            element={
              <ProductOverview
                headline="Tilbud"
                endpoint="products/tilbud"
                breadcrumbItems={["Hjem", "Tilbud"]}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <SingleProduct
                endpoint="products"
                breadcrumbItems={["Hjem", "Tilbud", "Produkt"]}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
