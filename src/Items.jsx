import React, { useState } from "react";

function Items(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="btn btn-primary">${props.price}</p>
      </div>
    </div>
  );
}

export default Items;
