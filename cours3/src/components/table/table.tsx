import { useEffect, useState } from "react"

type DataType = {
    id: number,
    title: string,
    completed:boolean
}


function Table() {

    let [dataTable, setDataTable] = useState<DataType[] | null>(null);
    var displayData= [].map(
        (info:any)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.title}</td>
                    <td>{info.completed}</td>
                </tr>
            )
        }
    )
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {console.log(json)
        setDataTable(json)    
    })
    },[dataTable])

    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Sr.NO</th>
                    <th>Name</th>
                    <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable && dataTable.map(
                        (info:any)=>{
                            return(
                                <tr>
                                    <td>{info.id}</td>
                                    <td>{info.title}</td>
                                    <td>{info.completed && "yes"}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
             
        </div>
    )
}

export default Table;