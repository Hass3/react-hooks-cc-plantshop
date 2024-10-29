import React, { useState } from "react";

function PlantCard({ plant, onDel, onUpdatePrice }) {
  const [stock, setStock] = useState(false)
  const [formIsOn, setFormIsOn] = useState(false)
  const [newPrice, setNewPrice] = useState(`${plant.price}`)

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
      .then(r => r.json(''))
      .then(() => onDel(plant))
  }

  function handlePriceChange(e){
    e.preventDefault();
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
      setFormIsOn(isOn=>!isOn)
    })
  }
  return (
    <>
      {formIsOn ? <form onSubmit={handlePriceChange}>
        <input placeholder="type new price" value={newPrice} onChange={e => setNewPrice(e.target.value)} />
        <button>Confirm Change</ button>
      </form> : null}
        <li className="card" data-testid="plant-item">
        <img src={plant.image} alt={plant.name} />
        <h4>{plant.name}</h4>
        <p>Price: {plant.price}</p>

        <button onClick={() => setStock(stock => !stock)} className={!stock ? "primary" : ""}>{!stock ? "In Stock" : "Out of Stock"}</button>
        <button onClick={handleDelete} style={{ background: "red" }}>Delete</button>
        <button onClick={() => setFormIsOn(isOn => !isOn)}>Change Price</button>
      </li>
    </>
  );
}

export default PlantCard;
