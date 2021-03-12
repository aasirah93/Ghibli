
import React from 'react';

function Searchbar(props) {

  const [search, setSearch] = React.useState("");

return (
   <div>

      <input type="text" style={{
        width: '200px',
        height: '30px'
      }} containerStyle={{Color: 'white'}} inputStyle={{backgroundColor: 'white'}} 
      placeholder= "Search Movies" value={search} onChange={(e) => setSearch(e.target.value)}/>
       
      {/* <button>Search Movies</button> */}
    </div>
    )

}



export default Searchbar