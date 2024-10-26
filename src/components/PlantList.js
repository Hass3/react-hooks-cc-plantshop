import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDel, setPrice, setPlantId}) {
  return (
    <ul className="cards">{plants.map(plant=>
      <PlantCard 
      key={plant.id}
      plant={plant}
      onDel={onDel}
      setPrice={setPrice}
      setPlantId={setPlantId}
    />)}</ul>
  );
}

export default PlantList;
