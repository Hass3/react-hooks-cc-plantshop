import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants, setPlants]= useState([]);
  const[filteredPlants, setFilteredPlants]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(data=>{
      setPlants(data)
      setFilteredPlants(data)
    })
  }, [])

function addPlant(newPlant){
  const addedPlants = [...plants, newPlant];
  setPlants(addedPlants);
  setFilteredPlants(addedPlants);
}

function onSearch (search){
  if (search ===""){
    setPlants(filteredPlants)
  }else{
  const searchedPlants = plants.filter((plant)=> plant.name.toLowerCase().includes(search.toLowerCase()))
  setPlants(searchedPlants)
  }
}



  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search onSearch={onSearch} />
      <PlantList plants={plants}  />
    </main>
  );
}

export default PlantPage;


    /**As a user:
    I can mark a plant as "sold out".
    I can search for plants by their name and see a filtered list of plants. */