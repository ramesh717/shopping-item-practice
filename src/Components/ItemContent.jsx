import React from "react";

export default function ItemContent(props) {
  return (
    <div className="grid-wrapper ">
      {props.shoes.map((shoe) => {
        return (
          <div className="grid-item " key={shoe._id}>
            <img src={shoe.image} alt="image" />
            <div className="">
              <h5>{shoe.name}</h5>
              <button className="btn btn-dark  ">Buy</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
