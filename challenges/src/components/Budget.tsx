
import { useState } from "react";
import "../assets/css/budget.css"

type Depence = {
    name:string;
    value:number;
}

function Budget(){
    const[depences,setDepences] = useState<Depence[]>([]);
    const[totalAmount,setTotalAmount] = useState(0);
    const[newName, setNewName] = useState("");
    const[newPrice, setNewPrice] = useState(0);

    function handleAmount(event:React.FormEvent<HTMLInputElement>){
        if(!isNaN(event.currentTarget.valueAsNumber)){
            setTotalAmount(event.currentTarget.valueAsNumber)
        }else{

        }
    }

    function handleAdd(){
        let newArray = [...depences];
        newArray.push({name:newName, value:newPrice})
        setDepences(newArray);
        setNewName("");
        setNewPrice(0);
    }

    return(
        <>
        <div className="container containerBudget">
            <div className="budget">
                <h3>Budget</h3>
                <div className="inputWrapper">
                    <input type="number" placeholder="Montant Total" value={totalAmount} onInput={handleAmount}></input>
                    <button>Reset</button>
                </div>
            </div>
            <div className="depences">
                <h3>depences</h3>
                <div className="inputWrapper">
                    <input placeholder="Nom de la depence" onInput={(event) => setNewName(event.currentTarget.value)}></input>
                    <input placeholder="Montant" type="number" onInput={(event) => setNewPrice(event.currentTarget.valueAsNumber)}></input>
                    <button onClick={(event) => handleAdd()}>ajouter</button>
                </div>
            </div>
            <div className="summary">
                <table>
                    <tr>
                        <th>Total</th>
                        <th>depences</th>
                        <th>Restant</th>
                    </tr>
                    <tr>
                        <td>{totalAmount}</td>
                        <td>{depences.reduce((accu, current) => accu + current.value, 0)}</td>
                        <td>{depences.reduce((accu, current) => accu - current.value, totalAmount)}</td>
                    </tr>
                </table>
            </div>
            <div className="list">
                <h3>liste des depences</h3>
                <table>
                {depences.map((item) => (<tr><td>{item.name}</td><td>{item.value}€</td></tr>))}
                </table>
            </div>
        </div>
        </>
    )
}

export default Budget;