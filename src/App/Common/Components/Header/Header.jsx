import React, { useEffect, useState } from "react";

import {Link} from "react-router-dom"
import "./Header.scss";
import MobileMenu from "./Components/MobileMenu";

import burger from "../../assets/img/icons/burger.svg";
import { useRouter } from "../../hooks/useRouter";



export default function Header() {
  const [stateMobileMenu, setStateMobileMenu] = useState(false);
  const [colorHeaderClass, setColorHeaderClass] = useState('')
  const router = useRouter();

  useEffect(() => {
    defineColorHeader(router.pathname)
  }, [router])
  
  function openMobileMenu() {
    setStateMobileMenu(true)
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    setStateMobileMenu(false)
    document.body.style.overflow = "auto";
  }

  //FIXME: придумать решение получше 
  const defineColorHeader = (path) => {
    const classNamer = path.replace('/portfolio/', '')
    console.log(typeof classNamer)
    setColorHeaderClass(classNamer)
  }

  
  

  return (
    <>
      { stateMobileMenu 
        ? <MobileMenu closeMobileMenu={closeMobileMenu}/>
        : null
      }
      <div className={`Header Header__root Header__${colorHeaderClass}`}>
        <div className="App-content Header__box">
          <Link to="/" className="Header__logo">
           CODIT/
          </Link>
          <div onClick={openMobileMenu} className="Header__burger">
            <img src={burger} />
          </div>
          <nav className="Header__nav">
            <a href="#about-me" className="Header__nav-item">About me</a>
            <a href="#portfolio" className="Header__nav-item">Portfolio</a>
          </nav>
        </div>
      </div>
    </>
  );
}
