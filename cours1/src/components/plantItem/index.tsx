import CareScale from "../careScale"

import './plantItem.css'

type PlantItemProps = {
    id : string,
    cover: string,
    name: string,
    water: number,
    light:number
}

function handleClick(name : string){
    console.log(name);
}


function PlantItem({ id, cover, name, water, light }:PlantItemProps) {
	return (
		<li key={id} className='plant-item' onClick={(event:React.MouseEvent<HTMLElement>) => handleClick(name)}>
			<img className='plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
export type {PlantItemProps}