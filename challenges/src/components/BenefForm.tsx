import { useAppDispatch } from "../actions/hooks"
import { getAlerts } from "../actions/alerte.action"


export const BenefForm = () => {

    //recuperation des alertes
    const dispatch = useAppDispatch()
    return (<>
     <button
          aria-label="Increment value"
          onClick={() => dispatch(getAlerts())}
        >
          Alertes
        </button>
    </>)
}