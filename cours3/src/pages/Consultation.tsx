import { useState } from "react";
import Modalwebank,{ModalProps} from "../components/modal/modal";
import Table ,{TableProps, HeadCell} from "../components/table/table";
import { TableActionProps } from "../components/table/tableAction/TableAction";


const Consultation = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    function testAction(id:string | number) {
        console.log("ACTION on TableRow :");
        setShowModal(true);
        setModalData({id:id})
        console.log(id)
    }

    function handleOKModal() {
        console.log("Autres action sur modal OK");
    }
    function handleCloseModal() {
        console.log("Autres action sur modal CLOSE");
        setShowModal(false);
    }
    function handleHideModal() {
        console.log("Autres action sur modal HIDE");
        setShowModal(false);
    }

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

    const tableActions: TableActionProps[] = [
        {
            label:"test1",
            callback: testAction,
            id:-1
        }
    ]

    let modalProps: ModalProps = {
        show:showModal,
        handleOK:handleOKModal,
        handleCancel:handleCloseModal,
        handleHide:handleHideModal,
        data:modalData
    }

    const tableProps: TableProps<DataType> = {
        heads:headCells,
        rows: [],
        fetchUrl:"https://jsonplaceholder.typicode.com/todos/",
        tableActions:tableActions
    }
    return (
        <>
        <h1>Consultation</h1>
        <Table<DataType> {...tableProps}></Table>
        <Modalwebank {...modalProps}/>
        </>
    );
  };
  
  export default Consultation;
  