import { useState } from "react"
import { AddCategory } from "./components";
import { GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
  
  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory))
      return;

    setCategories([newCategory,...categories]);
  }

  const gifList = categories.map((category) => (
    <GifGrid key={category} category={category}/>
  )
  )
  
  return (
    <>
    
    <h3>GifExpertApp</h3>

    <AddCategory onNewCategory={onAddCategory} />

    {gifList}

    </>

  )
}
