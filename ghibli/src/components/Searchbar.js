

function Searchbar(){

  const [search, setSearch] = React.useState("");



return (

    
    <div>

      <label>
      Search Film
      <input type="text" style={{
        width: '200px',
        height: '30px'
      }} containerStyle={{Color: 'white'}} inputStyle={{backgroundColor: 'white'}} 
      placeholder= "Search Movies" value={filter} onChange={(e) => setFilter(e.target.value)}/>
      </label>
    </div>
    )
}


export default Searchbar