import React from 'react'

const Red = ({ getColor }) => {
    return (
        <div>
            <button value="red" onClick={e =>  getColor(e.target.value)}>Red</button>
        </div>
    )
}

export default Red
