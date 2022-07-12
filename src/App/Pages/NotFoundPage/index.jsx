import React from "react";
import "./style.scss";
import notFound from "../../Common/assets/img/not-found.png"

export const NotFoundPage = () => {
  return (
    <div className="Not-found-page Not-found-page__root">
      <img className="Not-found-page__img" src={notFound} alt="not found page"/>
      <h1>Not Found Page</h1>
    </div>
  );
};
