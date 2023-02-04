import React from "react";

import { plantList } from "../../datas/plantes";

import PlantItem from "../plantItem";
import type { PlantItemProps } from "../plantItem";

const categories = plantList.reduce(
    (acc: Array<string>, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
)

function ShoppingList() {
    return (
        <div>
            <select>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <ul>
                {plantList.map((props:PlantItemProps) => (
					<PlantItem key={props.id}
						{...props}
					/>
				))}
            </ul>
        </div>
    )
}

export default ShoppingList;