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
     <ul>
     {items && items.map(item => (
     <li key = {item.id}>
     <h1> {item.title}</h1>
     </li>)
     )}
     </ul>
  </div>
   )
}
export default App;



