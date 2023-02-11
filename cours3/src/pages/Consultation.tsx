import Table ,{TableProps, HeadCell} from "../components/table/table";


const Consultation = () => {
    type DataType ={
        id:number,
        title:String,
        completed:Boolean
    }
    const headCells: HeadCell<DataType>[] = [
        {id:"id",label:"identifiant"},
        {id:"title",label:"Titre"},
        {id:"completed",label:"verifié"}
    ]

    const tableProps: TableProps<DataType> = {
        heads:headCells,
        rows: [],
        fetchUrl:"https://jsonplaceholder.typicode.com/todos/"
    }
    return (
        <>
        <h1>Consultation</h1>
        <Table<DataType> {...tableProps}></Table>
        </>
    );
  };
  
  export default Consultation;
  