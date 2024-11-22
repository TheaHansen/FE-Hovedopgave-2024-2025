import { useEffect } from "react";
import "./App.css";
import { getRequest } from "./services/requests";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import LogoHeader from "./components/LogoHeader";

function App() {
  useEffect(() => {
    getRequest("/products");
  });
  return (
    <div>
      <Topbar />
      <LogoHeader />
      <NavigationBar />
    </div>
  );
}

export default App;
