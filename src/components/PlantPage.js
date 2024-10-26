import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(data => {
        setPlants(data)
        setFilteredPlants(data)
      })
  }, [])

  function addPlant(newPlant) {
    const addedPlants = [...plants, newPlant];
    setPlants(addedPlants);
    setFilteredPlants(addedPlants);
  }

  function onSearch(search) {
    if (search === "") {
      setPlants(filteredPlants)
    } else {
      const searchedPlants = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))
      setPlants(searchedPlants)
    }
  }

  function onDelete(selectedPlant){
    const deletedPlant = plants.filter(plant=>plant.id !== selectedPlant.id)
    setPlants(deletedPlant)
    setFilteredPlants(deletedPlant)
  }



  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search onSearch={onSearch} />
      <PlantList plants={plants} onDel={onDelete} />
    </main>
  );
}

export default PlantPage;
