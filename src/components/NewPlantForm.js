import React, { useState } from "react";

function NewPlantForm({onAddPlant}) {
  const [nameInput , setNameInput]= useState("");
  const [imgInput,setImgInput] = useState("");
  const [priceInput, setPriceInput]= useState('');

  function handleSubmit(e){
    e.preventDefault();
    const newPlant= {
      name: nameInput,
      image: imgInput,
      price: parseFloat(priceInput)
    }
    fetch("http://localhost:6001/plants", {
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPlant)
    })
    .then(r=>r.json())
    .then(plant => onAddPlant(plant))
    setNameInput('');
    setImgInput('');
    setPriceInput('');
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={nameInput} onChange={e=>setNameInput(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={imgInput}  onChange={e=>setImgInput(e.target.value)}  />
        <input type="number" name="price" step="0.01" placeholder="Price" value={priceInput}  onChange={e=>setPriceInput(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
