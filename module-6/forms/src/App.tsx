import React, { useEffect, useState } from "react";
import "./App.css";
interface Data {
  data:{title:string, description: string};
  
}
function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() =>{
    async function getTitles() {
      const response = await fetch('https://v2.api.noroff.dev/rainy-days/07a7655a-7927-421b-ba6a-b6742d5a75b8');
      const data:Data = await response.json();
      setTitle(data.data.title);
      setDescription(data.data.description);
    }
    getTitles();
  },[])


  return (
    <>
    <h1>Hello</h1>
      <form action=""
       onSubmit={(e) =>{
         e.preventDefault();
         
        }}>
          <label htmlFor="title">Title</label>
      <input type="text" value={title} name="title" id="title" onChange={(e)=>{
        setTitle(e.target.value);
      }} />
      <textarea name="description" id="description" value={description}></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};


export default App;
