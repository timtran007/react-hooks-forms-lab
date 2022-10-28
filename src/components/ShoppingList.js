import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
 

  function onSearchChange(event){
    setSearch(event.target.value)
  }

  function onItemFormSubmit(newItem){
    setItems([...items, newItem])
  }
  console.log(items)
  

  const itemsToDisplay = items
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })
  
  

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={onItemFormSubmit}/>
      <Filter onSearchChange={onSearchChange} search={search} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
