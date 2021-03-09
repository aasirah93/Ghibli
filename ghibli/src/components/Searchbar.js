
import React, { useState, useEffect } from 'react';

function Searchbar({item}){

  const [search, setSearch] = useState("");

return (

   
    
    <div>

      <input type="text" style={{
        width: '200px',
        height: '30px'
      }} containerStyle={{Color: 'white'}} inputStyle={{backgroundColor: 'white'}} 
      placeholder= "Search Movies" value={search} onChange={(e) => setSearch(e.target.value)}/>
       <ul>
           {item.map(p => { 
               if(filter.length !== 0){
                   if(p.startsWith(filter)){
                    return <h4 style={{ color: 'Blue'}}>
                        {p}
                        </h4> 
                //    }else{
                //        return null
                   }
                }
           })}
           </ul>
      {/* <button>Search Movies</button> */}
    </div>
    )

}



export default Searchbar