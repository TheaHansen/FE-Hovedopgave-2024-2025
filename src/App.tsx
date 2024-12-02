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
import FrontPage from "./pages/FrontPage";

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
              <FrontPage headline="Tilbud" endpoint="products/incarousel" />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
