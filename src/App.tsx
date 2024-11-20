import { useEffect } from "react";
import "./App.css";
import { getRequest } from "./services/requests";
import ProductCard from "./components/productCard";
import 'bootstrap/dist/css/bootstrap.min.css';

 function App() {
//   useEffect(() => {
//     getRequest("/products");
//   });
  return (
    <div>
      <h1>Hej</h1>
      <ProductCard/>
    </div>
  );
}

export default App;
