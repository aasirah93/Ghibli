

function Searchbar({item}){

  const [filter, setFilter] = React.useState("");



return (

    
    <div>

      <label>
      Search Film
      <input type="text" style={{
        width: '200px',
        height: '30px'
      }} containerStyle={{Color: 'white'}} inputStyle={{backgroundColor: 'white'}} 
      placeholder= "Search Movies" value={filter} onChange={(e) => setFilter(e.target.value)}/>
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
      </label>
    </div>
    )
}


export default Searchbar