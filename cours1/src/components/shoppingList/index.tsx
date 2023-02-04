import React from "react";


const plantList = [
    'Monstera',
    'Ficus lyrata',
    'Pothos argenté',
    'Yucca',
    'Palmier'
]

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <li>{plant}</li>
            ))}
        </ul>
    )
}

export default ShoppingList;