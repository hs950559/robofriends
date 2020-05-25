import React from "react";
import Card from "../card/Card";

const CardList = (props) => {
  const cards = props.robots.map((item) => {
    return <Card key={item.id} robot={item} />;
  });

  return (
    <div>
      <div className="robos">{cards}</div>
    </div>
  );
};

export default CardList;
