import React from "react";

const Card = ({ robot }) => {
  const { id, name, email } = robot;
  return (
    <div className="card card-body m-2 text-center">
      <img
        className="card-img-top"
        src={`https://robohash.org/${id}?size=200x200`}
        alt="img"
      />
      <h5 className="card-title mt-2">{name}</h5>
      <p className="card-text">{email}</p>
    </div>
  );
};

export default Card;
