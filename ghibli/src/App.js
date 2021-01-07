import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  const fetchData = () => {fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(
  (data) => {
  
  setItems(result);
  setIsLoading(false);

},

)}

useEffect(() => {
  fetchData()
}, [])
console.log(items)

 return (

   isLoading?  (<h1>Loading...</h1>)  :
   <div>
     <ul>
     {items && items.map(item => (
     <li key = {item.id}>
     <h1> {item.rocket_name}</h1>
     <p>
     <a href={item.id}> 
     &nbsp;&nbsp;
     {item.wikipedia}</a>
     </p>
     <p>{item.description}</p>
     <img src={item.flickr_images} alt="Rockets" width="500" height="600"/>
     </li>
     ))}
     </ul>
  </div>
   )
}
export default App;



