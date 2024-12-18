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
import Footer from "./components/Footer";
import CheckOut from "./pages/CheckOut";
import AboutUs from "./pages/AboutUs";

//Together
function App() {
  return (
    <BasketProvider>
      <div className="App-body">
        <div className="App-container">
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
              element={
                <ProductOverview headline="Søgeresultater:" endpoint="" />
              }
            />
            <Route
              path="/products"
              element={
                <ProductOverview headline="Tilbud" endpoint="products" />
              }
            />
            <Route path="/checkOut" element={<CheckOut />} />
            <Route
              path="/amotio"
              element={
                <ProductOverview
                  headline="Amotio"
                  endpoint="products/amotio"
                  breadcrumbItems={["Hjem", "Amotio"]}
                />
              }
            />
            <Route
              path="/endodonti"
              element={
                <ProductOverview
                  headline="Endodonti"
                  endpoint="products/endodonti"
                  breadcrumbItems={["Hjem", "Endodonti"]}
                />
              }
            />
            <Route
              path="/instrumenter"
              element={
                <ProductOverview
                  headline="Instrumenter"
                  endpoint="products/instrumenter"
                  breadcrumbItems={["Hjem", "Instrumenter"]}
                />
              }
            />
             <Route path="/checkOut" element={<CheckOut />} />
             <Route
               path="/about-us"
               element={<AboutUs breadcrumbItems={["Hjem", "Om os"]} />}
              />
          </Routes>
        </div>
        <Footer />
      </div>
    </BasketProvider>
  );
}

export default App;
