import React from "react";
import LandingPage from "./domain/LandingPage";
import About from "./domain/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import "./sass/base.scss";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <div className="App">
        <NavBar />
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact={true} path="/about" component={About} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
