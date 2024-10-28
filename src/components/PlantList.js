import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDel, onUpdatePrice}) {
  return (
    <ul className="cards">{plants.map(plant=>
      <PlantCard 
      key={plant.id}
      plant={plant}
      onDel={onDel}
      onUpdatePrice={onUpdatePrice}
    />)}</ul>
  );

}

export default PlantList;
