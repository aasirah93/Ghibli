
import React, { useState, useEffect } from 'react';

function Searchbar(){

  const [search, setSearch] = useState("");

return (

   
    
    <div>

      <input type="text" style={{
        width: '200px',
        height: '30px'
      }} containerStyle={{Color: 'white'}} inputStyle={{backgroundColor: 'white'}} 
      placeholder= "Search Movies" onChange={(e) => setSearch(e.target.value)}/>
      <button>Search Movies</button>
    </div>
    )

}



export default Searchbar