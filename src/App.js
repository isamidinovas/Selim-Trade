import { Route, Routes } from "react-router";
import routesConfig from "./routes/routesConfig";
import Navbar from "./components/Navbar/Navbar";
import Forms from "./components/Forms/Forms";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
