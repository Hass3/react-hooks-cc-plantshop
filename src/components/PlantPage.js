import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import UpdatePrice from "./UpdatePrice";
function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searched, setSearched]= useState('');
  const [newPrice, setNewPrice] = useState('')
  const [plantId, setPlantId] = useState()

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(data =>setPlants(data))
  }, [])

  function addPlant(newPlant) {
    const addedPlants = [...plants, newPlant];
    setPlants(addedPlants);
  }

  function onSearch(search) {
    setSearched(search);
  }

  function onDelete(selectedPlant){
    const deletedPlant = plants.filter(plant=>plant.id !== selectedPlant.id)
    setPlants(deletedPlant)
  }
  
  function onUpdate(newPrice){
    const updatedPlants = plants.map((plant)=>{
      if(plant.id === newPrice.id){
        return newPrice
      }
      else{
        return plant
      }
    })
    setPlants(updatedPlants)
  }

  const displayedPlants = plants.filter((plant)=> plant.name.toLowerCase().includes(searched.toLowerCase()))


  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search onSearch={onSearch} />
      <UpdatePrice price = {newPrice} setNewPrice ={setNewPrice} plantId = {plantId} onUpdate={onUpdate} />
      <PlantList plants={displayedPlants} onDel={onDelete} setPrice={setNewPrice} setPlantId={setPlantId} />
    </main>
  );
}

export default PlantPage;
