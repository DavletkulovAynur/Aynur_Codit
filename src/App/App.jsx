import React from "react";
import "./App.scss";
import Footer from "./Common/Components/Footer/Footer";
import Header from "./Common/Components/Header/Header";
import { Routes, Route, Link } from "react-router-dom";
import {MainPage} from "./Pages/Main" 
import { NotFoundPage } from "./Pages/NotFoundPage";

//PORTFOLIO PAGES
import { YulYortTaxi } from "./Pages/PortfolioItem/YulYortTaxi";
import { Euro2020 } from "./Pages/PortfolioItem/euro2020/euro2020";
import { OnlineStore } from "./Pages/PortfolioItem/onlineStore";

function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/portfolio/yul-yort-taxi" element={<YulYortTaxi/>}/>
        <Route path="/portfolio/euro2020" element={<Euro2020/>}/>
        <Route path="/portfolio/online-store" element={<OnlineStore/>}/>
        <Route path="/portfolio/akbars-med" element={<YulYortTaxi/>}/>
        <Route path="/portfolio/adventure" element={<YulYortTaxi/>}/>
        <Route path="/portfolio/collection" element={<YulYortTaxi/>}/>
        <Route path="*"  element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
