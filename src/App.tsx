import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/topbars/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/topbars/Topbar";
import LogoHeader from "./components/topbars/LogoHeader";
import ProductOverview from "./pages/ProductOverview";
import SingleProduct from "./pages/SingleProduct";
import FrontPage from "./pages/FrontPage";
import { BasketProvider } from "./context/BasketContext";
import CheckOut from "./pages/CheckOut";

//Together
function App() {
  return (
    <BasketProvider>
      <div>
        <Topbar />
        <LogoHeader />
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <FrontPage
                headline="Tilbud"
                endpoint="products/incarousel/true"
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
          <Route
            path="/search-results"
            element={<ProductOverview headline="Søgeresultater:" endpoint="" />}
          />
          <Route
            path="/products"
            element={<ProductOverview headline="Tilbud" endpoint="products" />}
          />
          <Route path="/checkOut" element={<CheckOut />} />
        </Routes>
      </div>
    </BasketProvider>
  );
}

export default App;
