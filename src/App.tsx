import { useEffect } from "react";
import "./App.css";
import { getRequest } from "./services/requests";
import NavigationBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";

function App() {
  useEffect(() => {
    getRequest("/products");
  });
  return (
    <div>
      <h1>Hej</h1>
      <Topbar/>
      <NavigationBar/>
    </div>
  );
}

export default App;
