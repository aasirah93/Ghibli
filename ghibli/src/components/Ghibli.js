import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar.js'


function Ghibli() {
    const [items, setItems] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    
    
  
    const fetchData = () => fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(
    (data) => {
    
    setItems(data);
    setIsLoading(false);
  
  },
  
  )
  
  useEffect(() => {
    fetchData()
  }, [])
  console.log(items)

  


  
     if (isLoading) 
     
     {return (<h1>Loading...</h1>);}
      


     const filteredItems = items.filter ({prop}
       item => {
         return item.name.toLowerCase().includes (search.toLowerCase() )
       }
     )
    
     return (
     <div>
       <ol style={{ listStyleType: "none"}}>
       {items && items.map(item => (
       <li key = {item.id}>
      <div class="box">
       <h1> {item.title}</h1>
       <h2> Director {item.director}</h2>
       <h3 class="font-size"> Released {item.release_date}</h3>
       <p>{item.description}</p>
       </div>
       </li>)
       )}
       </ol>
    </div>
)
       }
  
      
  export default Ghibli