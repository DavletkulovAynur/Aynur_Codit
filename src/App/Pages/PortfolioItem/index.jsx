import React, { useEffect, useRef, useState } from "react";
import "./YulYortTaxi.scss";
import { useRouter } from "../../Common/hooks/useRouter";
import { aboutPortfoliItems } from "../../../data/aboutPortfolioItems";

export const PortfolioViewDefault = () => {
  const router = useRouter();
  const [portfolioData, setPortfolioData] = useState("");
  useEffect(() => {
    defineColorHeader(router.pathname);
  }, [router]);
  const textInput = useRef(null);

  //FIXME: придумать решение получше
  const defineColorHeader = (path) => {
    const portfolioItem = path.replace("/portfolio/", "");
    setPortfolioData(portfolioItem);
  };

  // TODO: придумать решение получше
  const scrollToMyRef = () => {
    console.log('test')
    // document.body.scrollTop = 0;
    window.scrollTo(0, 0)
  };

  useEffect(() => {
    scrollToMyRef();
  }, []);

  return (
    <div
      ref={textInput}
      className="Portfolio-item Portfolio-item__root"
      style={
        aboutPortfoliItems[portfolioData] && {
          background: aboutPortfoliItems[portfolioData].background,
        }
      }
    >
      {aboutPortfoliItems[portfolioData] ? (
        <MainContent data={aboutPortfoliItems[portfolioData]} />
      ) : (
        <Loader />
      )}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fd2c78"
          fillOpacity="1"
          d="M0,160L48,144C96,128,192,96,288,80C384,64,480,64,576,96C672,128,768,192,864,202.7C960,213,1056,171,1152,128C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

const Loader = () => {
  return (
    <>
      <h1>LOADING</h1>
    </>
  );
};

const MainContent = ({ data }) => {
  const { title, text, img, links, images, background } = data;

  const divStyle = {
    background: background,
  };

  return (
    <>
      <div className="Portfolio-item__cover-wrapper" style={divStyle}>
        <img className="Portfolio-item__cover" src={img} />
      </div>
      <div className="AppList">
        <div className="AppListing">
          <div className="AppListing-body">
            <h1 className="AppListing-title">{title}</h1>
            <p className="AppListing-text">{text}</p>
            <section>
              <h3 className="AppListing-author">
                More info from the Developer
              </h3>
              <ul className="AppListing-list">
                {links.map((link, index) => {
                  return (
                    <li key={index} className="AppListing-link">
                      <a className="AppListing-external" href={link}>
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <div className="AppListing-meta">
            <ul>
              {images.map((img, index) => {
                return (
                  <li key={index}>
                    <label>
                      <img src={img} alt="" />
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
