import React from "react"
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Contact from "./routes/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { HashRouter, Route } from "react-router-dom"; 
import "./App.css";

function App() {
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/movie/:id" component={Detail} />
    <Footer />
  </HashRouter>
  );
}

export default App;