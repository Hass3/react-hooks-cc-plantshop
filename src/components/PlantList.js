import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDel}) {
  return (
    <ul className="cards">{plants.map(plant=>
      <PlantCard 
      key={plant.id}
      plant={plant}
      onDel={onDel}
    />)}</ul>
  );
}

export default PlantList;
