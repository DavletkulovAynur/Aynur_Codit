import React from "react";
import "./App.scss";
import Footer from "./Common/Components/Footer/Footer";
import Header from "./Common/Components/Header/Header";
import { Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./Pages/Main";
import { NotFoundPage } from "./Pages/NotFoundPage";

//PORTFOLIO PAGES
import { PortfolioViewDefault } from "./Pages/PortfolioItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/* Сократить Route */}
        <Route path="/portfolio/taxi" element={<PortfolioViewDefault />} />
        <Route path="/portfolio/euro2020" element={<PortfolioViewDefault />} />
        <Route path="/portfolio/store" element={<PortfolioViewDefault />} />
        <Route path="/portfolio/akbarsmed" element={<PortfolioViewDefault />} />
        <Route path="/portfolio/adventure" element={<PortfolioViewDefault />} />
        <Route
          path="/portfolio/collection"
          element={<PortfolioViewDefault />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
