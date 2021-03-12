import React from 'react'


function Key({ items }) {
    return(
        <div>
            {items.map(p => (
            <div key={p}><h5>{p}</h5></div>
            ))}
        </div>
    )
}



export default Key