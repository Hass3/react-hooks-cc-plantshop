import React, {useState}  from "react";

function PlantCard({plant}) {
  const [stock, setStock] = useState(false)

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
  
        <button onClick={()=> setStock(stock=>!stock)} className={!stock?"primary": ""}>{!stock ?"In Stock" : "Out of Stock"}</button>
   
    </li>
  );
}

export default PlantCard;
