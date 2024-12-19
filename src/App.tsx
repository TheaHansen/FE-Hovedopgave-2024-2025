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
import FAQ from "./pages/FAQ";
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
                  breadcrumbItems={[
                    { label: "Hjem", path: "/" },
                    { label: "Tilbud" }
                  ]}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <SingleProduct
                  endpoint="products"
                  breadcrumbItems={[
                    { label: "Hjem", path: "/" },
                    { label: "Alle produkter", path: "/alle-produkter" },
                    { label: "Produkt" } 
                  ]}
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
              path="/alle-produkter"
              element={
                <ProductOverview headline="Alle produkter" endpoint="products" />
              }
            />

            <Route path="/checkOut" element={<CheckOut />} />
            
            <Route
              path="/amotio"
              element={
                <ProductOverview
                  headline="Amotio"
                  endpoint="products/amotio"
                  breadcrumbItems={[
                    { label: "Hjem", path: "/" },
                    { label: "Instrumenter", path: "/instrumenter"},
                    { label: "Amotio" }
                  ]}
                />
              }
            />
            <Route
              path="/endodonti"
              element={
                <ProductOverview
                  headline="Endodonti"
                  endpoint="products/endodonti"
                  breadcrumbItems={[
                    {label: "Hjem", path: "/"},
                    {label: "Instumenter", path: "/instrumenter"},
                    {label: "Endodonti"}]}
                />
              }
            />
            <Route
              path="/instrumenter"
              element={
                <ProductOverview
                  headline="Instrumenter"
                  endpoint="products/instrumenter"
                  breadcrumbItems={[
                    {label: "Hjem", path: "/"}, 
                    {label: "Instrumenter"}]}
                />
              }
            />

            <Route 
              path="/FAQ" 
              element={<FAQ breadcrumbItems={[
                {label: "Hjem", path: "/"},
                {label: "FAQ"}]}/>} />
             
             <Route
               path="/om-os"
               element={<AboutUs breadcrumbItems={[
                {label: "Hjem", path: "/"},
                {label: "Om os"}]} />}
              />
          </Routes>
        </div>
        <Footer />
      </div>
    </BasketProvider>
  );
}

export default App;
