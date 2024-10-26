import React from "react";



function UpdatePrice ({price, setNewPrice, plantId, onUpdate}){
    function handleSubmit(e){
        e.preventDefault();
        const newPrice = {
            price: price
        }
        fetch(`http://localhost:6001/plants/${plantId}`,{
            method:"PATCH",
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(newPrice)
        } 
        )
        .then(r=>r.json())
        .then(newPrice => onUpdate(newPrice))
        setNewPrice('')
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="new price" value={price} onChange={(e)=> setNewPrice(e.target.value)}/>
            <button>Change Price</button>
        </form>
        </>
    )
}

export default UpdatePrice