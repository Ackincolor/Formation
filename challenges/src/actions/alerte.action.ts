import { AnyAction } from "@reduxjs/toolkit";
import { ActionType, Action } from "./actionType";
import { Dispatch } from "react";




export const getAlerts = () => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_ALERTS
        });
        console.log("testRedux");
    }
}