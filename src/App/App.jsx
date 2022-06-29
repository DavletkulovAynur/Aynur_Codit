import React from "react";
import "./App.scss";
import Footer from "./Common/Components/Footer/Footer";
import Header from "./Common/Components/Header/Header";
import { Routes, Route, Link } from "react-router-dom";
import {MainPage} from "./Pages/Main" 
import { NotFoundPage } from "./Pages/NotFoundPage";
import { YulYortTaxi } from "./Pages/PortfolioItem/YulYortTaxi";

function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/portfolio/yul-yort-taxi" element={<YulYortTaxi/>}/>
        <Route path="*"  element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
