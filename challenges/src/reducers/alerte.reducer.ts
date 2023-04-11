
import { Action } from "../actions/actionType";

interface Alert {
    postId: number,
    id: number,
    name: string,
    body: string
}

interface State {
    alerts: Alert[];
    loading: boolean;
    error: string | null;
}


const initialState = { alerts: [{postId:1, id:1, name:"test",body:"testbody"}],loading: false, error:null};

export default function AlerteReducer(state: State = initialState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}