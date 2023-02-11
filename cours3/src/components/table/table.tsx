import { type } from "@testing-library/user-event/dist/type";
import { Callbacks } from "jquery";
import { useEffect, useState } from "react"
import TableAction ,{TableActionProps} from "./tableAction/TableAction";

type HeadCell<DataType> = {
    id: Extract<keyof DataType, string>;
    label: string;
  };
  
  type TableProps<DataType> = {
    heads: HeadCell<DataType>[],
    rows: Array<DataType>,
    fetchUrl:string,
    tableActions:TableActionProps[]
  };

  interface WithId {
    id:number
  }
  
function getPropertyAsString<T, K extends keyof T>(obj: T, key: K): String {
    return JSON.stringify(obj[key]);
}

function Table<T extends WithId>({ heads,tableActions,   fetchUrl }: TableProps<T>) {
    const ColumnsKeys = heads.map((item: HeadCell<T>) => item.id);
    let [dataTable, setDataTable] = useState<T[]>([]);
   
    useEffect(()=>{
        fetch(fetchUrl)
      .then(response => response.json())
      .then(json => {console.log(json)
        setDataTable(json)    
    })
    },[])

    return(
        <div>
            <table>
                <tr>
                    {heads.map((head, headKey) => {
                    return <th key={headKey}>{head.label}</th>;
                    })}
                </tr>
                {dataTable!.map((row, rowKey) => {
                    return (
                    <tr key={rowKey}>
                        {ColumnsKeys.map((column: keyof T, columnKey) => {
                        return <td key={columnKey}>{getPropertyAsString(row,column)}</td>;
                        })}
                        <td>
                            {tableActions.map((propsTableAction:TableActionProps) => {
                                propsTableAction.id = row.id;
                                return <TableAction key={propsTableAction.label} {...propsTableAction}/>
                            })}
                        </td>
                    </tr>
                    );
                })}
            </table>
        </div>
    )
}

export default Table;
export type {TableProps, HeadCell};