import React, {useState}  from "react";

function PlantCard({plant, onDel, newPrice, onUpdatePrice, setNewPrice}) {
  const [stock, setStock] = useState(false)

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method:"DELETE"
    })
    .then(r=>r.json(''))
    .then(()=>onDel(plant))
  }

  function handlePriceChange(){
    const updatedPrice = {
      price: parseFloat(newPrice)
    }
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method:"PATCH",
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(updatedPrice)
    })
    .then(r=>r.json())
    .then((plant)=> {
      onUpdatePrice(plant)
      setNewPrice('')
    })
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
  
        <button onClick={()=> setStock(stock=>!stock)} className={!stock?"primary": ""}>{!stock ?"In Stock" : "Out of Stock"}</button>
        <button onClick={handleDelete} style={{background: "red"}}>Delete</button>
        <button onClick={handlePriceChange}>Change Price</button>
    </li>
  );
}

export default PlantCard;
