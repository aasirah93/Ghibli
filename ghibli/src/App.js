import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  const fetchData = () => {fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(
  (data) => {
  
  setItems(data);
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
     <ol style={{ listStyleType: "none" }}>
     {items && items.map(item => (
     <li key = {item.id}>
     <h1 class="box"> {item.title}</h1>
     </li>)
     )}
     </ol>
  </div>
   )
}
export default App;



