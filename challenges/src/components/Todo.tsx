import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPen, faTrash} from "@fortawesome/free-solid-svg-icons"

import "../assets/css/todo.css"

type TodoItem = {
    name:string
    status:string;
    isMenuOpen:boolean;
}

function Todo() {

    const [currentFilter,setCurrentFilter] = useState("all");
    const [todoList, setTodoList] = useState<TodoItem[]>([]);

    function handleAdd(event: React.KeyboardEvent<HTMLInputElement>){
        if(event.key === 'Enter'){
            if((event.target as HTMLInputElement).value!=""){
                var elem = {name:(event.target as HTMLInputElement).value,
                    status:"pending",
                    isMenuOpen:false}
                setTodoList(list => [...list,elem]);
                };
                (event.target as HTMLInputElement).value = "";
            }                
    }

    function toogleShowMenu(index:number){
        let newArray = [...todoList];
        newArray[index].isMenuOpen = !newArray[index].isMenuOpen;
        setTodoList(newArray);
    }
    function handleEdit(index:number){

    }
    function handleDelete(index:number){
        let newArray = [...todoList];
        newArray.splice(index,1);
        setTodoList(newArray);
    }
    function handleUpdate(index:number,event:React.ChangeEvent<HTMLInputElement>){
        let newArray = [...todoList];
        newArray[index].status = event.target.checked?"completed":"pending";
        setTodoList(newArray);
    }

    return(
        <>
        <div className="wrapper">
            <div className="todoInput">
                <input type="text" name="" id="" placeholder="Ajoutez une tache" onKeyUp={handleAdd}/>
            </div>
            <div className="controls">
                <div className="filters">
                    <span id="all" className="active" onClick={() => setCurrentFilter("all") }>Toutes</span>
                    <span id="pending" onClick={() => setCurrentFilter("pending") }>En cours</span>
                    <span id="completed" onClick={() => setCurrentFilter("completed") }>Terminées</span>
                </div>
                <button className="clear-btn">Reset</button>
            </div>
            <ul className="tache-box">
                {
                todoList.map((item, index) => ({ item, index }))
                .filter(({ item }) => {if(currentFilter!=="all"){
                    return item.status === currentFilter
                    }else return true;
                }).map(({ item, index}) => (
                <li key={index} className="task">
                    <label htmlFor={index+""}>
                        <input type="checkbox" checked={item.status=="completed"?true:false} onChange={(event)=>handleUpdate(index,event)} name="" id={index+""} />
                        <p className={item.status=="completed"?"checked":""}>{item.name}</p>
                    </label>
                    <div className="settings">
                        <FontAwesomeIcon icon={faBars} onClick={() =>toogleShowMenu(index)} />
                        <ul className={"task-menu " + (item.isMenuOpen?"show":"")}>Edit
                            <li onClick={() =>handleEdit(index)}><FontAwesomeIcon icon={faPen}/>Modifier</li>
                            <li onClick={() =>handleDelete(index)}><FontAwesomeIcon icon={faTrash}/>Supprimer</li>
                        </ul>
                    </div>
                </li>
            ))}
            </ul>
        </div>
        </>
    )
}

export default Todo