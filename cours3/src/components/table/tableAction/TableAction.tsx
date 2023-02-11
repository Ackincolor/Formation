
type TableActionProps = {
    label:string,
    callback:Callback,
    id:number
}

interface Callback {
    (id: number| string): void;
  }

//defini une action afeectuer sur une ligne de tableau
function TableAction({callback, id}:TableActionProps) {
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        callback(id);
    }

    return (
        <>
        <button onClick={handleClick} className="btn-icon btn-icon-xs me-20" data-bs-toggle="tooltip" data-bs-placement="top" title="Pièce(s) jointe(s)">
            <svg className="icon fs-xxl text-red-500" aria-hidden="true">
            <use xlinkHref="./assets/img/icons/sprite.svg#paperclip"></use>
            </svg>

            <span className="badge rounded-pill bg-white text-red-500">
            <svg className="icon text-red-500" aria-hidden="true">
                <use xlinkHref="./assets/img/icons/sprite.svg#arrow-up-short"></use>
            </svg>
            </span>
        </button>
        </>
    )
}

export default TableAction;
export type {TableActionProps}