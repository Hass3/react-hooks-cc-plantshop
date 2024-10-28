import React, {useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDel, onUpdatePrice}) {
  const [newPrice, setNewPrice] = useState('')
  return (
    <>
    <input placeholder="type new price" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)}/>
    <ul className="cards">{plants.map(plant=>
      <PlantCard 
      key={plant.id}
      plant={plant}
      onDel={onDel}
      newPrice={newPrice}
      onUpdatePrice={onUpdatePrice}
      setNewPrice={setNewPrice}
    />)}</ul>
    </>
  );

}

export default PlantList;
