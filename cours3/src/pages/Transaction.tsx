import { useState } from "react";
import Modalwebank,{ModalProps} from "../components/modal/modal";
import Table ,{TableProps, HeadCell} from "../components/table/table";
import { TableActionProps } from "../components/table/tableAction/TableAction";

type DataType ={
  id:number,
  title:String,
  url:string,
  thumbnailUrl:string
}

const Transaction = () => {

  const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

  function testAction(img:string | number) {
    console.log("ACTION on TableRow :");
    setShowModal(true);
    setModalData({img:img})
    console.log(img)
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

  const tableActions: TableActionProps[] = [
    {
        label:"test1",
        callback: testAction,
        id:-1,
        url:""
    }
]
  const headCells: HeadCell<DataType>[] = [
    {id:"id",label:"identifiant"},
    {id:"title",label:"Titre"},
    {id:"url",label:"image"},
    {id:"thumbnailUrl",label:"thumbnail"}
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
    fetchUrl:"https://jsonplaceholder.typicode.com/photos/",
    tableActions:tableActions
}


    return <>
      <h1>Transaction</h1>
      <Table<DataType> {...tableProps}></Table>
      <Modalwebank {...modalProps}/>
    </>;
  };
  
  export default Transaction;
  