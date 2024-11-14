import { useEffect } from "react";
import "./App.css";
import { getRequest } from "./services/requests";

function App() {
  useEffect(() => {
    getRequest("/products");
  });
  return (
    <div>
      <h1>Hej</h1>
    </div>
  );
}

export default App;
