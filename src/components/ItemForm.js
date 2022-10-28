import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit}) {
  
  const[itemName, setItemName] = useState("")
  const[itemCategory, setItemCategory] = useState("Produce")

  function onItemNameChange(event){
    setItemName(event.target.value)
  }

  function onItemCategoryChange (event){
    console.log(event)
    setItemCategory(event.target.value)
  }

  function handleSubmit(event){
    
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    onItemFormSubmit(newItem)
    // setItemName("")
    // setItemCategory("Produce")
  }
  

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={onItemNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
