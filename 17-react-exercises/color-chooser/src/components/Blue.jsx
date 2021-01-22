import React from 'react'

const Blue = ({ getColor }) => {
    return (
        <div>
             <button value="blue" onClick={e =>  getColor(e.target.value)}>Blue</button>
        </div>
    )
}

export default Blue
