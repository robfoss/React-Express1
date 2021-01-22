import React from 'react'

const Green = ({ getColor }) => {
    return (
        <button value="green" onClick={e =>  getColor(e.target.value)}>Green</button>
    )
}

export default Green
