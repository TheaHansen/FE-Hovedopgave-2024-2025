import { useEffect } from "react";
import "./App.css";
import { getRequest } from "./services/requests";
import ProductCard from "./components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductContainer from "./components/ProductContainer";

function App() {
  // useEffect(() => {
  //   getRequest("/products");
  // });
  return (
    <div>
      <h1>Hej</h1>

      <ProductContainer />
    </div>
  );
}

export default App;
