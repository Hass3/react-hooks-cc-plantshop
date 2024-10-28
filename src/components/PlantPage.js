import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searched, setSearched]= useState('');

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
  
  function onUpdate(updatedPlant){
    const updatedPlants = plants.map((plant)=>{
      if(plant.id === updatedPlant.id){
        return updatedPlant
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
      <PlantList plants={displayedPlants} onDel={onDelete} onUpdatePrice={onUpdate} />
    </main>
  );
}

export default PlantPage;
