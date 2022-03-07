import React from "react";
import "./Plashka.scss";

export default function Plashka({data}) {
  return (
    <div className={`Plashka Plashka__${data.color}`}>
      <div>{data.name}</div>
    </div>
  );
}
