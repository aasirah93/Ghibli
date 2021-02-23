import React, { useState, useEffect } from 'react';



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

  

  
   return (
  
     isLoading?  (<h1>Loading...</h1>):
      


     
  
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